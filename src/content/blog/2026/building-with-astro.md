---
title: 'Building with Astro'
description: 'Why we chose Astro for this site'
pubDate: 2026-03-10
draft: false
tags: ['astro', 'web-dev', 'meta']
author: 'Jane Doe'
---

We chose Astro for this site because of its excellent static site generation capabilities and minimal JavaScript approach.

## Why Astro?

### Performance First

Astro ships zero JavaScript by default. Pages are pure HTML and CSS, which means:

- **Fast loading** — no JS blocking the render
- **Great Lighthouse scores** — out of the box
- **Low bandwidth** — smaller page sizes

### Content Collections

The built-in Content Collections feature makes managing blog posts a breeze:

```typescript
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
```

### Hosting on Cloudflare

Astro works great with Cloudflare Pages. The adapter is simple:

```javascript
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare(),
});
```

## What's Next?

We'll be adding more features soon. Stay tuned!
