# Dipole UI

A React + TypeScript + Vite marketing site built around a **layered, page-and-section
architecture**. The goal is high cohesion within a page's sections and low coupling
between them, with shared concerns pushed into well-defined layers.

## Tech stack

- **React 18** + **TypeScript** (strict)
- **Vite** for dev/build, **Vitest** + **Testing Library** for tests
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **ESLint** + **Prettier** for linting/formatting
- Path aliases (`@app`, `@pages`, `@features`, `@components`, …) for absolute imports

## Getting started

```bash
npm install
cp .env.example .env   # then adjust values
npm run dev
```

### Scripts

| Command             | Description                         |
| ------------------- | ----------------------------------- |
| `npm run dev`       | Start the dev server                |
| `npm run build`     | Type-check and produce a prod build |
| `npm run preview`   | Preview the production build        |
| `npm run lint`      | Lint the codebase                   |
| `npm run format`    | Format with Prettier                |
| `npm run typecheck` | Type-check without emitting         |
| `npm run test`      | Run the test suite once             |

## Folder structure

```
src/
├── app/          # Composition root — wiring only, no markup
│   ├── App.tsx       # Providers wrapped around the router
│   ├── providers/    # Global provider composition
│   └── router/       # Route tree + centralized path constants
├── pages/        # One folder per route; composes sections, owns page metadata
│   ├── LandingPage/
│   ├── PricingPage/
│   └── NotFoundPage/
├── features/     # Vertical slices owning their sections and content
│   └── landing/
│       ├── sections/     # One folder per scroll section
│       │   └── <Section>/
│       │       ├── <Section>.tsx   # Presentation
│       │       ├── content.ts      # Copy/data, separate from presentation
│       │       └── index.ts        # Section's public surface
│       └── index.ts      # Public API (the ONLY entry other code imports)
├── components/   # Shared, reusable presentational UI
│   ├── ui/           # Design-system primitives (Brand, ValueCard, …)
│   ├── layout/       # Persistent chrome (Navbar, Footer)
│   ├── effects/      # Decorative/animated visuals
│   └── feedback/     # Error boundaries, loaders, empty states
├── config/       # Typed env & runtime config (single source of truth)
├── constants/    # App-wide constants
├── utils/        # Pure, side-effect-free helpers
├── styles/       # Global styles & design tokens
├── test/         # Test setup
└── assets/
    ├── brand/        # Dipole logo
    ├── images/       # Photography/renders (+ differentiators/ diagrams)
    ├── icons/cards/  # Card iconography
    └── logos/        # Third-party marks (integrations/)
```

Path aliases are declared once in `aliases.ts` (consumed by `vite.config.ts` and
`vitest.config.ts`) and mirrored in `tsconfig.app.json` under `compilerOptions.paths`.
Update all of these together.

## Architecture principles

- **Composition flows one way.** `app/` wires providers and routes, `pages/` compose
  sections, `features/*/sections/` render them. A layer never imports downward from
  where it sits.
- **Content is separate from presentation.** Section copy and data live in
  `content.ts`; the component renders whatever it is handed.
- **Encapsulation via barrels.** Other code imports a feature only through its
  `index.ts`. Internals stay private, keeping coupling low.
- **Separation of concerns.** Presentational components stay dumb; layout, page
  composition, and content each have their own home.
- **Single responsibility.** Each module does one thing (e.g. `config/env.ts` is the
  only place that reads `import.meta.env`; `router/routes.ts` is the only place a
  path string is written).
- **Intention-revealing naming.** `PascalCase` for components/types, `camelCase` for
  functions/variables, `SCREAMING_SNAKE_CASE` for constants.

## Adding a landing section

1. Create `src/features/landing/sections/<Name>/` with `<Name>.tsx`, an `index.ts`,
   and a `content.ts` if it carries copy or data.
2. Re-export it from `src/features/landing/index.ts`.
3. Render it in `src/pages/LandingPage/LandingPage.tsx` at the desired scroll position.

## Adding a page

1. Create `src/pages/<Name>Page/` with the component and an `index.ts`.
2. Add the path to `ROUTES` in `src/app/router/routes.ts`.
3. Register the route in `src/app/router/AppRouter.tsx` using that constant.
