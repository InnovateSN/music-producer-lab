/**
 * @jest-environment node
 */
import { NextRequest } from 'next/server';
import crypto from 'crypto';

jest.mock('@/lib/db');
jest.mock('bcryptjs', () => ({
  hash: jest.fn().mockResolvedValue('mock-password-hash'),
}));

import { POST } from './route';

const { query } = require('@/lib/db');

describe('/api/auth/reset-password', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('resets password with a valid raw token by querying with the digest', async () => {
    query
      .mockResolvedValueOnce([{ id: 'reset-1', user_id: 'user-1' }])
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([]);

    const rawToken = 'valid-raw-token';
    const req = new NextRequest('http://localhost:3000/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: rawToken, password: 'newpassword123' }),
    });

    const response = await POST(req);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(query.mock.calls[0][0]).toContain('token_digest = $1');
    expect(query.mock.calls[0][1][0]).toBe(
      crypto.createHash('sha256').update(rawToken).digest('hex')
    );
  });

  it('rejects an invalid token', async () => {
    query.mockResolvedValueOnce([]);

    const req = new NextRequest('http://localhost:3000/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: 'invalid-token', password: 'newpassword123' }),
    });

    const response = await POST(req);
    expect(response.status).toBe(400);
  });

  it('rejects expired or already-used tokens', async () => {
    query.mockResolvedValueOnce([]);

    const req = new NextRequest('http://localhost:3000/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: 'expired-or-used-token', password: 'newpassword123' }),
    });

    const response = await POST(req);
    expect(response.status).toBe(400);
  });
});
