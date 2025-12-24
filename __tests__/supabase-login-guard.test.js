/**
 * Unit tests for supabase-login-guard.js
 * Run with: npx vitest run __tests__/supabase-login-guard.test.js
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock Supabase client factory
function createMockClient({ 
  session = null, 
  sessionError = null, 
  profile = null, 
  profileError = null 
}) {
  return {
    auth: {
      getSession: vi.fn().mockResolvedValue({
        data: { session },
        error: sessionError,
      }),
    },
    from: vi.fn().mockReturnValue({
      select: vi.fn().mockReturnValue({
        eq: vi.fn().mockReturnValue({
          maybeSingle: vi.fn().mockResolvedValue({
            data: profile,
            error: profileError,
          }),
        }),
      }),
    }),
  };
}

// We need to mock the module before importing
vi.mock('@supabase/supabase-js', () => ({
  createClient: vi.fn(() => null),
}));

// Import after mocking
const { 
  enforcePremiumAccessAfterLogin, 
  checkPremiumAccess, 
  hasPremiumAccess,
  redirectToPremiumRequired 
} = await import('../supabase-login-guard.js');

describe('enforcePremiumAccessAfterLogin', () => {
  let mockOnDenied;
  let originalWindow;

  beforeEach(() => {
    mockOnDenied = vi.fn();
    // Save original window for restoration
    originalWindow = global.window;
  });

  afterEach(() => {
    global.window = originalWindow;
    vi.clearAllMocks();
  });

  describe('Client Validation', () => {
    it('should deny access when client is null', async () => {
      const result = await enforcePremiumAccessAfterLogin(null, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(false);
      expect(result.reason).toBe('NO_CLIENT');
      expect(mockOnDenied).toHaveBeenCalledWith('NO_CLIENT');
    });

    it('should deny access when client is undefined', async () => {
      const result = await enforcePremiumAccessAfterLogin(undefined, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(false);
      expect(result.reason).toBe('NO_CLIENT');
    });

    it('should deny access when client lacks auth.getSession', async () => {
      const invalidClient = { from: vi.fn() };
      const result = await enforcePremiumAccessAfterLogin(invalidClient, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(false);
      expect(result.reason).toBe('NO_CLIENT');
    });

    it('should deny access when client lacks from method', async () => {
      const invalidClient = { auth: { getSession: vi.fn() } };
      const result = await enforcePremiumAccessAfterLogin(invalidClient, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(false);
      expect(result.reason).toBe('NO_CLIENT');
    });
  });

  describe('Session Handling', () => {
    it('should deny access when no session exists', async () => {
      const client = createMockClient({ session: null });
      const result = await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(false);
      expect(result.reason).toBe('NO_SESSION');
      expect(mockOnDenied).toHaveBeenCalledWith('NO_SESSION');
    });

    it('should deny access when session has error', async () => {
      const client = createMockClient({ 
        sessionError: { message: 'Token expired' } 
      });
      const result = await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(false);
      expect(result.reason).toBe('SESSION_ERROR');
      expect(result.error).toBeDefined();
    });

    it('should deny access when session exists but user is null', async () => {
      const client = createMockClient({ 
        session: { user: null } 
      });
      const result = await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(false);
      expect(result.reason).toBe('NO_SESSION');
    });
  });

  describe('Profile Handling', () => {
    it('should deny access when profile not found', async () => {
      const client = createMockClient({
        session: { user: { id: '123', email: 'test@example.com' } },
        profile: null,
      });
      const result = await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(false);
      expect(result.reason).toBe('NO_PROFILE');
    });

    it('should deny access when profile fetch has error', async () => {
      const client = createMockClient({
        session: { user: { id: '123', email: 'test@example.com' } },
        profileError: { message: 'Database error' },
      });
      const result = await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(false);
      expect(result.reason).toBe('PROFILE_ERROR');
    });
  });

  describe('Subscription Logic - Free Plan', () => {
    it('should deny access for free subscription without has_paid', async () => {
      const client = createMockClient({
        session: { user: { id: '123', email: 'test@example.com' } },
        profile: { subscription_type: 'free', has_paid: false, access_until: null },
      });
      const result = await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(false);
      expect(result.reason).toBe('FREE_PLAN');
    });

    it('should deny access when subscription_type is null (defaults to free)', async () => {
      const client = createMockClient({
        session: { user: { id: '123', email: 'test@example.com' } },
        profile: { subscription_type: null, has_paid: false, access_until: null },
      });
      const result = await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(false);
      expect(result.reason).toBe('FREE_PLAN');
    });
  });

  describe('Subscription Logic - has_paid', () => {
    it('should grant access when has_paid is true (even if subscription is free)', async () => {
      const client = createMockClient({
        session: { user: { id: '123', email: 'test@example.com' } },
        profile: { subscription_type: 'free', has_paid: true, access_until: null },
      });
      const result = await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(true);
      expect(result.reason).toBe('VALID');
      expect(mockOnDenied).not.toHaveBeenCalled();
    });

    it('should grant access when has_paid is true (even if access_until is expired)', async () => {
      const pastDate = new Date(Date.now() - 86400000).toISOString(); // -1 day
      const client = createMockClient({
        session: { user: { id: '123', email: 'test@example.com' } },
        profile: { subscription_type: 'premium', has_paid: true, access_until: pastDate },
      });
      const result = await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(true);
      expect(result.access.hasPaid).toBe(true);
      expect(result.access.accessValid).toBe(false);
    });
  });

  describe('Subscription Logic - access_until', () => {
    it('should grant access when access_until is in the future', async () => {
      const futureDate = new Date(Date.now() + 86400000).toISOString(); // +1 day
      const client = createMockClient({
        session: { user: { id: '123', email: 'test@example.com' } },
        profile: { subscription_type: 'premium', has_paid: false, access_until: futureDate },
      });
      const result = await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(true);
      expect(result.access.accessValid).toBe(true);
    });

    it('should deny access when access_until is expired', async () => {
      const pastDate = new Date(Date.now() - 86400000).toISOString(); // -1 day
      const client = createMockClient({
        session: { user: { id: '123', email: 'test@example.com' } },
        profile: { subscription_type: 'premium', has_paid: false, access_until: pastDate },
      });
      const result = await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(false);
      expect(result.reason).toBe('EXPIRED');
    });

    it('should handle malformed access_until date gracefully', async () => {
      const client = createMockClient({
        session: { user: { id: '123', email: 'test@example.com' } },
        profile: { subscription_type: 'premium', has_paid: false, access_until: 'not-a-date' },
      });
      const result = await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(false);
      expect(result.access.accessValid).toBe(false);
    });

    it('should handle null access_until', async () => {
      const client = createMockClient({
        session: { user: { id: '123', email: 'test@example.com' } },
        profile: { subscription_type: 'premium', has_paid: false, access_until: null },
      });
      const result = await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(false);
    });

    it('should apply grace period for clock skew (within 1 minute tolerance)', async () => {
      // Date 30 seconds in the past should still be valid due to grace period
      const recentPast = new Date(Date.now() - 30000).toISOString();
      const client = createMockClient({
        session: { user: { id: '123', email: 'test@example.com' } },
        profile: { subscription_type: 'premium', has_paid: false, access_until: recentPast },
      });
      const result = await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(true);
      expect(result.access.accessValid).toBe(true);
    });
  });

  describe('Configuration Options', () => {
    it('should use custom profile table when specified', async () => {
      const client = createMockClient({
        session: { user: { id: '123', email: 'test@example.com' } },
        profile: { has_paid: true },
      });
      
      await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied,
        profileTable: 'custom_profiles',
      });
      
      expect(client.from).toHaveBeenCalledWith('custom_profiles');
    });

    it('should use email lookup when lookupField is email', async () => {
      const client = createMockClient({
        session: { user: { id: '123', email: 'test@example.com' } },
        profile: { has_paid: true },
      });
      
      await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied,
        lookupField: 'email',
      });
      
      // Verify eq was called with email field
      const fromMock = client.from('users');
      const selectMock = fromMock.select();
      expect(selectMock.eq).toHaveBeenCalledWith('email', 'test@example.com');
    });

    it('should use id lookup by default', async () => {
      const client = createMockClient({
        session: { user: { id: '123', email: 'test@example.com' } },
        profile: { has_paid: true },
      });
      
      await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied,
      });
      
      const fromMock = client.from('users');
      const selectMock = fromMock.select();
      expect(selectMock.eq).toHaveBeenCalledWith('id', '123');
    });
  });

  describe('Error Handling', () => {
    it('should handle unexpected errors gracefully', async () => {
      const client = {
        auth: {
          getSession: vi.fn().mockRejectedValue(new Error('Network error')),
        },
        from: vi.fn(),
      };
      
      const result = await enforcePremiumAccessAfterLogin(client, { 
        onAccessDenied: mockOnDenied 
      });
      
      expect(result.granted).toBe(false);
      expect(result.reason).toBe('UNEXPECTED_ERROR');
      expect(result.error).toBeDefined();
    });
  });
});

describe('checkPremiumAccess (SSR-safe)', () => {
  let mockOnDenied;

  beforeEach(() => {
    mockOnDenied = vi.fn();
  });

  it('should return result without calling onAccessDenied', async () => {
    const client = createMockClient({ session: null });
    const result = await checkPremiumAccess(client);
    
    expect(result.granted).toBe(false);
    expect(result.reason).toBe('NO_SESSION');
    // No redirect should occur - this is the key difference from enforcePremiumAccessAfterLogin
  });

  it('should work with valid premium user', async () => {
    const client = createMockClient({
      session: { user: { id: '123', email: 'test@example.com' } },
      profile: { has_paid: true },
    });
    const result = await checkPremiumAccess(client);
    
    expect(result.granted).toBe(true);
  });
});

describe('hasPremiumAccess', () => {
  it('should return true for premium user', async () => {
    const client = createMockClient({
      session: { user: { id: '123', email: 'test@example.com' } },
      profile: { has_paid: true },
    });
    const result = await hasPremiumAccess(client);
    
    expect(result).toBe(true);
  });

  it('should return false for non-premium user', async () => {
    const client = createMockClient({
      session: { user: { id: '123', email: 'test@example.com' } },
      profile: { has_paid: false, subscription_type: 'free' },
    });
    const result = await hasPremiumAccess(client);
    
    expect(result).toBe(false);
  });

  it('should return false when no session', async () => {
    const client = createMockClient({ session: null });
    const result = await hasPremiumAccess(client);
    
    expect(result).toBe(false);
  });
});

describe('redirectToPremiumRequired', () => {
  let originalWindow;

  beforeEach(() => {
    originalWindow = global.window;
  });

  afterEach(() => {
    global.window = originalWindow;
  });

  it('should throw error in SSR environment (no window)', () => {
    global.window = undefined;
    
    expect(() => redirectToPremiumRequired('TEST_REASON')).toThrow();
    
    try {
      redirectToPremiumRequired('TEST_REASON');
    } catch (err) {
      expect(err.code).toBe('PREMIUM_REQUIRED');
      expect(err.reason).toBe('TEST_REASON');
    }
  });

  it('should set window.location.href in browser environment', () => {
    const mockLocation = {
      href: 'https://example.com/page',
    };
    
    global.window = {
      location: mockLocation,
    };
    
    // Mock URL constructor
    global.URL = class {
      constructor(url) {
        this.href = url;
        this._searchParams = new Map();
      }
      get searchParams() {
        return {
          get: (key) => this._searchParams.get(key),
          set: (key, value) => this._searchParams.set(key, value),
        };
      }
      toString() {
        const params = Array.from(this._searchParams.entries())
          .map(([k, v]) => `${k}=${v}`)
          .join('&');
        return params ? `${this.href}?${params}` : this.href;
      }
    };
    
    redirectToPremiumRequired('TEST');
    
    expect(mockLocation.href).toContain('premium=required');
  });

  it('should not redirect if already on premium=required page', () => {
    const originalHref = 'https://example.com/page?premium=required';
    const mockLocation = {
      href: originalHref,
    };
    
    global.window = {
      location: mockLocation,
    };
    
    global.URL = class {
      constructor(url) {
        this.href = url;
      }
      get searchParams() {
        return {
          get: (key) => key === 'premium' ? 'required' : null,
          set: () => {},
        };
      }
      toString() {
        return this.href;
      }
    };
    
    redirectToPremiumRequired();
    
    // Should not change the URL
    expect(mockLocation.href).toBe(originalHref);
  });
});
