<div align="center">

<br/>

# آمـن — AAMEEN Landing Page

**Marketing site for the AAMEEN encrypted cloud storage platform**

React 19 · Tailwind CSS 4 · Vite · i18next

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-rolldown-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://amienn-landing.vercel.app)

**🌐 Live:** [amienn-landing.vercel.app](https://amienn-landing.vercel.app)

</div>

---

## Overview

This is the public marketing and waitlist landing page for **AAMEEN** — a zero-knowledge encrypted cloud storage platform built for Arab and MENA-region users.

The landing page is a fully static React app with no backend calls. It's built for speed, bilingual Arabic/English support, and conversion.

---

## Tech Stack

| | |
|---|---|
| Framework | React 19 |
| Build tool | Vite (rolldown-vite) |
| Styling | Tailwind CSS 4 |
| i18n | i18next + react-i18next + browser language detector |
| Icons | Lucide React |
| Deployment | Vercel |

No backend. No API calls. No environment variables required.

---

## Getting Started

```bash
git clone https://github.com/aamenn-org/Amienn-landing.git
cd Amienn-landing
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

---

## Available Scripts

```bash
# Development server with HMR
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

---

## Internationalization

The site ships with **Arabic and English** support. Language is auto-detected from the browser via `i18next-browser-languagedetector` and can be toggled manually.

Arabic uses RTL layout. Translation files live in `src/i18n/` (or `src/locales/`).

---

## Deployment

The site deploys automatically to **Vercel** on every push to `main` via the GitHub Actions workflow in `.github/workflows/`.

To deploy manually:

```bash
npm run build
# then upload the `dist/` folder to any static host
```

The output is a fully static `dist/` folder — compatible with Vercel, Netlify, Cloudflare Pages, or any CDN.

---

## Related Repositories

- **[aamenn-frontend](https://github.com/aamenn-org/aamenn-frontend)** — The main app (React, E2EE, file management)
- **[aamenn-backend](https://github.com/aamenn-org/aamenn-backend)** — NestJS API, PostgreSQL, Backblaze B2

---

## License

Proprietary — All rights reserved. © AAMEEN.
