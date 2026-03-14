# Digital Fortune Cookie

Digital Fortune Cookie is a small Svelte app that generates short, randomized fortune-cookie style messages on demand. The frontend presents each generated message inside a scroll-style fortune card, while a lightweight Hono server handles the fortune generation request.

The project is split into two parts:

- `src/`: the Svelte frontend built with Vite and TypeScript
- `server/`: a Bun-powered Hono API that requests a fortune from an AI model

## Tech stack

- Svelte 5
- Vite
- TypeScript
- Hono
- Bun

## Running locally

Frontend:

```bash
npm install
npm run dev
```

Backend:

```bash
cd server
bun install
bun run dev
```

The server expects an `apiKey` environment variable for the upstream AI request.

## Current behavior

The frontend currently fetches fortunes from the deployed endpoint at `https://digital-fortune-cookie-server.vercel.app/fortune`. If you want the app to use your local server instead, update the fetch URL in the generator component.