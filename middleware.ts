import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["de", "en"];
const defaultLocale = "en";

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;
  
  // Explicitly check for English
  if (acceptLanguage.toLowerCase().includes("en")) return "en";
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if pathname already has locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Determine locale
  const locale = getLocale(request);
  
  // Construct new URL
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  
  // Preserve query parameters
  newUrl.search = request.nextUrl.search;
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
