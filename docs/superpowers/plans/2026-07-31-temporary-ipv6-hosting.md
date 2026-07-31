# Temporary IPv6 Hosting Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make English the portfolio's default on every page load and temporarily serve the production build from the current Mac at its stable global IPv6 address.

**Architecture:** React owns an in-memory `Locale` state initialized to `en`; the language toggle changes that state only for the current page lifetime. Static HTML metadata also defaults to English. Vite builds the site and its preview server binds to the IPv6 wildcard address on port `4173`.

**Tech Stack:** React 19, TypeScript 7, Vitest, Testing Library, Vite 8, macOS IPv6 networking

## Global Constraints

- Initialize the React locale to English on every page load.
- Keep the Chinese/English toggle working for the current page session.
- Do not restore a previously selected language from `localStorage`.
- Listen on IPv6 wildcard address `::` and port `4173`.
- Use stable global IPv6 address `240e:398:53f0:b0:f4:22a7:bee3:1bbf`.
- The temporary URL works only while the Mac is awake, connected, and the preview process is running.

---

## File Structure

- `src/App.tsx`: owns current-session locale state and document metadata updates.
- `src/App.test.tsx`: verifies English-first behavior, switching, and English content/accessibility.
- `index.html`: supplies English static document language, description, and title before React loads.
- No new runtime module or dependency is needed.

### Task 1: English-First Locale Behavior

**Files:**
- Modify: `src/App.test.tsx:6-127`
- Modify: `src/App.tsx:1-52`
- Modify: `index.html:2-11`

**Interfaces:**
- Consumes: `Locale` union and `content` map exported by `src/content.ts`.
- Produces: `App` with initial `Locale` value `en`, an in-session toggle, and no `localStorage` locale persistence.

- [ ] **Step 1: Write the failing English-default tests**

Replace the locale behavior tests with assertions that the first render is English, the toggle switches to Chinese, and a stale saved Chinese value cannot override the English default:

```tsx
describe('portfolio locale behavior', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.lang = 'en';
  });

  it('starts in English and switches the whole page to Chinese', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'Yulin Chen', level: 1 }),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('en');

    await user.click(
      screen.getByRole('button', { name: '切换至中文' }),
    );

    expect(
      screen.getByRole('heading', { name: '陈昱霖', level: 1 }),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('zh-CN');
  });

  it('ignores a saved Chinese preference on a new page load', () => {
    localStorage.setItem('chen-yulin-locale', 'zh');
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'Yulin Chen', level: 1 }),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('en');
  });
});
```

Update content/accessibility expectations to their English equivalents. For the Chinese phrase segmentation test, create a `user`, click the `切换至中文` button, and then retain the existing Chinese phrase assertions.

- [ ] **Step 2: Run tests to verify the old implementation fails**

Run:

```bash
pnpm test -- src/App.test.tsx
```

Expected: FAIL because `App` still initializes to Chinese and restores the stored locale.

- [ ] **Step 3: Implement the minimal English-first state**

Delete `localeKey` and `readLocale`, initialize state directly, and remove the storage write:

```tsx
function App() {
  const [locale, setLocale] = useState<Locale>('en');
  const copy = content[locale];

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    document.title =
      locale === 'zh' ? '陈昱霖 · 个人主页' : 'Yulin Chen · Portfolio';
  }, [locale]);
```

Set the static HTML defaults:

```html
<html lang="en">
```

```html
<meta
  name="description"
  content="Yulin Chen's portfolio: computer science, artificial intelligence, mathematical modeling, and project work."
/>
<title>Yulin Chen · Portfolio</title>
```

- [ ] **Step 4: Run focused and full verification**

Run:

```bash
pnpm test -- src/App.test.tsx
pnpm test
pnpm typecheck
pnpm build
```

Expected: all tests pass, typecheck exits `0`, and Vite creates `dist/`.

- [ ] **Step 5: Commit the behavior change**

```bash
git add src/App.tsx src/App.test.tsx index.html
git commit -m "feat: default portfolio to English"
```

### Task 2: Temporary IPv6 Preview

**Files:**
- No repository files modified.

**Interfaces:**
- Consumes: production output in `dist/` and stable address `240e:398:53f0:b0:f4:22a7:bee3:1bbf`.
- Produces: HTTP listener on `[::]:4173` and direct URL `http://[240e:398:53f0:b0:f4:22a7:bee3:1bbf]:4173/`.

- [ ] **Step 1: Confirm the stable address is still assigned**

Run:

```bash
ifconfig en0 | grep '240e:398:53f0:b0:f4:22a7:bee3:1bbf'
```

Expected: one `inet6` line containing the exact stable address.

- [ ] **Step 2: Start the preview listener**

Run in a persistent terminal session:

```bash
pnpm exec vite preview --host :: --port 4173
```

Expected: Vite reports a local IPv6 URL and keeps running.

- [ ] **Step 3: Verify the listener and response locally**

Run:

```bash
lsof -nP -iTCP:4173 -sTCP:LISTEN
curl -g -6 --max-time 10 -I 'http://[240e:398:53f0:b0:f4:22a7:bee3:1bbf]:4173/'
```

Expected: `node` listens on IPv6 TCP port `4173`, and curl returns `HTTP/1.1 200 OK`.

- [ ] **Step 4: Attempt external reachability verification**

Open the bracketed IPv6 URL through an independent network tool:

```text
http://[240e:398:53f0:b0:f4:22a7:bee3:1bbf]:4173/
```

Expected: the English portfolio loads. If it times out while local curl succeeds, report that macOS firewall or router ingress policy blocks public access; do not claim a publicly reachable URL.

- [ ] **Step 5: Report lifecycle controls**

Report the direct URL, current reachability evidence, and the fact that stopping the Vite process or sleeping the Mac ends availability.
