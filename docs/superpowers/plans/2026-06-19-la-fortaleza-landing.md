# La Fortaleza Landing — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a scalable, multi-page React landing for La Fortaleza with a fully designed Home, shared layout, placeholder routes, and an isolated API layer ready for a future backend.

**Architecture:** Vite + React 19 SPA with React Router. A `MainLayout` (Navbar + Outlet + Footer) wraps every page. The Home is composed of focused section components. All cross-cutting data (nav items, compatibility matrix) lives in `utils/constants.js`. Network access is funneled through `services/apiClient.js` so swapping the mock contact call for a real endpoint touches no components.

**Tech Stack:** React 19, Vite, Tailwind CSS, React Router DOM, JavaScript (.jsx).

## Global Constraints

- React version: **19** (latest stable) — verbatim from spec.
- Language: JavaScript `.jsx`, no TypeScript.
- Brand palette (exact hex), defined in `variables.css` AND `tailwind.config.js`:
  - `brand-orange` `#E2622F`, `brand-slate` `#34495E`, `bg-dark` `#1A1A1A`,
    `bg-darker` `#111111`, `surface` `#2A2A2A`, `text-primary` `#F5F5F5`, `text-muted` `#9CA3AF`.
- Mobile-first; Navbar collapses to a hamburger on mobile.
- Nav/matrix data lives in `utils/constants.js`, never hardcoded in JSX.
- API base URL read from `import.meta.env.VITE_API_URL`.
- Commit after each task.

---

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

### Task 2: Install and configure Tailwind CSS

**Files:**
- Create: `tailwind.config.js`, `postcss.config.js`
- Create: `src/styles/variables.css`
- Modify: `src/styles/globals.css`, `src/main.jsx`

**Interfaces:**
- Produces: Tailwind classes `bg-brand-orange`, `text-brand-orange`, `bg-brand-slate`, `bg-bg-dark`, `bg-bg-darker`, `bg-surface`, `text-text-primary`, `text-text-muted` available app-wide. CSS vars `--brand-orange` etc. on `:root`.

- [ ] **Step 1: Install Tailwind toolchain**

```bash
npm install -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p
```

- [ ] **Step 2: Configure content + brand colors**

`tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#E2622F',
        'brand-slate': '#34495E',
        'bg-dark': '#1A1A1A',
        'bg-darker': '#111111',
        surface: '#2A2A2A',
        'text-primary': '#F5F5F5',
        'text-muted': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 3: Define CSS tokens**

`src/styles/variables.css`:
```css
:root {
  --brand-orange: #E2622F;
  --brand-slate: #34495E;
  --bg-dark: #1A1A1A;
  --bg-darker: #111111;
  --surface: #2A2A2A;
  --text-primary: #F5F5F5;
  --text-muted: #9CA3AF;
}
```

`src/styles/globals.css`:
```css
@import './variables.css';
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root {
  min-height: 100%;
}
body {
  margin: 0;
  background-color: var(--bg-dark);
  color: var(--text-primary);
  font-family: 'Inter', system-ui, sans-serif;
}
```

- [ ] **Step 4: Import globals in main.jsx**

In `src/main.jsx`, replace any default CSS import with:
```js
import './styles/globals.css';
```
Delete the generated `src/index.css` and `src/App.css` if present.

- [ ] **Step 5: Verify Tailwind renders**

Temporarily set `src/App.jsx` body to `<h1 className="text-brand-orange text-4xl">Tailwind OK</h1>`.
Run: `npm run dev`
Expected: heading appears in brand orange on a dark background. Revert the temp change.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: configure Tailwind with brand palette tokens"
```

---

### Task 3: Move logo into assets and add constants

**Files:**
- Create: `src/assets/images/logo.jpg` (moved from repo root `logo.JPG`)
- Create: `src/utils/constants.js`

**Interfaces:**
- Produces:
  - `NAV_ITEMS`: `Array<{ label: string, path: string }>`
  - `EMERGENCY_ITEM`: `{ label: string, path: string }`
  - `SPECIALIZATION`: `Array<{ title: string, description: string, tags?: string[] }>`
  - `COMPAT_MATRIX`: `Array<{ brand: string, models: string, postTreatment: string, chiptuning: string, status: string }>`
  - `FOOTER_LINKS`: `Array<{ label: string, path: string }>`
  - `CONTACT_INFO`: `{ address: string, phone: string, email: string }`

