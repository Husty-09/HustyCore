import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'pt'];
const defaultLocale = 'en';

function getLocale(request: NextRequest) {
  // Pega pelo cabeçalho accept-language nativo
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    if (acceptLanguage.includes('pt')) return 'pt';
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  // Verifica se a pathname ja contem um local
  const { pathname } = request.nextUrl;
  
  // Ignora assets e caminhos de backend
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') || 
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redireciona se não houver locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Pega todas as rotas execto system files
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
