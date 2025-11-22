# gjt-io

used as a url shortener / redirect service

`gjt.io` is also used as a short domain for side projects of `gjtiquia.com`

cuz `ijustwannacopypaste.gjtiquia.com` is way too long compared to `ijustwannacopypaste.gjt.io`

and also its cheaper to buy one short domain than buy a domain for each of the 99+ unfinished side projects that i have lol

## tech stack

- [hono with cloudflare workers](https://hono.dev/docs/getting-started/cloudflare-workers)

## development

```bash
# install dependencies
bun install

# start development server
bun run dev

# deploy to Cloudflare Workers
bun run deploy

# preview production build
pnpm preview
```

## license

MIT
