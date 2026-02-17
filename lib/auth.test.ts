import { createUser, hashPassword } from './auth';
import { prisma } from './db';

jest.mock('./db', () => ({
  prisma: {
    user: {
      create: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  },
}));

describe('Auth helpers', () => {
  it('hashPassword should return bcrypt hash', async () => {
    const hash = await hashPassword('testpassword123');
    expect(hash).toMatch(/^\$2[aby]\$\d+\$/);
  });

  it('createUser should write and return user', async () => {
    (prisma.user.create as jest.Mock).mockResolvedValueOnce({ id: '123', email: 'test@example.com' });
    const user = await createUser('test@example.com', 'password123', 'John', 'Doe');
    expect(user.email).toBe('test@example.com');
  });
});
