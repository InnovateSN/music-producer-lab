export const hashPassword = jest.fn().mockResolvedValue('$2b$12$hashedpassword');
export const verifyPassword = jest.fn().mockResolvedValue(true);
export const createUser = jest.fn().mockResolvedValue({
  id: 'test-user-id',
  email: 'test@example.com',
});
export const getUserByEmail = jest.fn().mockResolvedValue(null);

export const authOptions = {
  providers: [],
  session: { strategy: 'jwt' },
  secret: 'test-secret',
};
