import { type CollectionEntry, getCollection } from 'astro:content';

const isProd = import.meta.env.PROD;

export async function getBlogPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => !isProd || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getBlogPosts();
  const tagSet = new Set<string>();
  for (const post of posts) {
    for (const tag of post.data.tags) tagSet.add(tag);
  }
  return Array.from(tagSet).sort();
}

export async function getPostsByTag(tag: string): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getBlogPosts();
  return posts.filter((p) => p.data.tags.includes(tag));
}

export async function getPostsBySeries(seriesId: string): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getBlogPosts();
  return posts
    .filter((p) => p.data.series?.id === seriesId)
    .sort((a, b) => (a.data.seriesOrder ?? 0) - (b.data.seriesOrder ?? 0));
}
