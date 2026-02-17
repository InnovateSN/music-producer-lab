import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { prisma } from './db';

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
        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase() },
          select: {
            id: true,
            email: true,
            password_hash: true,
            first_name: true,
            last_name: true,
            role: true,
            is_active: true,
          },
        });

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
        await prisma.user.update({ where: { id: user.id }, data: { last_login: new Date() } });

        return {
          id: user.id,
          email: user.email,
          name: `${user.first_name || ''} ${user.last_name || ''}`.trim() || user.email,
          role: user.role,
          firstName: user.first_name ?? undefined,
          lastName: user.last_name ?? undefined,
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

// Helper to create a new user
export async function createUser(
  email: string,
  password: string,
  firstName?: string,
  lastName?: string,
  role: string = 'student',
  passwordHint?: string
) {
  const passwordHash = await hashPassword(password);

  return prisma.user.create({
    data: {
      email: email.toLowerCase(),
      password_hash: passwordHash,
      first_name: firstName,
      last_name: lastName,
      role,
      clerk_id: `local_${Date.now()}`,
      password_hint: passwordHint || null,
    },
    select: { id: true, email: true },
  });
}

// Helper to get user by email
export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email: email.toLowerCase() },
    select: {
      id: true,
      email: true,
      first_name: true,
      last_name: true,
      role: true,
    },
  });
}
