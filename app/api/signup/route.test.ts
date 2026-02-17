import { NextRequest } from 'next/server';
import { POST } from './route';

jest.mock('@/lib/security', () => ({
  validateOrigin: () => null,
}));

jest.mock('@/lib/auth', () => ({
  getUserByEmail: jest.fn().mockResolvedValue(null),
  createUser: jest.fn().mockResolvedValue({ id: '1', email: 'test@example.com' }),
}));

jest.mock('@/lib/email', () => ({
  sendWelcomeEmail: jest.fn().mockResolvedValue(undefined),
}));

describe('/api/signup', () => {
  it('should reject missing email', async () => {
    const req = new NextRequest('http://localhost:3000/api/signup', {
      method: 'POST',
      body: JSON.stringify({ password: '12345678' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(req as unknown as Request);
    expect(response.status).toBe(400);
  });

  it('should reject weak password', async () => {
    const req = new NextRequest('http://localhost:3000/api/signup', {
      method: 'POST',
      body: JSON.stringify({ email: 'test@example.com', password: '123' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST(req as unknown as Request);
    expect(response.status).toBe(400);
  });
});
