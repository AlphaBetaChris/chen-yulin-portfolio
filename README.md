# 陈昱霖 · Yulin Chen

陈昱霖的中英文综合个人主页，采用学术编辑风设计，展示真实教育背景、荣誉、项目、技能和联系方式。

## 当前状态

- 仓库应保持私有。
- GitHub Pages 工作流仅支持手动触发，不会因推送自动公开网站。
- 在确认公开前，不要在仓库设置中启用 Pages，也不要运行 `Deploy to GitHub Pages` 工作流。

## 本地运行

需要 Node.js 22 或更高版本，以及 pnpm。

```bash
pnpm install
pnpm dev
```

生产验证：

```bash
pnpm test
pnpm typecheck
pnpm build
```

## 修改内容

- 中英文文字、奖项、项目、技能：`src/content.ts`
- 页面结构与栏目顺序：`src/App.tsx`
- 颜色、字体、间距与响应式样式：`src/styles.css`
- 个人照片：`public/chen-yulin.jpg`
- 浏览器标题与描述：`index.html`

## 公开发布

确认内容无误后：

1. 在 GitHub 仓库的 **Settings → Pages** 中，将 Source 设为 **GitHub Actions**。
2. 在 **Actions** 中选择 **Deploy to GitHub Pages**。
3. 点击 **Run workflow**，选择 `main` 分支。
4. 部署完成后，GitHub 会显示公开网址。

网站构建使用相对资源路径，可在项目型 GitHub Pages 地址下正常加载。

---

An editorial-style bilingual portfolio for Yulin Chen, featuring verified education, awards, projects, skills, and contact details.
