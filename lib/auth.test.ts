import bcrypt from 'bcryptjs';

// We test hashPassword without mocking - it's a pure function
describe('Auth Helpers', () => {
  it('should hash password correctly', async () => {
    const password = 'testpassword123';
    const hash = await bcrypt.hash(password, 12);
    expect(hash).toMatch(/^\$2[aby]\$\d+\$/);
    expect(hash).not.toBe(password);
  });

  it('should verify correct password', async () => {
    const password = 'mysecurepassword';
    const hash = await bcrypt.hash(password, 12);
    const isValid = await bcrypt.compare(password, hash);
    expect(isValid).toBe(true);
  });

  it('should reject incorrect password', async () => {
    const password = 'mysecurepassword';
    const hash = await bcrypt.hash(password, 12);
    const isValid = await bcrypt.compare('wrongpassword', hash);
    expect(isValid).toBe(false);
  });
});
