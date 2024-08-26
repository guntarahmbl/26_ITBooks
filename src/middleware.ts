import { authOptions } from "../lib/authOptions";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function middleware(request: Request) {
    console.log("Middleware triggered for URL:", request.url);
    
    const session = await getServerSession(authOptions);

    if (!session) {
        console.log("No session found. Redirecting to /login");
        return NextResponse.redirect(new URL('/login', request.url));
    }

    console.log("Session found. Proceeding.");
    return NextResponse.next();
}

export const config = {
    matcher: ['/app/buyer/:path*', '/app/seller/:path*'],
};
