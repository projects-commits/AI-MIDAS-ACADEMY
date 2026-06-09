export const locales = ["pt-br", "en", "es", "de", "ko"] as const;

export type AppLocale = (typeof locales)[number];
export type SecondaryLocale = Exclude<AppLocale, "pt-br">;

export const defaultLocale: AppLocale = "pt-br";

export const localeLabels: Record<AppLocale, string> = {
  "pt-br": "Português (Brasil)",
  en: "English",
  es: "Español",
  de: "Deutsch",
  ko: "한국어"
};

export function isLocale(value: string | undefined): value is AppLocale {
  return Boolean(value && locales.includes(value as AppLocale));
}

export function localeFromPath(pathname: string): AppLocale {
  const [firstSegment] = pathname.split("/").filter(Boolean);
  return isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return "/";
  }

  if (isLocale(segments[0])) {
    segments.shift();
  }

  return segments.length === 0 ? "/" : `/${segments.join("/")}/`;
}

export function localizedPath(locale: AppLocale, pathname: string): string {
  const cleanPath = stripLocaleFromPath(pathname);

  if (locale === defaultLocale) {
    return cleanPath;
  }

  return cleanPath === "/" ? `/${locale}/` : `/${locale}${cleanPath}`;
}

export function normalizePathname(pathname: string): string {
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}
