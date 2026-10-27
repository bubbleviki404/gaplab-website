# GapLab Website

[简体中文](README.zh-CN.md)

GapLab’s bilingual public website presents a one-person product studio, its apps, and Viki’s portfolio. The studio builds small tools to reduce friction in everyday life and creative work.

Live website: <https://vikigaplab.com>

## Pages and architecture

- `/`: GapLab home
- `/portfolio/`: Viki’s self-contained HTML/CSS/JavaScript portfolio, served from `public/portfolio/`
- `/apps/pictidy/`: Pictidy product page
- `/apps/catchit/` and `/apps/catchit/privacy/`: CatchIt product and privacy pages
- `/apps/fontcard/`: Font Card typography studio

The site uses Next.js with a static export. It supports Chinese and English and responsive desktop/mobile layouts. The portfolio labels Video Learning Moments as in development; its presentation does not imply a released product.

## Local development and deployment

Use Node.js 22.13 or later:

```sh
npm ci
npm run dev
```

`npm run lint` checks application code; `npm run build` exports the website to `out/`. The portfolio’s static browser scripts are excluded from the application ESLint configuration and can be checked with `node --check public/portfolio/script.js`.

Pushing to `main` runs the existing GitHub Actions workflow: install dependencies, lint, build, and deploy `out/` to GitHub Pages. `public/CNAME` preserves the custom domain. This is a static website; server middleware is not included in the Pages export. Font Card’s same-origin font proxy requires separate hosting as described in `next.config.ts`.

## Privacy and rights

The portfolio stores its language preference in the browser. External app-store, music, and GitHub links lead to services with their own policies. Source code is provided under [MIT](LICENSE). Brand images, screenshots, audio, video, and third-party fonts or libraries retain their respective ownership and license terms; the source-code license does not grant blanket reuse rights to those assets.
