## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Styling (Tailwind v4)

- **Layout & spacing** — utility Tailwind langsung di `.astro` (`grid`, `gap`, `flex`, responsive).
- **Primitif berulang** — `@utility` di [`src/styles/utilities.css`](src/styles/utilities.css) (utamanya `@apply` + token `@theme`). Contoh: `section-label`, `btn-primary`, `container-page`. Varian `hover:` / `focus-visible:` dipakai di markup.
- **Komponen stateful** — CSS di [`src/styles/components/`](src/styles/components/) (modal `:checked`, `.reveal.is-visible`, hero layers, timeline). Jangan daftarkan sebagai `@utility` global.
- **Token** — [`src/styles/theme.css`](src/styles/theme.css) (`@theme` + `:root`). Hindari duplikat warna di luar sini.
- Jangan pakai `.foo { @apply ... }` tanpa `@utility` jika ingin `hover:foo` di HTML — gunakan `@utility foo`.

Entry CSS: [`src/styles/global.css`](src/styles/global.css) hanya `@import` partials.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
