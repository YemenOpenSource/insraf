// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    switch (request.cookies.has('token')) {
        case true:
            if (request.nextUrl.pathname.startsWith('/auth/login')) {
                return NextResponse.rewrite(new URL('/admin', request.url))
            }
            if (request.nextUrl.pathname.startsWith('/auth/register')) {
                return NextResponse.rewrite(new URL('/admin', request.url))
            }
        break;
        case false:
            if (request.nextUrl.pathname.startsWith('/auth/success')) {
                return NextResponse.rewrite(new URL('/auth/login', request.url))
            }
            if (request.nextUrl.pathname.startsWith('/auth/register')) {
                return NextResponse.rewrite(new URL('/auth/register', request.url))
            }
            return NextResponse.rewrite(new URL('/auth/login', request.url))
        break;
        default:
            console.log("default")
        break;
    }
}

export const config = {
    matcher: ['/admin/:path*', '/auth/:path*']
}