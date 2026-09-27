# rooftoplabs.ai

Marketing site for Rooftop Labs, the fractional Head of AI for property management companies. It is a single static page built with [Astro](https://astro.build).

## Develop

```sh
npm install
npm run dev          # http://localhost:4321
npm run build        # type-checks, then builds to dist/
npm run format       # Prettier (with the Astro plugin)
```

## Checks and deploys

```sh
npm run spell        # cspell; add real words to cspell.json
npm run links        # lychee on dist/ (build first); needs lychee installed
```

CI (`.github/workflows/ci.yml`) runs formatting, spelling, the type check and build, and the link check on every PR and on pushes to `main`. When everything passes on `main`, it deploys `dist/` to GitHub Pages. Dependabot opens weekly update PRs for npm packages and GitHub Actions.

## Contact form

Submissions go to [Formspree](https://formspree.io). The endpoint lives in `src/config/site.ts`. The form submits in the background with `Accept: application/json` and shows its own success and error states, so reCAPTCHA must stay off in the Formspree form settings. It also sends a `_subject` and a `_gotcha` honeypot field, following Formspree's conventions.

## Brand

- **Logo mark**: `src/components/LogoMark.astro`, recreated as SVG from the logo artwork. `public/favicon.svg` uses the same geometry. Keep them in sync.
- **Colors**: the logo's three greens, defined as tokens in `src/styles/global.css`.
- **Light and dark themes**: components use only the semantic tokens in `src/styles/global.css`. Each token defines both theme values with `light-dark()`, and lightningcss lowers that for older browsers. The page follows the system theme. The header toggle pins a choice in `localStorage`, and an inline script in `Base.astro` applies it before first paint.
- **Type**: Plus Jakarta Sans for headlines and UI (it matches the wordmark), and Inter for running text (legibility).
- **Display punctuation**: Plus Jakarta Sans gives `.` and `,` wide sidebearings. Headlines go through `kern()` in `src/lib/typography.ts`, which tightens them.

## Site facts

Company details (name, URL, email, founder links) come from `src/config/site.ts`. Page sections are in `src/components/`, in the order listed in `src/pages/index.astro`.
