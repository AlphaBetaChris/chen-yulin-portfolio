# 陈昱霖个人主页 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建一份使用真实资料、支持中英文切换并可安全部署到 GitHub Pages 的陈昱霖综合个人主页。

**Architecture:** React 单页应用负责语义化结构和语言状态，类型化内容模块保存全部中英文资料，单一 CSS 文件实现学术编辑风及响应式布局。网站为纯静态产物，使用相对资源路径适配 GitHub Pages 仓库子路径。

**Tech Stack:** React 19、TypeScript 5、Vite 7、Vitest、Testing Library、CSS

## Global Constraints

- 使用简历中的真实姓名、照片、电话、邮箱、学校、成绩、荣誉、项目和技能。
- 默认中文，提供完整英文切换并持久化语言选择。
- 视觉采用暖米白、墨绿色、编辑排版风格。
- 首版为单页，不添加博客、后端、数据库或未经确认的社交链接。
- GitHub 仓库初始设为私有，用户确认前不启用公开 Pages。
- 生产资源使用相对路径，必须适配 GitHub Pages 子路径。

---

### Task 1: 项目基础与双语行为

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `index.html`
- Create: `src/test/setup.ts`
- Create: `src/App.test.tsx`
- Create: `src/content.ts`
- Create: `src/App.tsx`
- Create: `src/main.tsx`

**Interfaces:**
- `content.ts` produces `Locale`, `SiteContent`, and `content: Record<Locale, SiteContent>`.
- `App.tsx` consumes `content` and owns locale persistence under localStorage key `chen-yulin-locale`.
- `main.tsx` mounts `<App />`.

- [ ] **Step 1: Add test and compiler configuration**

Create the package and TypeScript/Vite configuration with scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc -b --pretty false"
  }
}
```

Configure Vitest with `jsdom` and `src/test/setup.ts`.

- [ ] **Step 2: Write failing bilingual behavior tests**

`src/App.test.tsx` must verify:

```tsx
render(<App />);
expect(screen.getByRole('heading', { name: '陈昱霖', level: 1 })).toBeInTheDocument();
expect(document.documentElement.lang).toBe('zh-CN');
await user.click(screen.getByRole('button', { name: 'Switch to English' }));
expect(screen.getByRole('heading', { name: 'Yulin Chen', level: 1 })).toBeInTheDocument();
expect(document.documentElement.lang).toBe('en');
expect(localStorage.getItem('chen-yulin-locale')).toBe('en');
```

Add a second test that preloads `chen-yulin-locale=en` and verifies the first render is English.

- [ ] **Step 3: Run tests and verify RED**

Run: `npm test`

Expected: FAIL because `App.tsx` and `content.ts` do not exist.

- [ ] **Step 4: Implement typed bilingual content and locale state**

Create `Locale = 'zh' | 'en'`, typed section data, complete Chinese and English copy, guarded localStorage access, `document.documentElement.lang` synchronization, and the language switch button.

- [ ] **Step 5: Run tests and verify GREEN**

Run: `npm test`

Expected: all locale tests pass.

### Task 2: Complete semantic portfolio

**Files:**
- Modify: `src/App.test.tsx`
- Modify: `src/App.tsx`
- Modify: `src/content.ts`
- Create: `public/chen-yulin.jpg`

**Interfaces:**
- `content.ts` provides hero, stats, profile, education, awards, projects, skills, personal details, and contact fields for both locales.
- `App.tsx` renders stable section IDs: `about`, `education`, `honors`, `projects`, `skills`, `contact`.

- [ ] **Step 1: Add failing content and accessibility tests**

Verify semantic navigation, all six section headings, both projects, clickable email and telephone links, the portrait alternative text, and the real data:

```tsx
expect(screen.getByRole('link', { name: 'swucyl@email.swu.edu.cn' })).toHaveAttribute(
  'href',
  'mailto:swucyl@email.swu.edu.cn'
);
expect(screen.getByRole('link', { name: '166-0137-4718' })).toHaveAttribute(
  'href',
  'tel:+8616601374718'
);
expect(screen.getByText('11 / 72')).toBeInTheDocument();
```

- [ ] **Step 2: Run tests and verify RED**

Run: `npm test`

Expected: FAIL because the complete page sections are not rendered.

- [ ] **Step 3: Extract the real portrait and implement all sections**

Extract the embedded JPEG from the provided PDF to `public/chen-yulin.jpg`. Render semantic `header`, `nav`, `main`, `section`, `article`, `address`, and `footer` elements with real content and stable anchor targets.

- [ ] **Step 4: Run tests and verify GREEN**

Run: `npm test`

Expected: all content and locale tests pass.

### Task 3: Editorial design and responsive interaction

**Files:**
- Create: `src/styles.css`
- Modify: `src/main.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- `styles.css` consumes the semantic class names from `App.tsx`.
- Responsive breakpoints preserve all content at widths below 760px.

- [ ] **Step 1: Write a failing build check**

Run: `npm run build`

Expected: FAIL because `src/main.tsx` imports missing `src/styles.css`.

- [ ] **Step 2: Implement the complete stylesheet**

Add design tokens, warm paper background, editorial grid, serif display hierarchy, responsive navigation, stat rail, timeline, project contrast blocks, visible focus styles, print rules, and `prefers-reduced-motion` handling.

- [ ] **Step 3: Run build and verify GREEN**

Run: `npm run build`

Expected: TypeScript and Vite build succeed with `dist/index.html`.

- [ ] **Step 4: Verify relative asset paths**

Inspect `dist/index.html` and confirm script and stylesheet references begin with `./assets/`.

### Task 4: Private GitHub handoff

**Files:**
- Create: `.gitignore`
- Create: `README.md`
- Create: `.github/workflows/deploy-pages.yml`

**Interfaces:**
- The workflow is manually triggered with `workflow_dispatch`, builds `dist`, and deploys only after GitHub Pages is explicitly enabled.
- README documents local use and the deliberate private-first publishing sequence.

- [ ] **Step 1: Add repository documentation and manual deployment workflow**

Ignore `node_modules`, `dist`, `tmp`, `.superpowers`, and local environment files. Document editing points in `src/content.ts` and `src/styles.css`. Configure Node 22, `npm ci`, `npm run build`, Pages artifact upload, and Pages deployment under manual dispatch only.

- [ ] **Step 2: Run full verification**

Run: `npm test`

Expected: all tests pass.

Run: `npm run typecheck`

Expected: exit code 0.

Run: `npm run build`

Expected: exit code 0 and GitHub Pages-compatible relative assets.

- [ ] **Step 3: Initialize and commit**

Initialize branch `main`, configure the repository-local author from the provided contact, add all source files, and commit with:

```text
feat: build bilingual personal portfolio
```

- [ ] **Step 4: Create the private GitHub repository**

Create `chen-yulin-portfolio` as a private repository, push `main`, verify repository visibility remains private, and do not enable Pages or run the deployment workflow until the user requests public launch.
