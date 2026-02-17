/**
 * @jest-environment node
 */
import { NextRequest } from 'next/server';

// Mock jose before importing the route
jest.mock('jose', () => ({
  SignJWT: jest.fn().mockImplementation(() => ({
    setProtectedHeader: jest.fn().mockReturnThis(),
    setExpirationTime: jest.fn().mockReturnThis(),
    sign: jest.fn().mockResolvedValue('mock-jwt-token'),
  })),
}));

jest.mock('@/lib/db');
jest.mock('@/lib/auth');

// Import after mocks
import { POST } from './route';

const { getUserByEmail, verifyPassword } = require('@/lib/auth');
const { prisma } = require('@/lib/db');

describe('/api/auth/signin-custom', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = {
      ...originalEnv,
      NEXTAUTH_SECRET: 'test-secret-key-at-least-32-characters-long',
    };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('should reject missing email', async () => {
    const req = new NextRequest('http://localhost:3000/api/auth/signin-custom', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: 'password123' }),
    });

    const response = await POST(req);
    expect(response.status).toBe(400);
  });

  it('should reject empty password', async () => {
    const req = new NextRequest('http://localhost:3000/api/auth/signin-custom', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', password: '' }),
    });

    const response = await POST(req);
    expect(response.status).toBe(400);
  });

  it('should reject non-existent user', async () => {
    getUserByEmail.mockResolvedValue(null);

    const req = new NextRequest('http://localhost:3000/api/auth/signin-custom', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'nouser@example.com', password: 'password123' }),
    });

    const response = await POST(req);
    expect(response.status).toBe(401);
    const data = await response.json();
    expect(data.error).toContain('Invalid email or password');
  });

  it('should reject inactive user', async () => {
    getUserByEmail.mockResolvedValue({
      id: 'user-1',
      email: 'test@example.com',
      password_hash: '$2b$12$hash',
      is_active: false,
      role: 'student',
      first_name: 'Test',
      last_name: 'User',
    });

    const req = new NextRequest('http://localhost:3000/api/auth/signin-custom', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', password: 'password123' }),
    });

    const response = await POST(req);
    expect(response.status).toBe(403);
  });

  it('should reject wrong password', async () => {
    getUserByEmail.mockResolvedValue({
      id: 'user-1',
      email: 'test@example.com',
      password_hash: '$2b$12$hash',
      is_active: true,
      role: 'student',
      first_name: 'Test',
      last_name: 'User',
    });
    verifyPassword.mockResolvedValue(false);

    const req = new NextRequest('http://localhost:3000/api/auth/signin-custom', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', password: 'wrongpassword' }),
    });

    const response = await POST(req);
    expect(response.status).toBe(401);
  });

  it('should sign in successfully with valid credentials', async () => {
    getUserByEmail.mockResolvedValue({
      id: 'user-1',
      email: 'test@example.com',
      password_hash: '$2b$12$hash',
      is_active: true,
      role: 'student',
      first_name: 'Test',
      last_name: 'User',
    });
    verifyPassword.mockResolvedValue(true);
    prisma.user.update.mockResolvedValue({});

    const req = new NextRequest('http://localhost:3000/api/auth/signin-custom', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', password: 'correctpassword' }),
    });

    const response = await POST(req);
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.user.email).toBe('test@example.com');
  });

  it('should return human-readable error messages', async () => {
    getUserByEmail.mockRejectedValue(new Error('Connection failed'));

    const req = new NextRequest('http://localhost:3000/api/auth/signin-custom', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', password: 'password123' }),
    });

    const response = await POST(req);
    expect(response.status).toBe(500);
    const data = await response.json();
    expect(typeof data.error).toBe('string');
    expect(data.error).not.toContain('[object Object]');
  });
});
