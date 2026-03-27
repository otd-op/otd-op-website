import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts, sortPostsByDate } from '../utils/content';
import { ROUTES } from '../config/routes';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  const sortedPosts = sortPostsByDate(posts);

  return rss({
    title: 'Off the Defensive',
    description: 'Latest articles from OTD.',
    site: context.site?.toString() || 'https://otd-op.org',
    items: sortedPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: ROUTES.article('en', post.id),
      author: post.data.author,
    })),
    customData: `<language>en-us</language>`,
  });
}
