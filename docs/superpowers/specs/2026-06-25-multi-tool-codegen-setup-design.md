# Multi-tool codegen setup (lean core)

Date: 2026-06-25
Status: Approved, pending implementation plan

## Goal

Make this repo the source of truth for working across Claude Code, Gemini CLI, Codex CLI, and Cline interchangeably. One canonical instruction file, thin per-tool bridges, plus the minimal hygiene/guardrail that makes tool and model swapping safe. Scope: **lean core** (no MCP sync, no test runner, no CODEOWNERS/commitlint).

## Verified constraints (Jan 2026 docs)

- Tools do **not** auto-read each other's instruction files. Codex + Cline read `AGENTS.md`; Gemini reads it only if `context.fileName` is set; Claude Code reads `CLAUDE.md` only (never `AGENTS.md`).
- Symlinks are unreliable (break on Windows / Git for Windows). Use Claude's `@AGENTS.md` import and pointer files instead.
- Repo uses Yarn Berry (`.yarnrc.yml`, `.yarn` gitignored), `@types/node@20` → Node 20.
- `yarn lint` mutates files (`prettier --write`, `eslint --fix`); unusable as a CI gate. A check-only variant is required.

## Files

### Canonical context
- **`AGENTS.md`** — source of truth. No tool-specific syntax. Sections:
  - Project: Next 15 / React 18 / TypeScript (strict) / Tailwind / Yarn Berry resume site.
  - Commands: `yarn dev`, `yarn build`, `yarn lint` (autofix, local), `yarn lint:check`, `yarn typecheck`, `yarn compile`.
  - Workflow rule: run `yarn lint && yarn compile` before every commit.
  - Conventions: Conventional Commits (`feat:`, `fix:`, `chore:`, etc.). Branch per task off `main`, PR to merge.
  - Style: verbose PR bodies; concise commits; bullet points; no em dashes; never "you're absolutely right".
- **`CLAUDE.md`** — line 1 `@AGENTS.md`, then Claude-only notes (e.g. defer to AGENTS.md, keep this file thin).
- **`.clinerules/00-agents.md`** — short pointer: read `AGENTS.md` for all conventions (Cline does not read CLAUDE.md/GEMINI.md).
- **`.gemini/settings.json`** — `{ "context": { "fileName": ["AGENTS.md", "GEMINI.md"] } }`.

### Hygiene / determinism
- **`.gitignore`** — append tool-state dirs (`.claude/`, `.gemini/`, `.codex/`, `.cline/`), then force-allow shared committed files:
  ```
  .claude/
  .gemini/
  !.gemini/settings.json
  .codex/
  .cline/
  ```
  (`.clinerules/` is a separate top-level dir and stays tracked; not ignored.)
- **`.editorconfig`** — mirror `.prettierrc`: `indent_style=space`, `indent_size=2`, `max_line_length=120`, `charset=utf-8`, `end_of_line=lf`, `insert_final_newline=true`, `trim_trailing_whitespace=true`.
- **`.nvmrc`** — `20`.

### Guardrail (minimal)
- **`package.json`** — add scripts:
  - `lint:check`: `yarn run -T prettier --check './src/**/*.{js,jsx,json,ts,tsx}' && eslint './src/**/*.{js,jsx,ts,tsx}' --max-warnings=0` (no `--write`/`--fix`).
  - `typecheck`: `yarn run -T tsc --build` (alias of compile, named for clarity in CI).
- **`.github/workflows/ci.yml`** — triggers on `pull_request` and `push`. Steps: checkout, setup-node (Node 20, yarn cache), `yarn install --immutable`, `yarn lint:check`, `yarn typecheck`.

### PR style
- **`.github/pull_request_template.md`** — verbose body, bullet points, no em dashes; sections: Summary, Changes (bullets), Testing.

## Out of scope (flagged for later)
- MCP per-tool files + sync script (standard tier).
- Test runner / smoke tests.
- CODEOWNERS, branch protection, commitlint.
- Next 14/15 eslint-plugin version skew (`eslint-config-next`/`@next/eslint-plugin-next` at ^14 vs `next@^15`).

## Success criteria
- `AGENTS.md` is the single edited file; the three bridges point at it.
- `yarn lint:check` and `yarn typecheck` pass on the current tree.
- CI workflow runs green on a PR.
- No tool-state secrets/logs are tracked; `.gemini/settings.json` and `.clinerules/` remain tracked.
