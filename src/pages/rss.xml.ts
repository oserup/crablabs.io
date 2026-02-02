import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog');
  const publishedPosts = blog.filter(post => !post.data.draft);
  
  return rss({
    title: 'Crab Labs Insights',
    description: 'Engineering insights, technical deep dives, and lessons learned from building electronic products that actually work.',
    site: context.site!,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      author: post.data.author,
      categories: post.data.tags,
      link: `/insights/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}