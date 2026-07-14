import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import { SERVICE_PAGES } from '../data/servicePages';
import NotFound from './NotFound';

export default function ServicePage({ slug }) {
  const service = SERVICE_PAGES.find((s) => s.slug === slug);
  if (!service) return <NotFound />;

  const { eyebrow, title, seoTitle, seoDescription, intro, benefits, details, brands } = service;

  return (
    <>
      <Seo title={seoTitle} path={`/${slug}`} description={seoDescription} />

      {/* Encabezado */}
      <section className="relative overflow-hidden bg-bg-darker">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-darker via-bg-darker to-bg-dark" aria-hidden />
        <Container className="relative z-10 py-20 sm:py-24">
          <Reveal as="p" className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            {eyebrow}
          </Reveal>
          <Reveal as="h1" delay={100} className="max-w-3xl text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
            {title}
          </Reveal>
          <Reveal as="p" delay={200} className="mt-6 max-w-2xl text-text-muted">
            {intro}
          </Reveal>
          <Reveal delay={300} className="mt-8 flex flex-wrap gap-4">
            <Button as={Link} to="/contacto">Solicitar cotización</Button>
            <Button as={Link} to="/servicios" variant="outline">Ver todos los servicios</Button>
          </Reveal>
        </Container>
      </section>

      {/* Beneficios */}
      <Section className="bg-bg-dark">
        <Container>
          <Reveal as="h2" className="text-2xl font-extrabold uppercase sm:text-3xl">Beneficios</Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} className="h-full">
                <article className="h-full border-t-2 border-brand-orange bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30">
                  <h3 className="text-base font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{b.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Detalle */}
      <Section className="bg-bg-darker">
        <Container>
          <div className="max-w-3xl space-y-4 text-text-muted">
            {details.map((paragraph) => (
              <Reveal as="p" key={paragraph.slice(0, 40)}>{paragraph}</Reveal>
            ))}
          </div>

          {brands && (
            <Reveal className="mt-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-muted">Marcas compatibles</p>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span key={brand} className="border border-subtle/10 bg-surface px-3 py-1 text-sm font-semibold text-brand-orange">
                    {brand}
                  </span>
                ))}
              </div>
            </Reveal>
          )}
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-brand-orange py-14">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <Reveal className="max-w-xl">
            <h2 className="text-3xl font-extrabold uppercase text-bg-darker sm:text-4xl">
              ¿Necesita este servicio?
            </h2>
            <p className="mt-2 text-bg-darker/80">
              Contáctenos para un diagnóstico o cotización a la medida de sus unidades.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-4">
            <Button as={Link} to="/contacto" className="bg-bg-darker text-brand-orange hover:bg-black">
              Hablar con ingeniería
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
