import { SignupSchema, SigninSchema } from './validations';

describe('SignupSchema', () => {
  it('should accept valid signup data', () => {
    const result = SignupSchema.safeParse({
      email: 'test@example.com',
      password: 'password123',
    });
    expect(result.success).toBe(true);
  });

  it('should accept signup with optional fields', () => {
    const result = SignupSchema.safeParse({
      email: 'test@example.com',
      password: 'password123',
      firstName: 'John',
      lastName: 'Doe',
    });
    expect(result.success).toBe(true);
  });

  it('should accept signup with empty firstName', () => {
    const result = SignupSchema.safeParse({
      email: 'test@example.com',
      password: 'password123',
      firstName: '',
    });
    expect(result.success).toBe(true);
  });

  it('should reject invalid email', () => {
    const result = SignupSchema.safeParse({
      email: 'not-an-email',
      password: 'password123',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe('Invalid email format');
    }
  });

  it('should reject short password', () => {
    const result = SignupSchema.safeParse({
      email: 'test@example.com',
      password: '123',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe('Password must be at least 8 characters');
    }
  });

  it('should reject missing email', () => {
    const result = SignupSchema.safeParse({
      password: 'password123',
    });
    expect(result.success).toBe(false);
  });

  it('should reject missing password', () => {
    const result = SignupSchema.safeParse({
      email: 'test@example.com',
    });
    expect(result.success).toBe(false);
  });
});

describe('SigninSchema', () => {
  it('should accept valid signin data', () => {
    const result = SigninSchema.safeParse({
      email: 'test@example.com',
      password: 'password123',
    });
    expect(result.success).toBe(true);
  });

  it('should reject invalid email', () => {
    const result = SigninSchema.safeParse({
      email: 'bad-email',
      password: 'password123',
    });
    expect(result.success).toBe(false);
  });

  it('should reject empty password', () => {
    const result = SigninSchema.safeParse({
      email: 'test@example.com',
      password: '',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe('Password is required');
    }
  });
});
