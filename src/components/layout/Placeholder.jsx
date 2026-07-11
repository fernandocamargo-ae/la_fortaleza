import Container from '../ui/Container';
import Seo from '../seo/Seo';

export default function Placeholder({ title }) {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <Seo title={title} description={`${title} — Servicios y Ventas La Fortaleza.`} noindex />
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">La Fortaleza</p>
      <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-md text-text-muted">Esta sección estará disponible próximamente.</p>
    </Container>
  );
}
