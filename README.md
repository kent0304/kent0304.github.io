# Kento Tanaka — Portfolio

Personal portfolio site for Kento Tanaka, Machine Learning Engineer. Built with
[Astro](https://astro.build/), bilingual (EN / 日本語), and deployed as a GitHub Pages user site.

**Live:** https://kent0304.github.io/

## Stack & design

- **Astro** static site (no UI framework, ships near-zero JS)
- **Design:** deep-ink dark theme, single luminous accent, monospace "eval readout" metrics, and an ambient multi-agent trace in the hero
- **Type:** Space Grotesk (display) · Inter (body) · JetBrains Mono (data)
- **i18n:** EN/JA toggle, persisted to `localStorage`, flash-free
- **a11y:** semantic HTML, visible focus, `prefers-reduced-motion` respected

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
npm run preview  # preview the production build
```

## Content

All copy lives in `src/data/content.ts` as bilingual `{ en, ja }` pairs — edit there to
update experience, projects, awards, education, publications, skills, and certifications.
`Kento_Tanaka_Resume.pdf` and the Berkeley banner image are served from `public/`.

## Deploy (first-time setup)

This repo deploys to the GitHub **user site** `kent0304.github.io`.

1. Create a repository named **`kent0304.github.io`** under the `kent0304` account.
2. Push this project to its `main` branch.
3. In **Settings → Pages**, set **Source** to **GitHub Actions**.
4. Every push to `main` runs `.github/workflows/deploy.yml`, which builds with Astro and
   publishes `dist/`. The site goes live at https://kent0304.github.io/.

> Because this is a user site served at the domain root, `astro.config.mjs` needs no
> `base` setting. If you ever move it to a project repo (e.g. `/portfolio`), add
> `base: '/portfolio'` and update internal asset paths accordingly.
