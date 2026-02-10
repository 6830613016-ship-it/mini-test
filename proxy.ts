import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./app/utills/loginUser";

const isProtectedRoute = createRouteMatcher([
    "/persons/editPerson",
    "/persons/editPerson/(.*)"
]);

export default clerkMiddleware(async (auth, req: NextRequest) => {
    console.log("Proxy invoked");
    
    const sessionRes = await updateSession(req);

    if (req.method === "POST") {
        return NextResponse.next();
    }

    if (isProtectedRoute(req)) {
        await auth.protect();
    }

    if (sessionRes) {
        return sessionRes;
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};