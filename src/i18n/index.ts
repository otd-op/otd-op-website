import en from './en.json';
import fr from './fr.json';

export type Locale = 'en' | 'fr';

const translations = {
  en,
  fr,
};

export function getLocaleFromPath(pathname: string): Locale {
  const match = pathname.match(/^\/(en|fr)(\/|$)/);
  return (match?.[1] as Locale) || 'en';
}

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: unknown = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }

  return typeof value === 'string' ? value : key;
}

export function translate(locale: Locale, key: string): string {
  return t(locale, key);
}
