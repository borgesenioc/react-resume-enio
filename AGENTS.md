# AGENTS.md

Canonical instructions for all AI coding tools working in this repo (Claude Code, Gemini CLI, Codex CLI, Cline). This is the single source of truth. Tool-specific files point here; do not duplicate conventions elsewhere.

## Project

`react-resume-template`: a personal resume website.

- Stack: Next.js 15, React 18, TypeScript (strict), Tailwind CSS, Sass.
- Package manager: Yarn (Berry). Node 20.
- Source lives in `src/`.

## Commands

- `yarn dev` - run the dev server (compiles first)
- `yarn build` - typecheck + production build
- `yarn lint` - autofix locally: `prettier --write` + `eslint --fix`
- `yarn lint:check` - check-only (used by CI): `prettier --check` + `eslint --max-warnings=0`
- `yarn typecheck` - `tsc --build`
- `yarn compile` - typecheck alias used by build/dev

Run `yarn lint && yarn compile` before every commit.

## Git workflow

- Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`. Do not use `feature:`.
- One task per branch off `main`; open a PR to merge. Do not push directly to `main`.
- Keep commit subjects concise; put detail in the PR body.

## Writing style (commits, PRs, comments, chat)

- PR bodies: verbose and thorough. Sections: Summary, Changes (bullets), Testing.
- Commit subjects: concise, imperative, one line; optional short body.
- Prefer bullet points over prose.
- No em dashes.
- Never say "you're absolutely right" or similar filler affirmations.

## Tool config map

- `AGENTS.md` (this file): canonical. Read natively by Codex CLI and Cline.
- `CLAUDE.md`: imports this file via `@AGENTS.md`, then Claude-only notes.
- `.clinerules/00-agents.md`: points Cline here.
- `.gemini/settings.json`: sets `context.fileName` so Gemini CLI reads this file.
