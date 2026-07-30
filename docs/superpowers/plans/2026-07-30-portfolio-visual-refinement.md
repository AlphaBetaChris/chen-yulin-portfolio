# Portfolio Visual Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the bilingual portfolio by removing unnecessary vertical guides, improving typography and spacing, and adding a verified GitHub profile entry point.

**Architecture:** Preserve the existing React content-driven single-page structure. Add the GitHub label to the locale content model, render the same verified external URL from `App.tsx`, and keep visual refinements contained in `styles.css`.

**Tech Stack:** React 19, TypeScript 7, CSS layers, Vitest, Testing Library, Vite, GitHub Pages

## Global Constraints

- Preserve all real résumé facts and the existing Chinese/English locale behavior.
- Keep the current editorial palette, portrait, section order, and semantic heading structure.
- Use only the verified GitHub profile URL `https://github.com/AlphaBetaChris`.
- Do not add invented project repositories or demo links.
- Preserve mobile, reduced-motion, and print support.

---

### Task 1: Verified GitHub Entry Point

**Files:**
- Modify: `src/App.test.tsx`
- Modify: `src/content.ts`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `content[locale].contact.githubLabel`
- Produces: localized external link pointing to `https://github.com/AlphaBetaChris`

- [ ] **Step 1: Write the failing test**

Add a component assertion that the Chinese page exposes a link named `GitHub` with the verified profile URL, `target="_blank"`, and `rel="noreferrer"`. After switching locale, assert the same URL remains available.

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `pnpm.cmd test src/App.test.tsx`

Expected: FAIL because no GitHub link exists.

- [ ] **Step 3: Add localized content and render the links**

Add `githubLabel` to `SiteContent.contact`, set both locale values to `GitHub`, define the verified URL once in `App.tsx`, add a GitHub hero action, and add GitHub as a third contact method.

- [ ] **Step 4: Run the focused test to verify it passes**

Run: `pnpm.cmd test src/App.test.tsx`

Expected: PASS.

### Task 2: Visual Style Contract

**Files:**
- Create: `src/styles.test.ts`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: existing class names in `App.tsx`
- Produces: divider-free editorial layout, balanced display copy, denser vertical rhythm, and more readable supporting copy

- [ ] **Step 1: Write failing CSS contract tests**

Read `styles.css` as text and assert:

- `.site-shell` does not use the vertical `linear-gradient(90deg, ...)` guide background.
- `.section-heading` and `.contact-heading` do not use desktop `border-right`.
- display-copy selectors include `text-wrap: balance`.
- the layout defines the wider editorial heading column and reduced project-card minimum height.

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `pnpm.cmd test src/styles.test.ts`

Expected: FAIL on the current guide lines and missing balanced wrapping.

- [ ] **Step 3: Implement the stylesheet refinement**

Replace the page guide background with solid paper, remove desktop section dividers, widen the section-label column, tune heading widths and sizes, add balanced/pretty wrapping, improve supporting-text contrast, and reduce oversized vertical spacing. Preserve the mobile bottom borders that separate stacked section headings.

- [ ] **Step 4: Run the focused test to verify it passes**

Run: `pnpm.cmd test src/styles.test.ts`

Expected: PASS.

### Task 3: Full Verification and Publication

**Files:**
- Verify: `src/App.tsx`
- Verify: `src/content.ts`
- Verify: `src/styles.css`
- Verify: `.github/workflows/deploy-pages.yml`

**Interfaces:**
- Consumes: the finished source tree
- Produces: deployed GitHub Pages update

- [ ] **Step 1: Run full automated verification**

Run:

```powershell
pnpm.cmd test
pnpm.cmd typecheck
pnpm.cmd build
git diff --check
```

Expected: all commands exit 0.

- [ ] **Step 2: Perform browser visual QA**

Inspect the Chinese desktop page, switch to English, and inspect a narrow mobile viewport. Confirm the removed vertical lines, improved line wrapping, readable text, working locale switch, and visible GitHub link.

- [ ] **Step 3: Commit and push**

Commit the tested implementation and push `main` to `origin`.

- [ ] **Step 4: Verify deployment**

Wait for the automatic GitHub Pages workflow, confirm success, open the public URL, and confirm IPv6 returns HTTP 200.

