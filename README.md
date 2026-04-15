# personal-website

Astro 6 personal site — portfolio at `/`, MDX blog at `/blog`.

## Dev

Requires Node 22+ and pnpm.

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
pnpm preview
```

## Deployment (Cloudflare Pages)

1. Push this repo to GitHub.
2. In Cloudflare Pages dashboard, create a project, connect the repo.
3. Build command: `pnpm build`
4. Build output directory: `dist`
5. Environment variables:
   - `NODE_VERSION=22`
   - `PUBLIC_GISCUS_REPO`, `PUBLIC_GISCUS_REPO_ID`, `PUBLIC_GISCUS_CATEGORY`, `PUBLIC_GISCUS_CATEGORY_ID` (get from https://giscus.app)
6. Add custom domain via the Pages dashboard.

## Writing a blog post

Drop a `.mdx` file in `src/content/blog/`:

```mdx
---
title: My Post
description: …
pubDate: 2026-04-20
tags: [typescript]
---

Post body in MDX…
```
