# Repository Guidelines

## Project Structure & Module Organization
- Vite + React + TypeScript app; `src/main.tsx` bootstraps `src/App.tsx`, which composes `Layout`, `Navbar`, `HeroSection`, and `FloatingInfoBtn`.
- UI pieces live in `src/components/` (PascalCase filenames); place shared assets in `src/assets/` and static public files in `public/`.
- Global styles are in `src/index.css` and `src/App.css`; Tailwind theme tokens live in `tailwind.config.js`. Build output goes to `dist/` (do not commit).

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — start the Vite dev server (defaults to http://localhost:5173) with HMR.
- `npm run lint` — run ESLint (JS/TS + React Hooks + React Refresh rules).
- `npm run build` — type-check via `tsc -b` then create a production bundle with `vite build`.
- `npm run preview` — serve the built app locally for smoke testing.

## Coding Style & Naming Conventions
- Use TypeScript (`.ts/.tsx`); prefer functional components, PascalCase component names/files, camelCase props and handlers (`handleSubmit`, `onClick`).
- Follow the existing 2-space indentation, single quotes, and semicolons. Keep imports ordered by module path clarity (libs, assets, local components).
- Prefer Tailwind utility classes; reuse theme colors (`primary`, `bg`, `gray-1000`, `secondary-1100`) and fonts (`font-noto`, `font-roboto`). Add component-specific CSS only when utilities fall short.

## Testing Guidelines
- Automated tests are not configured yet. When adding, align with Vite defaults (Vitest + React Testing Library) and place specs near components (`src/__tests__/` or `ComponentName.test.tsx`).
- Until a test runner exists, verify changes manually via `npm run dev` and `npm run preview`; cover responsive states, hover/focus styles, and accessible labeling for interactive elements.

## Commit & Pull Request Guidelines
- No Git history is present; use Conventional Commits for clarity (e.g., `feat: add floating info button copy update` or `fix: correct navbar spacing`).
- Keep PRs focused; include a short what/why description, screenshots or screen recordings for UI changes, and the manual test steps performed.
- Run `npm run lint` (and tests once added) before opening PRs. Never commit `node_modules` or `dist`.

## Security & Configuration Tips
- Store secrets in untracked `.env.local`; Vite only exposes vars prefixed with `VITE_`. Avoid hard-coding API keys in components or config.
- Keep dependencies in sync with `package-lock.json`; run `npm audit` after adding packages and prefer patch/minor bumps for fixes.
