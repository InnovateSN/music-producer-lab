/**
 * @jest-environment node
 */
import { NextRequest } from 'next/server';
import crypto from 'crypto';

jest.mock('@/lib/db');
jest.mock('@/lib/email');

import { POST } from './route';

const { query } = require('@/lib/db');
const { sendPasswordResetEmail } = require('@/lib/email');

describe('/api/auth/forgot-password', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    sendPasswordResetEmail.mockResolvedValue({ success: true });
  });

  it('stores only token digest while emailing the raw token', async () => {
    query
      .mockResolvedValueOnce([
        { id: 'user-1', email: 'test@example.com', first_name: 'Test', is_active: true },
      ])
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([]);

    const req = new NextRequest('http://localhost:3000/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com' }),
    });

    const response = await POST(req);
    expect(response.status).toBe(200);

    const insertParams = query.mock.calls[2][1];
    const emailedToken = sendPasswordResetEmail.mock.calls[0][1];
    const expectedDigest = crypto.createHash('sha256').update(emailedToken).digest('hex');

    expect(query.mock.calls[2][0]).toContain('token_digest');
    expect(insertParams[1]).toBe(expectedDigest);
    expect(insertParams[1]).not.toBe(emailedToken);
  });
});
