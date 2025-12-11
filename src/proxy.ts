// src/proxy.ts
export { proxy } from "@hart/server/auth/proxy";

export const config = {
  matcher: ["/admin/:path*"],
};