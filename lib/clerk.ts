import { getServerSession } from 'next-auth';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { authOptions } from './auth';
import db, { query } from './db';

/**
 * Get the current authenticated user from NextAuth session and database
 */
export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  let userId = session?.user?.id || null;

  // Fallback for custom auth flow using mpl-session cookie
  if (!userId) {
    const cookieStore = await cookies();
    const token = cookieStore.get('mpl-session')?.value;

    if (token && process.env.NEXTAUTH_SECRET) {
      try {
        const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);
        const { payload } = await jwtVerify(token, secret);
        userId = typeof payload.id === 'string' ? payload.id : null;
      } catch {
        userId = null;
      }
    }
  }

  if (!userId) {
    return null;
  }

  // Get user from database
  const dbUser = await db.getUserById(userId);

  if (dbUser) {
    // Update last login
    await query('UPDATE users SET last_login = NOW() WHERE id = $1', [dbUser.id]);
  }

  return dbUser;
}

/**
 * Get user's role from database
 */
export async function getUserRole(): Promise<'student' | 'teacher' | 'school_admin' | 'super_admin' | null> {
  const user = await getCurrentUser();
  return user?.role || null;
}

/**
 * Check if user has a specific role
 */
export async function hasRole(roles: string | string[]): Promise<boolean> {
  const userRole = await getUserRole();

  if (!userRole) {
    return false;
  }

  if (Array.isArray(roles)) {
    return roles.includes(userRole);
  }

  return userRole === roles;
}

/**
 * Require authentication, throw error if not authenticated
 */
export async function requireAuth() {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error('Unauthorized');
  }

  return user;
}

/**
 * Require specific role, throw error if user doesn't have it
 */
export async function requireRole(roles: string | string[]) {
  const user = await requireAuth();

  if (Array.isArray(roles)) {
    if (!roles.includes(user.role)) {
      throw new Error('Forbidden: Insufficient permissions');
    }
  } else {
    if (user.role !== roles) {
      throw new Error('Forbidden: Insufficient permissions');
    }
  }

  return user;
}

/**
 * Check if user is a super admin
 */
export async function isSuperAdmin(): Promise<boolean> {
  return hasRole('super_admin');
}

/**
 * Check if user is a school admin or higher
 */
export async function isSchoolAdmin(): Promise<boolean> {
  return hasRole(['school_admin', 'super_admin']);
}

/**
 * Check if user is a teacher or higher
 */
export async function isTeacher(): Promise<boolean> {
  return hasRole(['teacher', 'school_admin', 'super_admin']);
}
