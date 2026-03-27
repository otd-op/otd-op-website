export const ROUTES = {
  home: '/',
  articles: '/articles',
  article: (slug: string) => `/articles/${slug}`,
  tag: (tag: string) => `/articles/tag/${tag}`,
  rss: '/rss.xml',
  instagram: 'https://www.instagram.com/otd.op/',
} as const;
