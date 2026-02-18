import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { query } from './db';

// Extend the default session types
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      role: string;
      firstName?: string;
      lastName?: string;
    };
  }

  interface User {
    id: string;
    email: string;
    name?: string;
    role: string;
    firstName?: string;
    lastName?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: string;
    firstName?: string;
    lastName?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required');
        }

        // Find user by email
        const rows = await query<{
          id: string;
          email: string;
          password_hash: string | null;
          first_name: string | null;
          last_name: string | null;
          role: string;
          is_active: boolean;
        }>(
          'SELECT id, email, password_hash, first_name, last_name, role, is_active FROM users WHERE email = $1',
          [credentials.email.toLowerCase()]
        );
        const user = rows[0] || null;

        if (!user) {
          throw new Error('No account found with this email');
        }

        if (!user.is_active) {
          throw new Error('Account is deactivated');
        }

        if (!user.password_hash) {
          throw new Error('Please set up a password for your account');
        }

        // Verify password
        const isValid = await bcrypt.compare(credentials.password, user.password_hash);

        if (!isValid) {
          throw new Error('Invalid password');
        }

        // Update last login
        try {
          await query('UPDATE users SET last_login = NOW() WHERE id = $1', [user.id]);
        } catch (e) {
          console.warn('Failed to update last_login:', e);
        }

        return {
          id: user.id,
          email: user.email,
          name: `${user.first_name || ''} ${user.last_name || ''}`.trim() || user.email,
          role: user.role,
          firstName: user.first_name || undefined,
          lastName: user.last_name || undefined,
        };
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Helper to hash passwords
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

// Helper to verify passwords
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// Helper to create a new user
export async function createUser(
  email: string,
  password: string,
  firstName?: string,
  lastName?: string,
  passwordHint?: string
) {
  const hashedPassword = await hashPassword(password);

  const rows = await query<{ id: string; email: string }>(
    `INSERT INTO users (clerk_id, email, password_hash, first_name, last_name, password_hint, role, is_active)
     VALUES ($1, $2, $3, $4, $5, $6, 'student', true)
     RETURNING id, email`,
    [
      `local_${Date.now()}`,
      email.toLowerCase(),
      hashedPassword,
      firstName || null,
      lastName || null,
      passwordHint || null,
    ]
  );

  return rows[0];
}

// Helper to get user by email
export async function getUserByEmail(email: string) {
  const rows = await query<{
    id: string;
    email: string;
    password_hash: string | null;
    first_name: string | null;
    last_name: string | null;
    role: string;
    is_active: boolean;
  }>(
    'SELECT id, email, password_hash, first_name, last_name, role, is_active FROM users WHERE email = $1',
    [email.toLowerCase()]
  );
  return rows[0] || null;
}
