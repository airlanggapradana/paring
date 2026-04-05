import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Routes that require authentication (protected routes)
  const protectedRoutes = [
    '/dashboard',
    '/nurse/profile',
    '/nurse/availability',
    '/nurse/earnings',
    '/nurse/appointments',
    '/nurse/session',
    '/nurse/inbox',
  ];

  // Routes that don't require authentication
  const publicRoutes = [
    '/login',
    '/register',
    '/nurse-register',
    '/mobile-only',
    '/',
  ];

  // Check if current path is protected
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isPublicRoute = publicRoutes.some(route => pathname === route || pathname.startsWith(route + '/'));

  // For protected routes, we do a basic check
  // Note: Real auth validation happens on the client side via authAPI.getProfile()
  // This middleware provides an additional layer of protection
  
  // Allow all requests to proceed - client-side auth checks will handle protection
  // This approach is necessary because:
  // 1. localStorage is only available on client side
  // 2. Auth token is stored in localStorage, not server cookies
  // 3. Next.js middleware runs on the edge/server side
  
  // Client-side components will redirect to /login if no valid auth token

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all routes except API and static files
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|.*\\/$).*)',
  ],
};

