// Carga todas las fotos de trabajos realizados (miniatura + versión completa)
// sin tener que escribir un import por archivo.
const fullModules = import.meta.glob('../assets/gallery/*.jpg', { eager: true, import: 'default' });
const thumbModules = import.meta.glob('../assets/gallery/thumbs/*.jpg', { eager: true, import: 'default' });

function sorted(modules) {
  return Object.keys(modules)
    .sort()
    .map((key) => modules[key]);
}

const fulls = sorted(fullModules);
const thumbs = sorted(thumbModules);

export const GALLERY_PHOTOS = fulls.map((full, i) => ({
  full,
  thumb: thumbs[i],
  alt: `Trabajo realizado por La Fortaleza — foto ${i + 1}`,
}));
