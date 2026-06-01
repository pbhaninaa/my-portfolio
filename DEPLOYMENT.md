# Deployment Guide — My Portfolio

**Last updated:** June 2026

Static **Vue 3 + Vite + TypeScript** site deployed to **GitHub Pages** via GitHub Actions.

## Pre-deployment checklist

- [ ] Repo on GitHub with **Settings → Pages → Build and deployment → Source: GitHub Actions**
- [ ] Optional: `VITE_OPENAI_API_KEY` in repo secrets if using AI chat (otherwise built-in FAQ answers only)

## Deploy flow

Pushes to `main` run [.github/workflows/deploy.yml](.github/workflows/deploy.yml):

1. `npm ci`
2. `npm run build` → `dist/`
3. Upload artifact and deploy to GitHub Pages

Manual deploy: **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

## Environment variables (optional)

| Variable | Where | Description |
|----------|--------|-------------|
| `VITE_OPENAI_API_KEY` | GitHub Actions secret or local `.env` | Enables OpenAI chat agent |

Add the secret under **Settings → Secrets and variables → Actions** if you want AI answers in production builds.

## Local build

```bash
npm install
npm run build
npm run preview
```

## Rollback

GitHub → **Actions** → rerun deploy from a previous commit, or revert the commit on `main` and push.

Published URL (example): `https://pbhaninaa.github.io/my-portfolio/`

See [README.md](README.md).
