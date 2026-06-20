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

## Formulario de contacto (Formspree)
El formulario de `/contacto` envía mediante [Formspree](https://formspree.io) (sin backend):

1. Crea una cuenta en Formspree y un formulario nuevo, con destino `Lforta001@gmail.com`.
2. Copia el endpoint del formulario (`https://formspree.io/f/xxxxxxx`).
3. Crea un archivo `.env` en la raíz (ver `.env.example`) con:
   `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx`
4. Reinicia `npm run dev`. La primera vez, Formspree envía un correo de confirmación
   para activar el formulario.

Si la variable no está definida, el envío usa un mock (no manda nada) para no romper el desarrollo.

## Backend propio (opcional, futuro)
La capa `src/services/apiClient.js` queda lista para un backend: define `VITE_API_URL` y
úsala desde un servicio propio cuando exista.
