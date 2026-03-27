import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
  return getCollection('blog', ({ data }) => !data.draft);
}

export function sortPostsByDate(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getAllTags(posts: CollectionEntry<'blog'>[]): Map<string, number> {
  const tagCounts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    }
  }
  return tagCounts;
}

export function extractUniqueTags(posts: CollectionEntry<'blog'>[]): Set<string> {
  const tags = new Set<string>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      tags.add(tag);
    }
  }
  return tags;
}
