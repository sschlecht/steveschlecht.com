# steveschlecht.com

Personal site built with [Astro](https://astro.build), hosted on Cloudflare Pages, edited with [Pages CMS](https://pagescms.org).

## Writing a post
1. Go to https://app.pagescms.org and sign in with GitHub.
2. Open this repository, click **Blog posts**, then **Add an entry**.
3. Fill in the title, description, date and post, then **Save**.
The site rebuilds automatically and the post is live in a minute or two. Tick **Draft** to save a post without publishing it.

Images: upload them in the editor; they're stored in `public/images`.

## One-time settings
Edit `src/site.config.ts` for your email and LinkedIn URL.

## Cloudflare Pages build settings
- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`

## Running locally (optional)
`npm install` then `npm run dev`, and open http://localhost:4321
