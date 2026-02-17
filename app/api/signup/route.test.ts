/**
 * @jest-environment node
 */
import { POST } from './route';
import { NextRequest } from 'next/server';

jest.mock('@/lib/db');
jest.mock('@/lib/auth');

const { createUser } = require('@/lib/auth');

describe('/api/signup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    createUser.mockResolvedValue({
      id: 'test-user-id',
      email: 'test@example.com',
    });
  });

  it('should reject missing email', async () => {
    const req = new NextRequest('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: '12345678' }),
    });

    const response = await POST(req);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toBeTruthy();
  });

  it('should reject weak password', async () => {
    const req = new NextRequest('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', password: '123' }),
    });

    const response = await POST(req);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toContain('8 characters');
  });

  it('should reject invalid email format', async () => {
    const req = new NextRequest('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'not-an-email', password: '12345678' }),
    });

    const response = await POST(req);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toContain('email');
  });

  it('should create user with valid data', async () => {
    const req = new NextRequest('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'securepassword123',
        firstName: 'John',
        lastName: 'Doe',
      }),
    });

    const response = await POST(req);
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.user.email).toBe('test@example.com');
  });

  it('should create user without optional firstName/lastName', async () => {
    const req = new NextRequest('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'securepassword123',
      }),
    });

    const response = await POST(req);
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.success).toBe(true);
  });

  it('should handle duplicate email (Prisma P2002)', async () => {
    createUser.mockRejectedValue({ code: 'P2002' });

    const req = new NextRequest('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'existing@example.com',
        password: 'securepassword123',
      }),
    });

    const response = await POST(req);
    expect(response.status).toBe(409);
    const data = await response.json();
    expect(data.error).toContain('already exists');
  });

  it('should return human-readable error on server failure', async () => {
    createUser.mockRejectedValue(new Error('DB connection failed'));

    const req = new NextRequest('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'securepassword123',
      }),
    });

    const response = await POST(req);
    expect(response.status).toBe(500);
    const data = await response.json();
    // Should be a human-readable string, not [object Object]
    expect(typeof data.error).toBe('string');
    expect(data.error).not.toContain('[object Object]');
  });
});
