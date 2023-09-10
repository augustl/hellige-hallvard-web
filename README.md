## Hellige Hallvard web

The code for [helligehallvard.no](https://helligehallvard.no).

Powered by [Next.js](https://nextjs.org/)

Deployed to [Vercel](https://vercel.com)

## Running

```bash
yarn run dev
```

Starts a webserver at [http://localhost:3000](http://localhost:3000).

## Content

Content is hosted in Wordpress. Data is fetched via the wordpress APIs, and webhooks (see src/app/api/...) invalidate relevant caches when content is updated in Wordpress.