- [ ] **Step 1: Move the logo**

```bash
mkdir -p src/assets/images
git mv logo.JPG src/assets/images/logo.jpg
```

- [ ] **Step 2: Create constants**

`src/utils/constants.js`:
```js
export const NAV_ITEMS = [
  { label: 'Servicios', path: '/servicios' },
  { label: 'Motores', path: '/motores' },
  { label: 'Repuestos', path: '/repuestos' },
  { label: 'Flotillas', path: '/flotillas' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Contacto', path: '/contacto' },
];

export const EMERGENCY_ITEM = { label: 'Asistencia de Emergencia', path: '/emergencia' };

export const SPECIALIZATION = [
  {
    title: 'Eliminación de Sistemas de Postratamiento',
    description:
      'Optimización integral de software para suprimir sistemas DPF, SCR y EGR. Reduce costos de mantenimiento y tiempos de inactividad por fallos de regeneración.',
    tags: ['Desactivación DPF/DEF', 'Eliminación bloqueo EGR', 'Software OEM certificado'],
  },
  {
    title: 'Aumento de Potencia (Chiptuning)',
    description:
      'Maximizamos el torque y los HP de su motor sin comprometer la integridad estructural. Ganancias de hasta un 25% en eficiencia dinámica.',
  },
  {
    title: 'Certificado de Limitador (PROVIAL)',
    description:
      'Instalación y calibración de limitadores de velocidad a 80km/h bajo la normativa técnica PROVIAL. Entrega de certificación inmediata para cumplimiento legal.',
  },
  {
    title: 'Auxilio en Ruta 24/7',
    description:
      'Diagnóstico computarizado y reparaciones mecánicas in-situ. Cobertura nacional para flota pesada.',
  },
];

export const COMPAT_MATRIX = [
  { brand: 'CUMMINS', models: 'ISX, ISM, ISL, ISB, QSK', postTreatment: 'DISPONIBLE', chiptuning: 'DISPONIBLE', status: 'CERTIFICADO' },
  { brand: 'CATERPILLAR', models: 'C12, C13, C15 ACERT, 3406E', postTreatment: 'DISPONIBLE', chiptuning: 'DISPONIBLE', status: 'CERTIFICADO' },
  { brand: 'DETROIT DIESEL', models: 'DD13, DD15, SERIES 60', postTreatment: 'DISPONIBLE', chiptuning: 'DISPONIBLE', status: 'CERTIFICADO' },
  { brand: 'VOLVO / MACK', models: 'D11, D13, D16, MP7, MP8', postTreatment: 'DISPONIBLE', chiptuning: 'DISPONIBLE', status: 'CERTIFICADO' },
  { brand: 'HINO / ISUZU', models: 'J08, N04, 4HK1, 6HK1', postTreatment: 'DISPONIBLE', chiptuning: 'DISPONIBLE', status: 'CERTIFICADO' },
];

export const FOOTER_LINKS = [
  { label: 'Certificación PROVIAL', path: '/servicios' },
  { label: 'Términos de Servicio', path: '/terminos' },
  { label: 'Política de Privacidad', path: '/privacidad' },
  { label: 'Soporte Técnico', path: '/contacto' },
  { label: 'Contacto', path: '/contacto' },
];

export const CONTACT_INFO = {
  address: 'Zona Industrial, Ciudad de Guatemala, GT.',
  phone: '+502 2000-0000',
  email: 'info@lafortaleza.com.gt',
};
```

- [ ] **Step 3: Verify imports resolve**

