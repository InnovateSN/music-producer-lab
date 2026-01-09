import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  '/',
  '/index.html',
  '/about.html',
  '/learn-tools.html',
  '/contact.html',
  '/glossary.html',
  '/free-drum-machine.html',
  '/drum-playground.html',
  '/harmony-playground.html',
  '/lesson-(.*).html',
  '/assets/(.*)',
  '/samples/(.*)',
  '/js/(.*)',
  '/*.css',
  '/*.js',
  '/*.svg',
  '/*.json',
  '/api/public/(.*)', // Public API endpoints
]);

// Protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/teacher(.*)',
  '/admin(.*)',
  '/api/protected/(.*)',
  '/api/progress/(.*)',
  '/api/schools/(.*)',
  '/api/users/(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  // Protect routes that require authentication
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
