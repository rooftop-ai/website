## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project notes

- The dev server sometimes keeps serving a stale compiled `<style>` block after a component edit. If a CSS change doesn't show up, restart with `astro dev stop && astro dev --background` before debugging further.
- Scoped styles use Astro's attribute strategy, so a parent's scoped selector does not reach a child component's root element. Style child roots with `.parent :global(.child-class)`.
- Run `npm run build` (runs `astro check` first) and `npm run format:check` before shipping.