Run: `npm run dev` (no usage yet, just confirm no syntax error on save). Expected: server stays up, no console error. Stop it.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add brand constants and relocate logo to assets"
```

---

### Task 4: API layer (apiClient + contactService)

**Files:**
- Create: `src/services/apiClient.js`, `src/services/contactService.js`
- Create: `.env.example`

**Interfaces:**
- Produces:
  - `apiClient.get(path, options)` / `apiClient.post(path, body, options)` → `Promise<any>` (parsed JSON), throws `Error` on non-2xx.
  - `sendContactForm(data: { name, company, email, subject, message }): Promise<{ ok: true }>` — mock today.

- [ ] **Step 1: Create the fetch wrapper**

`src/services/apiClient.js`:
```js
const BASE_URL = import.meta.env.VITE_API_URL ?? '';

async function request(path, { method = 'GET', body, headers } = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    throw new Error(`API ${method} ${path} failed: ${res.status}`);
  }
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

export const apiClient = {
  get: (path, options) => request(path, { ...options, method: 'GET' }),
  post: (path, body, options) => request(path, { ...options, method: 'POST', body }),
};
```

- [ ] **Step 2: Create the contact service (mock)**

`src/services/contactService.js`:
```js
import { apiClient } from './apiClient';

/**
 * Sends the contact form.
 * TODO(backend): replace the mock with:
 *   return apiClient.post('/contact', data);
 */
export async function sendContactForm(data) {
  // Mock implementation until the backend exists.
  // eslint-disable-next-line no-console
  console.log('[contactService] sendContactForm payload:', data);
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { ok: true };
}

// Keep apiClient referenced so the swap is a one-line change later.
export { apiClient };
```

- [ ] **Step 3: Create .env.example**

`.env.example`:
```
# Base URL for the future backend API (leave empty while mocking)
VITE_API_URL=
```

- [ ] **Step 4: Verify no syntax errors**

Run: `npm run dev`. Expected: server stays up, no errors. Stop it.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add isolated API client and mock contact service"
```

---

### Task 5: UI primitives (Button, Container, Section)

**Files:**
- Create: `src/components/ui/Button.jsx`, `src/components/ui/Container.jsx`, `src/components/ui/Section.jsx`

**Interfaces:**
- Produces:
  - `<Button variant="primary"|"outline" as={'a'|'button'|Link} to? href? onClick? >children</Button>`
  - `<Container className?>children</Container>` — centered max-width wrapper.
  - `<Section id? className?>children</Section>` — vertical padding wrapper.

- [ ] **Step 1: Container**

`src/components/ui/Container.jsx`:
```jsx
export default function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
```

- [ ] **Step 2: Section**

`src/components/ui/Section.jsx`:
```jsx
export default function Section({ children, id, className = '' }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}
```

- [ ] **Step 3: Button**

