# La Fortaleza — Landing Page · Diseño

Fecha: 2026-06-19

## Objetivo

Construir la landing page de **La Fortaleza (Servicios y Ventas)**, taller especializado
en potencia y mecánica para transporte pesado. La base debe escalar: arquitectura
ordenada, capa de API aislada lista para un backend futuro, y rutas placeholder para las
secciones que aún no se diseñan.

## Stack

- **React 19** (versión estable más reciente)
- **Vite** (bundler / dev server)
- **Tailwind CSS** (estilos utilitarios)
- **React Router DOM** (multi-página con rutas)
- JavaScript (`.jsx`), sin TypeScript

## Estructura de carpetas

```
la_fortaleza/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/            # logo y gráficos
│   ├── components/
│   │   ├── ui/                # Button, Section, Container (reutilizables base)
│   │   ├── layout/            # Navbar, Footer
│   │   └── home/              # Hero, Especializacion, MatrizCompatibilidad, CTABanner
│   ├── layouts/
│   │   └── MainLayout.jsx     # Navbar + <Outlet/> + Footer
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Servicios.jsx      # placeholder
│   │   ├── Nosotros.jsx       # placeholder
│   │   ├── Contacto.jsx       # placeholder
│   │   ├── Motores.jsx        # placeholder
│   │   ├── Repuestos.jsx      # placeholder
│   │   ├── Flotillas.jsx      # placeholder
│   │   ├── Emergencia.jsx     # placeholder
│   │   └── NotFound.jsx
│   ├── services/
│   │   ├── apiClient.js       # wrapper fetch + BASE_URL desde env
│   │   └── contactService.js  # sendContactForm() (mock hoy, real mañana)
│   ├── hooks/
│   │   └── useScrollHeader.js # ejemplo: header con estado al hacer scroll
│   ├── utils/
│   │   └── constants.js       # rutas, items de nav, datos de la matriz
│   ├── styles/
│   │   ├── globals.css
│   │   └── variables.css      # tokens de color CSS
│   ├── routes.jsx             # definición central de rutas
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Paleta (tokens, derivados del logo)

Definidos en `variables.css` y replicados en `tailwind.config.js` como clases utilitarias
(`bg-brand-orange`, `text-brand-slate`, etc.).

| Token             | Valor      | Uso                                  |
|-------------------|------------|--------------------------------------|
| `brand-orange`    | `#E2622F`  | Acento principal, CTA, hover         |
| `brand-slate`     | `#34495E`  | Gris azulado del logo                |
| `bg-dark`         | `#1A1A1A`  | Fondo base de secciones              |
| `bg-darker`       | `#111111`  | Fondo del hero / footer              |
| `surface`         | `#2A2A2A`  | Tarjetas y paneles                   |
| `text-primary`    | `#F5F5F5`  | Texto principal                      |
| `text-muted`      | `#9CA3AF`  | Texto secundario                     |

## Alcance de esta fase

### Home (diseño completo — basado en el mockup de "Servicios")

Composición en `pages/Home.jsx`, todo dentro de `MainLayout`:

1. **Hero** — "Soluciones técnicas para equipo pesado", subtítulo, botones
   `AGENDAR SERVICIO` y `VER CATÁLOGO`, fondo oscuro con imagen de maquinaria.
2. **Especializacion** — título "Nuestra Especialización" + 4 tarjetas:
   eliminación de postratamiento, aumento de potencia (chiptuning), certificado de
   limitador (PROVIAL), auxilio en ruta 24/7.
3. **MatrizCompatibilidad** — tabla "Matriz de Compatibilidad" con marcas de motor
   (Cummins, Caterpillar, Detroit Diesel, Volvo/Mack, Hino/Isuzu) y estado por columna.
   Los datos viven en `utils/constants.js`.
4. **CTABanner** — banner naranja "¿Listo para potenciar su flota?" con botones.
5. **Footer** — logo, enlaces directos, sede/contacto, copyright.

### Layout compartido

- **Navbar** — logo + enlaces (Servicios, Motores, Repuestos, Flotillas, Nosotros,
  Contacto) + botón "Asistencia de Emergencia". Menú hamburguesa en móvil.
- **Footer** — reutilizado en todas las páginas.

### Rutas placeholder

Servicios, Nosotros, Contacto, Motores, Repuestos, Flotillas y Emergencia renderizan
un componente "Próximamente" estilizado (reutilizando `MainLayout`), ya enlazadas en el
navbar y en `routes.jsx`. `NotFound` para rutas no existentes.

## Capa de API (lista para backend futuro)

- `services/apiClient.js`: wrapper sobre `fetch`. Lee `import.meta.env.VITE_API_URL`,
  centraliza headers (`Content-Type: application/json`), parsea respuestas y normaliza
  errores. Expone `get`, `post`, etc.
- `services/contactService.js`: `sendContactForm(data)`. Hoy devuelve un **mock**
  (Promise que resuelve tras un pequeño delay y loguea el payload). Cuando exista el
  backend, solo se cambia el cuerpo para llamar a `apiClient.post('/contact', data)`,
  sin tocar ningún componente.
- `.env.example` documenta `VITE_API_URL`.

## Responsive y calidad

- Mobile-first con breakpoints de Tailwind. Navbar colapsa a menú hamburguesa.
- Datos de navegación y de la matriz centralizados en `utils/constants.js` (no
  hardcodeados en el JSX), para escalar y para que un backend pueda reemplazarlos luego.
- Componentes pequeños y enfocados; cada sección del Home es su propio componente.

## Fuera de alcance (fase futura)

- Backend / API real.
- Diseño completo de Servicios, Nosotros, Contacto, Motores, Repuestos, Flotillas,
  Emergencia (hoy son placeholders).
- Formulario de contacto funcional renderizado (la capa de servicio queda lista; el
  formulario se monta cuando se diseñe la página Contacto).
- i18n, analytics, tests automatizados.
```