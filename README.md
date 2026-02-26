# cmd-provider

Node.js backend API boilerplate (Express).

## Setup

```bash
npm install
cp .env.example .env
```

## Run

```bash
npm run dev    # development with auto-reload
npm start      # production
```

## Endpoints

- `GET /health` – health check
- `GET /api` – API root

Default port: **3000** (override with `PORT` in `.env`).

## Deploy to Vercel

1. Push the project to GitHub (or connect another Git provider).
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project** → import this repo.
3. Leave **Build Command** and **Output Directory** as default (Vercel uses `vercel.json`).
4. Add any env vars under **Settings → Environment Variables** (optional; `PORT` and `NODE_ENV` are set by Vercel).
5. Deploy. Your API will be at `https://<project>.vercel.app` (e.g. `GET /`, `GET /health`, `GET /api`).

CLI alternative: install [Vercel CLI](https://vercel.com/cli) and run `vercel` in the project root.
