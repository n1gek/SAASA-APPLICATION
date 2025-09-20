import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { publicDecrypt } from 'crypto';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/home"
]);
//createRouteMatcher creates a function that allows us to lookup if a given request matches one of the defined routes

const isPublicApiRoute = createRouteMatcher([
  "/api/video"
]);

export default clerkMiddleware((auth, req) => {
    const {userId} = auth();
    const currentURL = new URL(req.url);
    const isAccessingDashboard = currentURL.pathname === "/home"
    const isApiRequest = currentURL.pathname.startsWith("/api")

    //if user is signed in and tries to access a public route, redirect to /home
    if (userId && isPublicApiRoute(req) && !isAccessingDashboard) {
        return NextResponse.redirect(new URL("/home", req.url));
    }

    //if user is not signed in and tries to access a private route, redirect to /sign-in
    if (!userId){
        if (!isPublicApiRoute(req) && !isPublicRoute(req)) {
            return NextResponse.redirect(new URL("/sign-in", req.url));
        }
            
    }
    return NextResponse.next();

});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}