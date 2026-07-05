export const defaultLocale = "pt-br" as const;

export type AppLocale = typeof defaultLocale;

export function localizedPath(_locale: AppLocale, pathname: string): string {
  return normalizePathname(pathname);
}

export function normalizePathname(pathname: string): string {
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}
