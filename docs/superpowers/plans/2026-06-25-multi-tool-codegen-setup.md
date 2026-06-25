# Multi-tool Codegen Setup (Lean Core) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make this repo the source of truth for Claude Code, Gemini CLI, Codex CLI, and Cline by adding one canonical instruction file with thin per-tool bridges, plus minimal hygiene and a CI gate.

**Architecture:** `AGENTS.md` is canonical. `CLAUDE.md` imports it (`@AGENTS.md`); `.clinerules/` and `.gemini/settings.json` point Cline and Gemini at it. Repo hygiene (`.gitignore`, `.editorconfig`, `.nvmrc`) plus a check-only lint/typecheck pair enforced by GitHub Actions make tool/model swapping safe.

**Tech Stack:** Next.js 15, React 18, TypeScript (strict), Tailwind, Yarn Berry, Node 20, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-06-25-multi-tool-codegen-setup-design.md`

These are configuration artifacts, not application code. Each task is verified by running commands and inspecting output (file existence, valid JSON/YAML, `git check-ignore`, `yarn lint:check`, `yarn typecheck`), not by unit tests. Show every file's full content; no placeholders.

## Global Constraints

- Node 20; package manager is Yarn Berry — use `yarn` and `yarn install --immutable` (never `npm`).
- Commit messages: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`); never `feature:`.
- Writing style everywhere: bullet points, no em dashes, never "you're absolutely right".
- Keep `package.json` keys alphabetical — `sort-package-json` is a devDependency and will reorder otherwise.
- Do NOT touch the Next 14/15 eslint-plugin version skew; out of scope.
- `AGENTS.md` is the only file where conventions live; bridges point at it, never duplicate it.

---

### Task 1: Canonical context layer

The agent-readable instruction files: one canonical `AGENTS.md` plus three thin bridges.

**Files:**
- Create: `AGENTS.md`
- Create: `CLAUDE.md`
- Create: `.clinerules/00-agents.md`
- Create: `.gemini/settings.json`

