import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getBlogPosts } from '@/lib/collections';

export async function GET(context: APIContext) {
  const posts = await getBlogPosts();
  return rss({
    title: 'Zubair Khalid — Blog',
    description: 'Writing on software development and engineering.',
    site: context.site ?? 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
}
