import { auth, currentUser } from '@clerk/nextjs/server';
import db from './db';

/**
 * Get the current authenticated user from Clerk and sync with database
 * Creates user in database if doesn't exist
 */
export async function getCurrentUser() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  // Get Clerk user details
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return null;
  }

  // Check if user exists in our database
  let dbUser = await db.getUserByClerkId(userId);

  // If user doesn't exist, create them
  if (!dbUser) {
    dbUser = await db.createUser({
      clerk_id: userId,
      email: clerkUser.emailAddresses[0]?.emailAddress || '',
      first_name: clerkUser.firstName || undefined,
      last_name: clerkUser.lastName || undefined,
      avatar_url: clerkUser.imageUrl,
      role: 'student', // Default role, can be changed later
    });
  } else {
    // Update last login
    await db.updateUser(dbUser.id, {
      last_login: new Date(),
    });
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
