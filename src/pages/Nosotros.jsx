import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import Watermark from '../components/ui/Watermark';
import { ABOUT } from '../utils/constants';

export default function Nosotros() {
  return (
    <>
      <Seo
        title="Nosotros"
        path="/nosotros"
        description="Servicios y Ventas La Fortaleza: especialistas en optimización de motores y cumplimiento vial para el transporte pesado en Guatemala. Conozca nuestro origen, misión y visión."
      />
      {/* Origen */}
      <Section className="relative overflow-hidden bg-bg-darker">
        <Watermark />
        <Container className="relative">
          <Reveal as="p" className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Nuestro Origen
          </Reveal>
          <Reveal as="h1" delay={100} className="max-w-3xl text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
            Soluciones de potencia para el transporte pesado
          </Reveal>
          <Reveal delay={200} className="mt-8 max-w-3xl space-y-4 text-text-muted">
            {ABOUT.origin.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Misión y Visión */}
      <Section className="bg-bg-dark">
        <Container className="grid gap-6 md:grid-cols-2">
          <Reveal className="h-full">
            <article className="h-full border-l-4 border-brand-orange bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30">
              <h2 className="text-2xl font-bold uppercase">Misión</h2>
              <p className="mt-4 text-text-muted">{ABOUT.mission}</p>
            </article>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <article className="h-full border-l-4 border-brand-slate bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30">
              <h2 className="text-2xl font-bold uppercase">Visión</h2>
              <p className="mt-4 text-text-muted">{ABOUT.vision}</p>
            </article>
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-brand-orange py-14">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <Reveal className="max-w-xl">
            <h2 className="text-3xl font-extrabold uppercase text-bg-darker sm:text-4xl">
              ¿Listo para potenciar sus unidades?
            </h2>
            <p className="mt-2 text-bg-darker/80">
              Hable con nuestro equipo de ingeniería y obtenga un diagnóstico personalizado de sus unidades.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-4">
            <Button as={Link} to="/contacto" className="bg-bg-darker text-brand-orange hover:bg-black">
              Hablar con ingeniería
            </Button>
            <Button
              as={Link}
              to="/servicios"
              variant="outline"
              className="border-bg-darker text-bg-darker hover:border-bg-darker hover:text-black"
            >
              Ver servicios
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
