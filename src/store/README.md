# store/

Global, cross-feature application state (e.g. session, theme, feature flags).

Keep this lean. State that belongs to a single feature should live in that
feature's own `store/` folder, not here. Prefer colocation; promote state to
this global store only when it's genuinely shared across features.

Pick a state library that fits your needs (Zustand, Redux Toolkit, Jotai, or
plain Context) and wire its provider through `src/app/providers/AppProviders`.
