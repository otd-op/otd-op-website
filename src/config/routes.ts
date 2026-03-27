import type { Locale } from '../i18n';

export const ROUTES = {
  home: (locale: Locale) => `/${locale}`,
  articles: (locale: Locale) => `/${locale}/articles`,
  article: (locale: Locale, slug: string) => `/${locale}/articles/${slug}`,
  tag: (locale: Locale, tag: string) => `/${locale}/articles/tag/${tag}`,
  rss: '/rss.xml',
  instagram: 'https://www.instagram.com/otd.op/',
} as const;