**Interfaces:**
- Consumes: nothing.
- Produces: `AGENTS.md` at repo root (later referenced by bridges and read by Codex/Cline); `.gemini/settings.json` (force-allowed in Task 2's `.gitignore`).

- [ ] **Step 1: Create `AGENTS.md`**

```markdown
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
```

- [ ] **Step 2: Create `CLAUDE.md`**

```markdown
@AGENTS.md

# Claude Code notes

- The imported `AGENTS.md` above is the source of truth for all conventions, commands, and style. Keep this file thin.
- Add only Claude-specific guidance below.
```

- [ ] **Step 3: Create `.clinerules/00-agents.md`**

```markdown
# Project rules

Read `AGENTS.md` at the repo root for all conventions, commands, git workflow, and writing style. It is the single source of truth.

This file exists because Cline does not read `CLAUDE.md` or `GEMINI.md`.
```

- [ ] **Step 4: Create `.gemini/settings.json`**

```json
{
  "context": {
    "fileName": ["AGENTS.md", "GEMINI.md"]
  }
}
```

- [ ] **Step 5: Verify files exist and JSON is valid**

Run: `ls AGENTS.md CLAUDE.md .clinerules/00-agents.md .gemini/settings.json && yarn run -T node -e "JSON.parse(require('fs').readFileSync('.gemini/settings.json','utf8')); console.log('json ok')"`
Expected: the four paths listed, then `json ok`.

- [ ] **Step 6: Verify the Claude bridge imports AGENTS.md**

Run: `head -1 CLAUDE.md`
Expected: `@AGENTS.md`

- [ ] **Step 7: Commit**

```bash
git add AGENTS.md CLAUDE.md .clinerules/00-agents.md .gemini/settings.json
git commit -m "feat: add canonical AGENTS.md and per-tool context bridges"
```

---

### Task 2: Repo hygiene and determinism

Ignore AI tool-state directories (keeping shared config tracked), and pin formatting and Node version.

**Files:**
- Modify: `.gitignore` (append a new section)
- Create: `.editorconfig`
- Create: `.nvmrc`

**Interfaces:**
- Consumes: `.gemini/settings.json` from Task 1 (force-allowed below).
- Produces: `.nvmrc` (consumed by Task 3's CI workflow via `node-version-file`).

- [ ] **Step 1: Untrack any AI tool-state already tracked**

Tool dirs may contain runtime state (e.g. `.claude/scheduled_tasks.lock`). Remove from the index if present so the new ignore rules take effect. This is safe if nothing is tracked.

Run: `git rm -r --cached --ignore-unmatch .claude .codex .cline .gemini/ 2>/dev/null; git add .gemini/settings.json 2>/dev/null; echo done`
Expected: `done` (re-adds the one file we want tracked; harmless if it was never tracked).

- [ ] **Step 2: Append the AI-tool-state section to `.gitignore`**

Append these lines to the end of `.gitignore` (keep existing content intact):

```gitignore

# AI tool state (keep shared config tracked via negations below)
.claude/
.codex/
.cline/
.gemini/
!.gemini/settings.json
```

Note: `.clinerules/`, `AGENTS.md`, and `CLAUDE.md` are top-level (not under an ignored dir) and stay tracked without a negation.

- [ ] **Step 3: Create `.editorconfig`**

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 2
max_line_length = 120

[*.md]
trim_trailing_whitespace = false
```

- [ ] **Step 4: Create `.nvmrc`**

```
20
```

- [ ] **Step 5: Verify ignore rules and tracked exceptions**

Run: `git check-ignore .claude/x .codex/x .cline/x .gemini/other.json; git check-ignore -v .gemini/settings.json || echo "settings.json NOT ignored (correct)"`
Expected: the first four paths print (they are ignored); the last prints `settings.json NOT ignored (correct)`.

- [ ] **Step 6: Verify the tracked file set is correct**

Run: `git status --porcelain && git ls-files .gemini`
Expected: only `.gitignore`, `.editorconfig`, `.nvmrc` (and `.gemini/settings.json` if Step 1 re-staged it) appear as changes; `git ls-files .gemini` shows `.gemini/settings.json`.

- [ ] **Step 7: Commit**

```bash
git add .gitignore .editorconfig .nvmrc
git commit -m "chore: ignore AI tool state, pin node and editor formatting"
```

---

### Task 3: Guardrail (check-only scripts + CI) and PR template

Add non-mutating lint/typecheck scripts, enforce them in GitHub Actions, and add a PR template encoding the writing style.

**Files:**
- Modify: `package.json` (add two scripts to the `scripts` object)
- Create: `.github/workflows/ci.yml`
- Create: `.github/pull_request_template.md`

**Interfaces:**
- Consumes: `.nvmrc` from Task 2 (CI reads `node-version-file: .nvmrc`).
- Produces: `lint:check` and `typecheck` yarn scripts (the CI gate and the commands referenced in `AGENTS.md` / PR template).

- [ ] **Step 1: Add `lint:check` and `typecheck` to `package.json` scripts**

Insert these two keys into the `scripts` object, keeping keys alphabetical (`lint:check` after `lint`; `typecheck` after `start`):

```json
    "lint:check": "yarn run -T prettier --check './src/**/*.{js,jsx,json,ts,tsx}' && eslint './src/**/*.{js,jsx,ts,tsx}' --max-warnings=0",
    "typecheck": "yarn run -T tsc --build --verbose",
```

Resulting `scripts` object order: `build`, `clean`, `compile`, `dev`, `lint`, `lint:check`, `sitemap`, `start`, `typecheck`.

- [ ] **Step 2: Verify typecheck passes on the current tree**

Run: `yarn typecheck`
Expected: exit 0 (the repo already builds, so `tsc --build` succeeds).

- [ ] **Step 3: Verify lint:check; normalize formatting if it fails**

Run: `yarn lint:check`
Expected: exit 0.

If `prettier --check` reports unformatted files (the previous `lint` autofixed silently, so the committed tree may not be clean), run the autofix and commit the formatting separately, then re-run:

```bash
yarn lint
git add -A
git commit -m "style: apply prettier formatting"
yarn lint:check   # must now pass
```

- [ ] **Step 4: Create `.github/workflows/ci.yml`**

```yaml
name: CI

on:
  push:
  pull_request:

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: .nvmrc
          cache: yarn
      - run: yarn install --immutable
      - run: yarn lint:check
      - run: yarn typecheck
```

- [ ] **Step 5: Create `.github/pull_request_template.md`**

```markdown
## Summary

<!-- What changed and why. Be thorough. No em dashes. -->

## Changes

<!-- Bullet points. -->
-

## Testing

- [ ] `yarn lint:check`
- [ ] `yarn typecheck`
```

- [ ] **Step 6: Validate the workflow YAML**

Run: `yarn run -T node -e "const f=require('fs').readFileSync('.github/workflows/ci.yml','utf8'); if(!/lint:check/.test(f)||!/typecheck/.test(f)||!/node-version-file: .nvmrc/.test(f)) throw new Error('ci.yml missing expected steps'); console.log('ci.yml ok')"`
Expected: `ci.yml ok`.

- [ ] **Step 7: Commit**

```bash
git add package.json .github/workflows/ci.yml .github/pull_request_template.md
git commit -m "feat: add check-only lint/typecheck, CI gate, and PR template"
```

---

## Final verification

- [ ] **Run the full local gate**

Run: `yarn lint:check && yarn typecheck && echo "gate green"`
Expected: `gate green`.

- [ ] **Confirm the canonical wiring**

Run: `head -1 CLAUDE.md && grep -c "fileName" .gemini/settings.json && git check-ignore .claude/x`
Expected: `@AGENTS.md`, then `1`, then `.claude/x`.

- [ ] **Push the branch and confirm CI runs green** (after opening/​updating the PR)

```bash
git push
```
Expected: the `CI / check` job passes on GitHub.

## Self-review checklist (completed by plan author)

- Spec coverage: AGENTS.md + 3 bridges (Task 1); .gitignore/.editorconfig/.nvmrc (Task 2); package.json scripts + ci.yml + PR template (Task 3). All spec files mapped.
- No placeholders: every file's full content is inline.
- Type/name consistency: `lint:check` and `typecheck` referenced identically in package.json, AGENTS.md, ci.yml, PR template, and final gate.
