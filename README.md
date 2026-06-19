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
