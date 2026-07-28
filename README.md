# Frontend

A React + TypeScript + Vite application built around a **feature-based, layered
architecture**. The goal is high cohesion within features and low coupling
between them, with shared concerns pushed into well-defined layers.

## Tech stack

- **React 18** + **TypeScript** (strict)
- **Vite** for dev/build, **Vitest** + **Testing Library** for tests
- **ESLint** + **Prettier** for linting/formatting
- Path aliases (`@app`, `@features`, `@components`, …) for absolute imports

## Getting started

```bash
npm install
cp .env.example .env   # then adjust values
npm run dev
```

### Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the dev server                 |
| `npm run build`     | Type-check and produce a prod build  |
| `npm run preview`   | Preview the production build         |
| `npm run lint`      | Lint the codebase                    |
| `npm run format`    | Format with Prettier                 |
| `npm run typecheck` | Type-check without emitting          |
| `npm run test`      | Run the test suite once              |

## Folder structure

```
src/
├── app/          # Composition root: providers, router, App
│   ├── providers/    # Global provider composition
│   └── router/       # Route tree + centralized path constants
├── features/     # Vertical slices — each is self-contained
│   └── <feature>/
│       ├── api/          # Feature data access (uses services/http)
│       ├── components/   # Feature-specific UI
│       ├── hooks/        # Feature-specific hooks
│       ├── store/        # Feature-local state
│       ├── types/        # Feature-owned types
│       └── index.ts      # Public API (the ONLY entry other code imports)
├── components/   # Shared, reusable presentational UI
│   ├── ui/           # Design-system primitives (Button, Input, …)
│   ├── layout/       # Page shells / layout composition
│   └── feedback/     # Error boundaries, loaders, empty states
├── hooks/        # Cross-cutting reusable hooks
├── services/     # Infrastructure: HTTP client & API abstractions
├── store/        # Global cross-feature state
├── lib/          # Third-party wrappers/config
├── config/       # Typed env & runtime config (single source of truth)
├── constants/    # App-wide constants
├── types/        # Shared domain & utility types
├── utils/        # Pure, side-effect-free helpers
├── styles/       # Global styles & design tokens
└── assets/       # Static assets
```

## Architecture principles

- **Feature-first (vertical slices).** A feature owns its UI, data, state, and
  types. Everything a feature needs lives together, so it can be reasoned about,
  tested, and removed in isolation.
- **Encapsulation via barrels.** Other code imports a feature only through its
  `index.ts`. Internals stay private, keeping coupling low.
- **Dependency inversion.** Features depend on the `HttpClient` *interface*
  (`services/http/types.ts`), not on `fetch`/axios. The implementation is
  swappable and easy to mock in tests.
- **Separation of concerns.** Presentational components stay dumb; layout,
  data-fetching, and state each have their own home.
- **Single responsibility.** Each module does one thing (e.g. `config/env.ts`
  is the only place that reads `import.meta.env`).
- **Intention-revealing naming.** `PascalCase` for components/types,
  `camelCase` for functions/variables, `SCREAMING_SNAKE_CASE` for constants,
  `kebab-case` for feature folder names.

## Adding a feature

1. Create `src/features/<name>/` with the sub-folders you need.
2. Expose only the public surface from `index.ts`.
3. Register any routes in `src/app/router/`.
4. Reuse shared primitives from `@components/*` and data access from
   `@services/*` — avoid cross-importing another feature's internals.
