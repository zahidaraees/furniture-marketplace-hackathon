import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// Apply middleware only to relevant routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
