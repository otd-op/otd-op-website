import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'My Blog',
    description: 'Thoughts, tutorials, and updates.',
    site: context.site?.toString() || 'https://example.com',
    items: sortedPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
      author: post.data.author,
    })),
    customData: `<language>en-us</language>`,
  });
}