`src/components/ui/Button.jsx`:
```jsx
const VARIANTS = {
  primary: 'bg-brand-orange text-bg-darker hover:bg-orange-500',
  outline: 'border border-white/40 text-text-primary hover:border-brand-orange hover:text-brand-orange',
};

export default function Button({ variant = 'primary', as: Tag = 'button', className = '', children, ...props }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors';
  return (
    <Tag className={`${base} ${VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`. Expected: build succeeds (components compile even if unused). 

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add UI primitives (Button, Container, Section)"
```

---

### Task 6: Routing skeleton + placeholder pages + NotFound

**Files:**
- Create: `src/pages/Home.jsx` (temporary stub), `src/pages/Servicios.jsx`, `src/pages/Nosotros.jsx`, `src/pages/Contacto.jsx`, `src/pages/Motores.jsx`, `src/pages/Repuestos.jsx`, `src/pages/Flotillas.jsx`, `src/pages/Emergencia.jsx`, `src/pages/NotFound.jsx`
- Create: `src/components/layout/Placeholder.jsx`
- Create: `src/routes.jsx`
- Modify: `src/App.jsx`, `src/main.jsx`

**Interfaces:**
- Consumes: `MainLayout` is added in Task 9; until then `App` renders routes directly. Routes use `NAV_ITEMS` paths from Task 3.
- Produces: `<AppRoutes />` default export from `routes.jsx`; route paths `/`, `/servicios`, `/motores`, `/repuestos`, `/flotillas`, `/nosotros`, `/contacto`, `/emergencia`, and `*`.

- [ ] **Step 1: Install React Router**

```bash
npm install react-router-dom
```

- [ ] **Step 2: Reusable placeholder**

`src/components/layout/Placeholder.jsx`:
```jsx
import Container from '../ui/Container';

export default function Placeholder({ title }) {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">La Fortaleza</p>
      <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-md text-text-muted">Esta sección estará disponible próximamente.</p>
    </Container>
  );
}
```

- [ ] **Step 3: Placeholder pages**

Create each of these files with the shown content (one per file):

`src/pages/Servicios.jsx`:
```jsx
import Placeholder from '../components/layout/Placeholder';
export default function Servicios() { return <Placeholder title="Servicios" />; }
```
`src/pages/Nosotros.jsx`:
```jsx
import Placeholder from '../components/layout/Placeholder';
export default function Nosotros() { return <Placeholder title="Nosotros" />; }
```
`src/pages/Contacto.jsx`:
```jsx
import Placeholder from '../components/layout/Placeholder';
export default function Contacto() { return <Placeholder title="Contacto" />; }
```
`src/pages/Motores.jsx`:
```jsx
import Placeholder from '../components/layout/Placeholder';
export default function Motores() { return <Placeholder title="Motores" />; }
```
`src/pages/Repuestos.jsx`:
```jsx
import Placeholder from '../components/layout/Placeholder';
export default function Repuestos() { return <Placeholder title="Repuestos" />; }
```
`src/pages/Flotillas.jsx`:
```jsx
import Placeholder from '../components/layout/Placeholder';
export default function Flotillas() { return <Placeholder title="Flotillas" />; }
```
`src/pages/Emergencia.jsx`:
```jsx
import Placeholder from '../components/layout/Placeholder';
export default function Emergencia() { return <Placeholder title="Asistencia de Emergencia" />; }
```
`src/pages/NotFound.jsx`:
```jsx
import Placeholder from '../components/layout/Placeholder';
export default function NotFound() { return <Placeholder title="404 — Página no encontrada" />; }
```

- [ ] **Step 4: Temporary Home stub**

`src/pages/Home.jsx` (replaced fully in Task 8):
```jsx
import Placeholder from '../components/layout/Placeholder';
export default function Home() { return <Placeholder title="Home (en construcción)" />; }
```

- [ ] **Step 5: Central routes**

`src/routes.jsx`:
```jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Motores from './pages/Motores';
import Repuestos from './pages/Repuestos';
import Flotillas from './pages/Flotillas';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Emergencia from './pages/Emergencia';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/motores" element={<Motores />} />
      <Route path="/repuestos" element={<Repuestos />} />
      <Route path="/flotillas" element={<Flotillas />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/emergencia" element={<Emergencia />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

- [ ] **Step 6: Wire App + BrowserRouter**

`src/App.jsx`:
```jsx
import AppRoutes from './routes';
export default function App() {
  return <AppRoutes />;
}
```
`src/main.jsx`:
```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/globals.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

- [ ] **Step 7: Verify routes render**

Run: `npm run dev`. Visit `/`, `/servicios`, `/nosotros`, and a bad URL like `/xyz`.
Expected: `/` shows "Home (en construcción)", named pages show their placeholder, bad URL shows 404. Stop it.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: add routing skeleton with placeholder pages"
```

---

### Task 7: Navbar (with mobile hamburger)

**Files:**
- Create: `src/components/layout/Navbar.jsx`
- Create: `src/hooks/useScrollHeader.js`

**Interfaces:**
- Consumes: `NAV_ITEMS`, `EMERGENCY_ITEM` (Task 3); logo asset (Task 3); `Container` (Task 5); React Router `NavLink`, `Link`.
- Produces: `<Navbar />` default export. `useScrollHeader(threshold?: number): boolean` (true once scrolled past threshold).

- [ ] **Step 1: Scroll hook**

`src/hooks/useScrollHeader.js`:
```js
import { useEffect, useState } from 'react';

export default function useScrollHeader(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}
```

- [ ] **Step 2: Navbar**

`src/components/layout/Navbar.jsx`:
```jsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../ui/Container';
import useScrollHeader from '../../hooks/useScrollHeader';
import { NAV_ITEMS, EMERGENCY_ITEM } from '../../utils/constants';
import logo from '../../assets/images/logo.jpg';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollHeader();

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-brand-orange' : 'text-text-primary hover:text-brand-orange'}`;

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 transition-colors ${scrolled ? 'bg-bg-darker/95 backdrop-blur' : 'bg-bg-darker'}`}>
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="La Fortaleza" className="h-9 w-9 rounded object-cover" />
          <span className="text-lg font-extrabold leading-none">LA<br className="hidden sm:block" />FORTALEZA</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>{item.label}</NavLink>
          ))}
          <Link to={EMERGENCY_ITEM.path} className="bg-brand-orange px-4 py-2 text-xs font-semibold uppercase tracking-wide text-bg-darker hover:bg-orange-500">
            {EMERGENCY_ITEM.label}
          </Link>
        </nav>

        <button type="button" className="lg:hidden" aria-label="Abrir menú" onClick={() => setOpen((v) => !v)}>
          <span className="block h-0.5 w-6 bg-text-primary" />
          <span className="mt-1.5 block h-0.5 w-6 bg-text-primary" />
          <span className="mt-1.5 block h-0.5 w-6 bg-text-primary" />
        </button>
      </Container>

      {open && (
        <nav className="border-t border-white/10 bg-bg-darker lg:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link to={EMERGENCY_ITEM.path} onClick={() => setOpen(false)} className="bg-brand-orange px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-bg-darker">
              {EMERGENCY_ITEM.label}
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 3: Verify (temporary mount)**

Temporarily render `<Navbar />` above `<AppRoutes />` in `App.jsx`.
Run: `npm run dev`. Expected: navbar shows all links on desktop; resizing to mobile shows hamburger that toggles the menu; clicking links navigates. Revert the temp mount (it becomes permanent via MainLayout in Task 9).

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add responsive Navbar with scroll header hook"
```

---

### Task 8: Footer

**Files:**
- Create: `src/components/layout/Footer.jsx`

**Interfaces:**
- Consumes: `FOOTER_LINKS`, `CONTACT_INFO` (Task 3); `Container` (Task 5); `Link`.
- Produces: `<Footer />` default export.

- [ ] **Step 1: Footer**

`src/components/layout/Footer.jsx`:
```jsx
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { FOOTER_LINKS, CONTACT_INFO } from '../../utils/constants';

export default function Footer() {
  return (
    <footer className="border-t-2 border-brand-orange bg-bg-darker">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="text-xl font-extrabold text-brand-orange">LA FORTALEZA</p>
          <p className="mt-3 text-sm text-text-muted">
            © 2024 Servicios y Ventas La Fortaleza. Expertos en Potencia Pesada.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-muted">Enlaces directos</p>
          <ul className="space-y-2">
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.path} className="text-sm text-text-primary hover:text-brand-orange">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-muted">Sede central</p>
          <address className="space-y-2 text-sm not-italic text-text-primary">
            <p>{CONTACT_INFO.address}</p>
            <p>{CONTACT_INFO.phone}</p>
            <p>{CONTACT_INFO.email}</p>
          </address>
        </div>
      </Container>
    </footer>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`. Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Footer component"
```

---

### Task 9: MainLayout wiring

**Files:**
- Create: `src/layouts/MainLayout.jsx`
- Modify: `src/routes.jsx`

**Interfaces:**
- Consumes: `Navbar` (Task 7), `Footer` (Task 8); React Router `Outlet`.
- Produces: layout route wrapping all pages; `<main>` renders `<Outlet />`.

- [ ] **Step 1: MainLayout**

`src/layouts/MainLayout.jsx`:
```jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 2: Nest routes under the layout**

Update `src/routes.jsx` so all routes are children of a layout route:
```jsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Motores from './pages/Motores';
import Repuestos from './pages/Repuestos';
import Flotillas from './pages/Flotillas';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Emergencia from './pages/Emergencia';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/motores" element={<Motores />} />
        <Route path="/repuestos" element={<Repuestos />} />
        <Route path="/flotillas" element={<Flotillas />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/emergencia" element={<Emergencia />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
```
If Task 7 left a temporary `<Navbar />` in `App.jsx`, ensure `App.jsx` is back to just rendering `<AppRoutes />`.

- [ ] **Step 3: Verify layout on every page**

Run: `npm run dev`. Expected: Navbar + Footer appear on `/`, every placeholder page, and the 404. Stop it.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: wrap all routes in MainLayout"
```

---

### Task 10: Home — Hero section

**Files:**
- Create: `src/components/home/Hero.jsx`

**Interfaces:**
- Consumes: `Container`, `Button`, `Section` (Task 5); `Link`.
- Produces: `<Hero />` default export.

- [ ] **Step 1: Hero**

`src/components/home/Hero.jsx`:
```jsx
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-darker">
      <div className="absolute inset-0 bg-gradient-to-r from-bg-darker via-bg-darker/95 to-bg-dark" aria-hidden />
      <Container className="relative py-24 sm:py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Ingeniería de alto rendimiento
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold uppercase leading-tight sm:text-6xl">
          Soluciones técnicas para equipo pesado
        </h1>
        <p className="mt-6 max-w-xl text-text-muted">
          Especialistas en optimización electrónica y mecánica. Elevamos la productividad
          de su flota mediante tecnología de precisión y cumplimiento normativo.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button as={Link} to="/contacto">Agendar servicio</Button>
          <Button as={Link} to="/servicios" variant="outline">Ver catálogo</Button>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`. Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Home hero section"
```

---

### Task 11: Home — Especializacion section

**Files:**
- Create: `src/components/home/Especializacion.jsx`

**Interfaces:**
- Consumes: `SPECIALIZATION` (Task 3); `Container`, `Section` (Task 5).
- Produces: `<Especializacion />` default export.

- [ ] **Step 1: Especializacion**

`src/components/home/Especializacion.jsx`:
```jsx
import Container from '../ui/Container';
import Section from '../ui/Section';
import { SPECIALIZATION } from '../../utils/constants';

export default function Especializacion() {
  return (
    <Section className="bg-bg-dark">
      <Container>
        <h2 className="mb-12 text-center text-3xl font-extrabold uppercase sm:text-4xl">
          Nuestra Especialización
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {SPECIALIZATION.map((item) => (
            <article key={item.title} className="border border-white/10 bg-surface p-6">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm text-text-muted">{item.description}</p>
              {item.tags && (
                <ul className="mt-4 space-y-1">
                  {item.tags.map((tag) => (
                    <li key={tag} className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
                      ✓ {tag}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`. Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Home especializacion section"
```

---

### Task 12: Home — MatrizCompatibilidad section

**Files:**
- Create: `src/components/home/MatrizCompatibilidad.jsx`

**Interfaces:**
- Consumes: `COMPAT_MATRIX` (Task 3); `Container`, `Section` (Task 5).
- Produces: `<MatrizCompatibilidad />` default export.

- [ ] **Step 1: MatrizCompatibilidad**

`src/components/home/MatrizCompatibilidad.jsx`:
```jsx
import Container from '../ui/Container';
import Section from '../ui/Section';
import { COMPAT_MATRIX } from '../../utils/constants';

const HEADERS = ['Marca de Motor', 'Modelos Soportados', 'Eliminación Post.', 'Chiptuning', 'Estado'];

export default function MatrizCompatibilidad() {
  return (
    <Section className="bg-bg-darker">
      <Container>
        <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">Matriz de Compatibilidad</h2>
        <p className="mt-2 text-sm text-text-muted">Sistemas y marcas compatibles para optimización de software.</p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-text-muted">
                {HEADERS.map((h) => (
                  <th key={h} className="py-3 pr-4 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPAT_MATRIX.map((row) => (
                <tr key={row.brand} className="border-b border-white/5">
                  <td className="py-4 pr-4 font-bold">{row.brand}</td>
                  <td className="py-4 pr-4 text-text-muted">{row.models}</td>
                  <td className="py-4 pr-4 font-semibold text-brand-orange">{row.postTreatment}</td>
                  <td className="py-4 pr-4 font-semibold text-brand-orange">{row.chiptuning}</td>
                  <td className="py-4 pr-4">
                    <span className="inline-block border border-green-500/40 px-2 py-1 text-xs font-semibold uppercase text-green-400">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-text-muted">
          * Para otras marcas y modelos, consulte con nuestro departamento de ingeniería técnica.
        </p>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`. Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Home compatibility matrix section"
```

---

### Task 13: Home — CTABanner section

**Files:**
- Create: `src/components/home/CTABanner.jsx`

**Interfaces:**
- Consumes: `Container`, `Button` (Task 5); `Link`.
- Produces: `<CTABanner />` default export.

- [ ] **Step 1: CTABanner**

`src/components/home/CTABanner.jsx`:
```jsx
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function CTABanner() {
  return (
    <section className="bg-brand-orange py-14">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold uppercase text-bg-darker sm:text-4xl">
            ¿Listo para potenciar su flota?
          </h2>
          <p className="mt-2 text-bg-darker/80">
            Contacte hoy mismo con un experto y obtenga un diagnóstico personalizado de sus unidades.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button as={Link} to="/contacto" className="bg-bg-darker text-brand-orange hover:bg-black">
            Hablar con ingeniería
          </Button>
          <Button as={Link} to="/servicios" variant="outline" className="border-bg-darker text-bg-darker hover:border-bg-darker hover:text-black">
            Descargar tarifario
          </Button>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`. Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Home CTA banner section"
```

---

### Task 14: Assemble Home page

**Files:**
- Modify: `src/pages/Home.jsx` (replace the stub from Task 6)

**Interfaces:**
- Consumes: `Hero`, `Especializacion`, `MatrizCompatibilidad`, `CTABanner` (Tasks 10–13).

- [ ] **Step 1: Compose the Home**

`src/pages/Home.jsx`:
```jsx
import Hero from '../components/home/Hero';
import Especializacion from '../components/home/Especializacion';
import MatrizCompatibilidad from '../components/home/MatrizCompatibilidad';
import CTABanner from '../components/home/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Especializacion />
      <MatrizCompatibilidad />
      <CTABanner />
    </>
  );
}
```

- [ ] **Step 2: Verify full Home end-to-end**

Run: `npm run dev`. Visit `/`.
Expected: Navbar → Hero → Especialización (4 cards) → Matriz (table) → CTA banner (orange) → Footer, all in brand colors, responsive (resize to mobile: hamburger works, table scrolls horizontally). Stop it.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: assemble Home page from section components"
```

---

### Task 15: README and final build check

**Files:**
- Create: `README.md`

**Interfaces:** none.

- [ ] **Step 1: README**

`README.md`:
```markdown
# La Fortaleza — Landing Page

Landing multi-página para La Fortaleza (Servicios y Ventas), construida con React 19 + Vite + Tailwind CSS.

## Scripts
- `npm install` — instala dependencias
- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run preview` — sirve el build

## Estructura
- `src/components/` — UI (`ui/`), layout (`layout/`), secciones del Home (`home/`)
- `src/layouts/MainLayout.jsx` — Navbar + contenido + Footer
- `src/pages/` — páginas y rutas (Home completa; resto placeholder)
- `src/services/` — capa de API aislada (`apiClient.js`, `contactService.js`)
- `src/utils/constants.js` — datos de navegación y matriz de compatibilidad
- `src/styles/` — tokens y estilos globales

## Backend futuro
Define `VITE_API_URL` en un archivo `.env` (ver `.env.example`). Para activar el envío real
del formulario de contacto, cambia el cuerpo de `sendContactForm` en
`src/services/contactService.js` por `return apiClient.post('/contact', data);`.
```

- [ ] **Step 2: Final production build**

Run: `npm run build`. Expected: build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "docs: add README"
```

---

## Notes for the implementer

- After Task 1, if `npm create vite` generated `eslint.config.js`, keep it; lint is optional.
- The brand orange hover uses Tailwind's default `orange-500`; acceptable as a lighter shade of the brand accent.
- Hero/section background images from the mockups are optional polish — solid dark + gradient is the baseline and is what this plan implements. Adding images can be a follow-up.
