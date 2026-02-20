/**
 * @jest-environment node
 */
import { NextRequest } from 'next/server';
import crypto from 'crypto';

jest.mock('@/lib/db');

import { POST } from './route';

const { query } = require('@/lib/db');

describe('/api/auth/verify-reset-token', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('accepts a valid raw token by matching its server-side digest', async () => {
    query.mockResolvedValueOnce([{ id: 'token-1', user_id: 'user-1', expires_at: new Date(), used_at: null }]);
    const rawToken = 'raw-reset-token';

    const req = new NextRequest('http://localhost:3000/api/auth/verify-reset-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: rawToken }),
    });

    const response = await POST(req);
    const data = await response.json();

    expect(data.valid).toBe(true);
    expect(query.mock.calls[0][0]).toContain('token_digest = $1');
    expect(query.mock.calls[0][1][0]).toBe(
      crypto.createHash('sha256').update(rawToken).digest('hex')
    );
  });

  it('rejects an invalid token', async () => {
    query.mockResolvedValueOnce([]);

    const req = new NextRequest('http://localhost:3000/api/auth/verify-reset-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: 'invalid-token' }),
    });

    const response = await POST(req);
    const data = await response.json();

    expect(data.valid).toBe(false);
  });

  it('rejects expired or already-used tokens', async () => {
    query.mockResolvedValueOnce([]);

    const req = new NextRequest('http://localhost:3000/api/auth/verify-reset-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: 'expired-or-used-token' }),
    });

    const response = await POST(req);
    const data = await response.json();

    expect(data.valid).toBe(false);
  });
});
