# Philasande Bhani – Portfolio

Vue 3 + TypeScript + Vite portfolio with an **"Ask about me"** chat agent.

## Chat agent

The floating **?** button opens a chat that answers questions about Philasande (experience, skills, contact, projects, etc.).

- **Without API key:** Built-in answers for common questions (who is he, experience, skills, contact, salary, availability, education, projects).
- **With OpenAI API key:** Full AI answers for any question. Create a `.env` file and add:
  ```bash
  VITE_OPENAI_API_KEY=sk-your-key-here
  ```
  Get a key at [OpenAI API keys](https://platform.openai.com/api-keys). Uses `gpt-4o-mini` for low cost.

See `.env.example` for reference.

## Deploy (GitHub Pages)

The repo includes a GitHub Action (`.github/workflows/deploy.yml`) that builds and deploys the site on every push to `main`.

1. In your GitHub repo: **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push your code to `main`; the workflow will run and publish the site at:
   **https://pbhaninaa.github.io/my-portfolio/**

## Project setup

Vue 3 `<script setup>` + TypeScript. See [Vue Docs](https://vuejs.org/guide/typescript/overview.html#project-setup) for IDE support.
