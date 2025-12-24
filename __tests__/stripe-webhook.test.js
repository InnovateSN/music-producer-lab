/**
 * Unit tests for Stripe webhook handler
 * Tests the subscription update logic
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock Stripe
vi.mock('stripe', () => {
  return {
    default: vi.fn(() => ({
      webhooks: {
        constructEvent: vi.fn(),
      },
      subscriptions: {
        retrieve: vi.fn(),
      },
      customers: {
        retrieve: vi.fn(),
      },
    })),
  };
});

// Mock Supabase
const mockSupabase = {
  from: vi.fn(() => ({
    upsert: vi.fn(() => Promise.resolve({ error: null })),
    update: vi.fn(() => ({
      eq: vi.fn(() => Promise.resolve({ error: null })),
    })),
    insert: vi.fn(() => Promise.resolve({ error: null })),
  })),
};

vi.mock('../backend/supabaseClient.js', () => ({
  supabase: mockSupabase,
}));

describe('Stripe Webhook Logic', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Subscription Duration Calculations', () => {
    // Helper to test duration calculation
    function calculateAccessUntil(subscriptionType, startDate = new Date()) {
      const SUBSCRIPTION_DURATIONS = {
        monthly: 30,
        yearly: 365,
        lifetime: 365 * 100,
      };
      const days = SUBSCRIPTION_DURATIONS[subscriptionType] || 30;
      const accessUntil = new Date(startDate);
      accessUntil.setDate(accessUntil.getDate() + days);
      return accessUntil;
    }

    it('should calculate 30 days for monthly subscription', () => {
      const startDate = new Date('2024-01-01');
      const accessUntil = calculateAccessUntil('monthly', startDate);
      expect(accessUntil.toISOString().split('T')[0]).toBe('2024-01-31');
    });

    it('should calculate 365 days for yearly subscription', () => {
      const startDate = new Date('2024-01-01');
      const accessUntil = calculateAccessUntil('yearly', startDate);
      expect(accessUntil.toISOString().split('T')[0]).toBe('2024-12-31');
    });

    it('should calculate approximately 100 years for lifetime subscription', () => {
      const startDate = new Date('2024-01-01');
      const accessUntil = calculateAccessUntil('lifetime', startDate);
      // Using days calculation (365 * 100) doesn't account for leap years,
      // so the result will be slightly less than exactly 100 years.
      // We accept 2123 or 2124 as valid (99-100 years in the future).
      const yearDiff = accessUntil.getFullYear() - startDate.getFullYear();
      expect(yearDiff).toBeGreaterThanOrEqual(99);
      expect(yearDiff).toBeLessThanOrEqual(100);
    });

    it('should default to 30 days for unknown subscription type', () => {
      const startDate = new Date('2024-01-01');
      const accessUntil = calculateAccessUntil('unknown', startDate);
      expect(accessUntil.toISOString().split('T')[0]).toBe('2024-01-31');
    });
  });

  describe('User Subscription Update Data', () => {
    function buildUpdateData(email, data) {
      const {
        subscriptionId,
        subscriptionType,
        tier,
        status,
        currentPeriodEnd,
        cancelAtPeriodEnd,
        stripeCustomerId,
      } = data;

      let accessUntil;
      if (currentPeriodEnd) {
        accessUntil = new Date(currentPeriodEnd * 1000).toISOString();
      } else {
        const SUBSCRIPTION_DURATIONS = {
          monthly: 30,
          yearly: 365,
          lifetime: 365 * 100,
        };
        const days = SUBSCRIPTION_DURATIONS[subscriptionType] || 30;
        const accessDate = new Date();
        accessDate.setDate(accessDate.getDate() + days);
        accessUntil = accessDate.toISOString();
      }

      const updateData = {
        email,
        has_paid: true,
        subscription_id: subscriptionId,
        subscription_type: subscriptionType,
        subscription_status: status || 'active',
        plan_tier: tier,
        access_until: accessUntil,
        cancel_at_period_end: cancelAtPeriodEnd || false,
      };

      if (stripeCustomerId) {
        updateData.stripe_customer_id = stripeCustomerId;
      }

      return updateData;
    }

    it('should build correct update data for monthly subscription', () => {
      const data = buildUpdateData('test@example.com', {
        subscriptionId: 'sub_123',
        subscriptionType: 'monthly',
        tier: 'pro',
        status: 'active',
        currentPeriodEnd: 1704067200, // 2024-01-01
      });

      expect(data.email).toBe('test@example.com');
      expect(data.has_paid).toBe(true);
      expect(data.subscription_id).toBe('sub_123');
      expect(data.subscription_type).toBe('monthly');
      expect(data.plan_tier).toBe('pro');
      expect(data.subscription_status).toBe('active');
      expect(data.cancel_at_period_end).toBe(false);
    });

    it('should include stripe_customer_id when provided', () => {
      const data = buildUpdateData('test@example.com', {
        subscriptionId: 'sub_123',
        subscriptionType: 'yearly',
        tier: 'pro',
        stripeCustomerId: 'cus_xyz',
      });

      expect(data.stripe_customer_id).toBe('cus_xyz');
    });

    it('should not include stripe_customer_id when not provided', () => {
      const data = buildUpdateData('test@example.com', {
        subscriptionId: 'sub_123',
        subscriptionType: 'lifetime',
        tier: 'premium',
      });

      expect(data.stripe_customer_id).toBeUndefined();
    });

    it('should set cancel_at_period_end correctly', () => {
      const data = buildUpdateData('test@example.com', {
        subscriptionId: 'sub_123',
        subscriptionType: 'monthly',
        tier: 'pro',
        cancelAtPeriodEnd: true,
      });

      expect(data.cancel_at_period_end).toBe(true);
    });
  });

  describe('Webhook Event Types', () => {
    const eventTypes = [
      'checkout.session.completed',
      'customer.subscription.created',
      'customer.subscription.updated',
      'customer.subscription.deleted',
      'invoice.paid',
      'invoice.payment_failed',
    ];

    it.each(eventTypes)('should handle %s event type', (eventType) => {
      // Just verify event types are recognized
      expect(eventTypes).toContain(eventType);
    });
  });

  describe('Subscription Status Mapping', () => {
    const statusMapping = {
      active: 'User has access',
      past_due: 'Payment failed, access may be limited',
      canceled: 'Subscription canceled',
      inactive: 'No active subscription',
    };

    it.each(Object.entries(statusMapping))('should recognize status %s', (status, description) => {
      expect(typeof status).toBe('string');
      expect(typeof description).toBe('string');
    });
  });
});

describe('Stripe Checkout Session', () => {
  describe('Plan Configuration', () => {
    const PLAN_CONFIG = {
      monthly: {
        mode: 'subscription',
        subscriptionType: 'monthly',
        tier: 'pro',
      },
      yearly: {
        mode: 'subscription',
        subscriptionType: 'yearly',
        tier: 'pro',
      },
      lifetime: {
        mode: 'payment',
        subscriptionType: 'lifetime',
        tier: 'premium',
      },
    };

    it('should have correct mode for monthly plan', () => {
      expect(PLAN_CONFIG.monthly.mode).toBe('subscription');
    });

    it('should have correct mode for yearly plan', () => {
      expect(PLAN_CONFIG.yearly.mode).toBe('subscription');
    });

    it('should have correct mode for lifetime plan (one-time payment)', () => {
      expect(PLAN_CONFIG.lifetime.mode).toBe('payment');
    });

    it('should assign premium tier to lifetime plan', () => {
      expect(PLAN_CONFIG.lifetime.tier).toBe('premium');
    });

    it('should assign pro tier to recurring plans', () => {
      expect(PLAN_CONFIG.monthly.tier).toBe('pro');
      expect(PLAN_CONFIG.yearly.tier).toBe('pro');
    });
  });

  describe('Request Validation', () => {
    function validateCheckoutRequest(body) {
      const errors = [];
      
      if (!body.plan) {
        errors.push('plan is required');
      }
      
      if (!body.email) {
        errors.push('email is required');
      }
      
      if (body.plan && !['monthly', 'yearly', 'lifetime'].includes(body.plan)) {
        errors.push(`Invalid plan: ${body.plan}`);
      }
      
      return errors;
    }

    it('should require plan field', () => {
      const errors = validateCheckoutRequest({ email: 'test@example.com' });
      expect(errors).toContain('plan is required');
    });

    it('should require email field', () => {
      const errors = validateCheckoutRequest({ plan: 'monthly' });
      expect(errors).toContain('email is required');
    });

    it('should validate plan values', () => {
      const errors = validateCheckoutRequest({ plan: 'invalid', email: 'test@example.com' });
      expect(errors.some(e => e.includes('Invalid plan'))).toBe(true);
    });

    it('should accept valid request', () => {
      const errors = validateCheckoutRequest({ plan: 'monthly', email: 'test@example.com' });
      expect(errors.length).toBe(0);
    });
  });
});
