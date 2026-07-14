// Prerender: sirve el build y usa un navegador headless para guardar el HTML
// ya renderizado de cada ruta (con su <title>/meta correctos). Genera
// dist/<ruta>/index.html para que buscadores y scrapers reciban HTML completo.
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { SERVICE_SLUGS } from '../src/data/servicePages.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 4199;

const ROUTES = [
  '/',
  '/servicios',
  '/nosotros',
  '/videos',
  '/contacto',
  ...SERVICE_SLUGS.map((s) => `/${s}`),
];

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        const urlPath = decodeURIComponent(req.url.split('?')[0]);
        let filePath = join(DIST, urlPath);
        // SPA fallback: sin extensión o inexistente -> index.html
        if (!extname(urlPath) || !existsSync(filePath)) {
          filePath = join(DIST, 'index.html');
        }
        const data = await readFile(filePath);
        res.setHeader('Content-Type', MIME[extname(filePath)] || 'application/octet-stream');
        res.end(data);
      } catch {
        res.statusCode = 404;
        res.end('Not found');
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

async function run() {
  if (!existsSync(DIST)) {
    console.error('No existe dist/. Corré "vite build" primero.');
    process.exit(1);
  }

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  for (const route of ROUTES) {
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });
    // Deja correr los efectos (Seo, etc.)
    await new Promise((r) => setTimeout(r, 300));
    const body = await page.evaluate(() => document.documentElement.outerHTML);
    const html = `<!doctype html>\n${body}`;
    const outDir = route === '/' ? DIST : join(DIST, route);
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, 'index.html'), html, 'utf8');
    console.log('prerendered', route);
  }

  await browser.close();
  server.close();
  console.log('Prerender completo:', ROUTES.length, 'rutas.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
