# Refactor — Round 1 Complete

Structural refactor of the codebase. **No behavioural or visual change.**

## Verification

| Check | Result |
| --- | --- |
| `npm run typecheck` | pass |
| `npm run build` | pass |
| `npm run test` | pass (1 file, 2 tests) |
| `npm run lint` | pass |
| Dev server | starts; `/`, `main.tsx`, page + section modules all resolve 200 |
| All 67 referenced assets | serve 200 in dev; 0 orphaned, 0 dangling |

**Strongest signal:** the production CSS bundle hash stayed **identical**
(`index-rr2l1yES.css`, 25.74 kB) and the JS hash stayed identical
(`index-C8kvPj-a.js`) across the restructure and asset regroup. Same Tailwind output
and same inlined asset payload means the rendered result is unchanged.

## What changed

**Removed**

- 16 empty directories (14 dead scaffolds + `features/hero`, `features/home`)
- 9 `.DS_Store` files (all confirmed gitignored/untracked)
- 11 unused assets, ~2 MB freed — `overly-image.svg` (1.47 MB), `dipole.jpg`,
  4 orphaned `framework/*.png`, 4 superseded `.jpeg`, 1 superseded `.svg`
- Dead code: `OrbitingLogosCenter`, `LogoCard`, `Button`, `EmblemButton`,
  `services/http`, `hooks/useMediaQuery`, `types/`, `lib/`, `store/`
- Redundant `assets/.gitkeep`

**Restructured**

```
src/
├── app/          composition only — no markup
├── pages/        LandingPage · PricingPage · NotFoundPage
├── features/landing/sections/
│                 Hero · Problem · ManagementConsole
│                 ValueProposition · Differentiators · Speedup
├── components/   ui · layout · effects · feedback
└── assets/       brand · images(+differentiators) · icons/cards · logos/integrations
```

- `app/SiteShell.tsx` held real page markup → became `pages/LandingPage`, with its
  inline differentiator section moved into the `Differentiators` section.
- `components/layout/HeroSection` (a page section, not chrome) → `sections/Hero`.
- `components/ui/DifferentiatorTabs` (held marketing copy) → `sections/Differentiators`.
- `IntroductionPanel` split into `Hero` + `Problem`; `ProductPanel` split into
  `ManagementConsole` + `ValueProposition`; `FeaturePanel` → `Speedup`.
- Section copy/data extracted into colocated `content.ts` files.
- `features/not-found/components/` flattened to match `pricing`'s depth.

**Fixed consistency defects**

- All barrels now use one style (`export { X } from './X'`); added the missing
  `ErrorBoundary` barrel.
- Alias map was duplicated in 3 places and had drifted → single source of truth in
  `aliases.ts`, consumed by `vite.config.ts` + `vitest.config.ts`, mirrored in
  `tsconfig.app.json`. Dropped 5 dangling aliases, added `@pages`.
- `routes.ts` was missing `/pricing` while `AppRouter` hardcoded paths → `ROUTES` is
  now the only place a path string is written; `AppRouter` and `Navbar` consume it.
- `package.json` name `frontend` → `dipole-ui`.
- README rewritten to document the actual structure.

## Deliberately left alone

- **`Footer`** — fully built, still never rendered. Awaiting your call: wire it in or
  delete it.
- **Prettier** — `npm run format:check` flags 10 files, but this is **pre-existing**
  (it flags files never touched here, e.g. `global.css`, `Footer.tsx`). The repo was
  never Prettier-formatted. Running `--write` is a one-line fix but produces a large
  diff unrelated to this refactor, so it is your call.
- **`config/env.ts` `env.api`** — `baseUrl`/`timeoutMs` became unused when
  `services/http` was deleted. Kept because it's documented in `.env.example` and is
  plausibly needed for imminent API work. Say the word and it goes.
- **Asset filenames** — folders were regrouped but names left as-is
  (`aws-svgrepo-com.svg`, `Clickhouse--Streamline-Simple-Icons.svg`, …). Renaming is
  cosmetic and touches 67 import sites. Note: `pagerduty-icon (1).svg` contains a
  space, which is worth fixing if we do a rename pass.

## Round 2 candidates (behavioural refactors)

- Extract the repeated section shell (`min-h-[calc(100vh-4rem)]`, `px-[2.5%]`,
  heading styles) into a `Section` primitive — duplicated across five sections.
  Deliberately skipped here to guarantee pixel-identical output.
- Replace the `imageScale` "bag of Tailwind classes" prop in `Differentiators` with
  typed props.
- `DifferentiatorTabs` and `Speedup` implement near-identical pill-tab logic; a shared
  `Tabs` primitive would remove the duplication.
- Add tests: currently only `formatDate` is covered.
- Consider `hero_section_dotted.png` (1.77 MB) — largest asset by far; a WebP/AVIF
  conversion would cut most of it.
