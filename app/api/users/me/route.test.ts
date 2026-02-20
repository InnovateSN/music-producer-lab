/**
 * @jest-environment node
 */
import { NextRequest } from 'next/server';

jest.mock('@/lib/db');
jest.mock('@/lib/clerk', () => ({
  getCurrentUser: jest.fn(),
}));

import { PATCH } from './route';

const db = require('@/lib/db').default;
const { getCurrentUser } = require('@/lib/clerk');

describe('/api/users/me PATCH', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
    };

    getCurrentUser.mockResolvedValue({
      id: 'user-1',
      first_name: 'Existing',
      last_name: 'Name',
      email_notifications: true,
      progress_emails: true,
      marketing_emails: false,
    });
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('updates a single explicitly provided field', async () => {
    db.updateUser.mockResolvedValue({
      id: 'user-1',
      first_name: 'Updated',
      last_name: 'Name',
      email_notifications: true,
      progress_emails: true,
      marketing_emails: false,
    });

    const req = new NextRequest('http://localhost:3000/api/users/me', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', origin: 'http://localhost:3000' },
      body: JSON.stringify({ first_name: 'Updated' }),
    });

    const response = await PATCH(req);
    expect(response.status).toBe(200);
    expect(db.updateUser).toHaveBeenCalledWith('user-1', { first_name: 'Updated' });
  });

  it('updates multiple explicitly provided fields', async () => {
    db.updateUser.mockResolvedValue({
      id: 'user-1',
      first_name: 'Updated',
      last_name: 'User',
      email_notifications: false,
      progress_emails: true,
      marketing_emails: false,
    });

    const req = new NextRequest('http://localhost:3000/api/users/me', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', origin: 'http://localhost:3000' },
      body: JSON.stringify({
        first_name: 'Updated',
        last_name: 'User',
        email_notifications: false,
      }),
    });

    const response = await PATCH(req);
    expect(response.status).toBe(200);
    expect(db.updateUser).toHaveBeenCalledWith('user-1', {
      first_name: 'Updated',
      last_name: 'User',
      email_notifications: false,
    });
  });

  it('returns 400 when no updatable fields are provided', async () => {
    const req = new NextRequest('http://localhost:3000/api/users/me', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', origin: 'http://localhost:3000' },
      body: JSON.stringify({}),
    });

    const response = await PATCH(req);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toContain('No updatable fields');
    expect(db.updateUser).not.toHaveBeenCalled();
  });

  it('keeps omitted fields unchanged when updating a subset of fields', async () => {
    db.updateUser.mockResolvedValue({
      id: 'user-1',
      first_name: 'Existing',
      last_name: 'Name',
      email_notifications: true,
      progress_emails: false,
      marketing_emails: false,
    });

    const req = new NextRequest('http://localhost:3000/api/users/me', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', origin: 'http://localhost:3000' },
      body: JSON.stringify({ progress_emails: false }),
    });

    const response = await PATCH(req);
    expect(response.status).toBe(200);
    expect(db.updateUser).toHaveBeenCalledWith('user-1', { progress_emails: false });

    const data = await response.json();
    expect(data.user.first_name).toBe('Existing');
    expect(data.user.last_name).toBe('Name');
    expect(data.user.email_notifications).toBe(true);
    expect(data.user.marketing_emails).toBe(false);
  });
});
