import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    '/',
    '/add-tasks',
    '/view-tasks',
    '/user-profile/(.*)',
    '/api/(.*)',
  ],
};