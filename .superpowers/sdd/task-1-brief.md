### Task 1: Scaffold Vite + React 19 project

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `.gitignore`
- Create: `src/styles/globals.css`

- [ ] **Step 1: Initialize git and scaffold**

```bash
cd "c:/Users/Fernando Camargo/Desktop/la_fortaleza"
git init
npm create vite@latest . -- --template react
```
When prompted that the directory is not empty (logo.JPG, docs/), choose **"Ignore files and continue"**.

- [ ] **Step 2: Pin React 19 and install**

Ensure `package.json` has `"react": "^19.0.0"` and `"react-dom": "^19.0.0"`. Then:
```bash
npm install
```

- [ ] **Step 3: Verify the dev server boots**

Run: `npm run dev`
Expected: Vite prints a local URL (e.g. `http://localhost:5173/`) with no errors. Stop it with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: scaffold Vite + React 19 project"
```

---

