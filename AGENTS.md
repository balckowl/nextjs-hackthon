# Repository Guidelines

## Project Structure & Module Organization
- `src/app/`: Next.js App Router (routes, layouts, API under `api/*/route.ts`).
- `src/components/`: Reusable UI (stories in `*.stories.tsx`).
- `src/lib/`: Utilities/helpers (e.g., `utils.ts`).
- `public/`: Static assets.
- `.storybook/`: Storybook config; uses `@storybook/nextjs`.
- Config: `biome.json`, `.eslintrc.json`, `tailwind.config.ts`, `lefthook.yml`.

## Build, Test, and Development Commands
- `npm run dev`: Start Next.js dev server.
- `npm run build`: Production build.
- `npm start`: Serve the production build.
- `npm run storybook`: Run Storybook at `http://localhost:6006`.
- `npm run build-storybook`: Static Storybook build.
- Lint/format: `npm run lint`, `npm run format`, `npm run check` (Biome).

## Coding Style & Naming Conventions
- Language: TypeScript, React (Next.js 14 App Router).
- Formatting/Linting: Biome (2-space indent, single quotes, no required semicolons), ESLint `next` rules, a11y/security rules enabled.
- File names: components in `PascalCase` (e.g., `Button.tsx`), hooks as `useX.ts`, utilities in `camelCase`.
- Stories: `ComponentName.stories.tsx` colocated with components.
- CSS: Tailwind; keep global styles in `src/app/globals.css`.

## Testing Guidelines
- Prefer Storybook stories for UI states and interactions (`@storybook/test`).
- Add/maintain a story for each component; include edge cases.
- Run `npm run storybook` during development; ensure `npm run build-storybook` passes in CI.
- Code quality gate: `npm run check` and `npm run lint` must pass.

## Commit & Pull Request Guidelines
- Conventional Commits enforced via commitlint. Examples:
  - `feat(ui): add WaveCard hover animation`
  - `fix(api): handle missing id in box-shadow route`
  - `chore: update Biome and Storybook`
- Before opening a PR: run `build`, `check`, and `build-storybook` locally.
- PRs should include: clear description, linked issues, screenshots/GIFs for UI changes, and notes on breaking changes/migrations.

## Security & Configuration Tips
- Use `.env.local` for secrets (e.g., `DATABASE_URL`, `NEXTAUTH_URL`); never commit them.
- Avoid `dangerouslySetInnerHTML`; Biome security rules flag unsafe patterns.
- Follow a11y rules (alt text, link targets) per Biome configuration.
