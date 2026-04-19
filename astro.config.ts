import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon';
import { siteUrl } from './src/data/site';
import { remarkReadingTime } from './src/lib/remark-reading-time';

// Skip the Cloudflare adapter in dev: its workerd module runner breaks `astro dev`.
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  site: siteUrl,
  integrations: [icon(), mdx(), sitemap()],

  build: {
    inlineStylesheets: 'always',
  },

  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind-ui.js'],
      },
    },
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-sans',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500, 700],
      styles: ['normal'],
      subsets: ['latin'],
    },
  ],

  ...(isDev ? {} : { adapter: cloudflare({ imageService: 'compile' }) }),
});
