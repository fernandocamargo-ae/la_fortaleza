import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { ABOUT } from '../utils/constants';

export default function Nosotros() {
  return (
    <>
      {/* Origen */}
      <Section className="bg-bg-darker">
        <Container>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Nuestro Origen
          </p>
          <h1 className="max-w-3xl text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
            Soluciones de potencia para el transporte pesado
          </h1>
          <div className="mt-8 max-w-3xl space-y-4 text-text-muted">
            {ABOUT.origin.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Misión y Visión */}
      <Section className="bg-bg-dark">
        <Container className="grid gap-6 md:grid-cols-2">
          <article className="border-l-4 border-brand-orange bg-surface p-8">
            <h2 className="text-2xl font-bold uppercase">Misión</h2>
            <p className="mt-4 text-text-muted">{ABOUT.mission}</p>
          </article>
          <article className="border-l-4 border-brand-slate bg-surface p-8">
            <h2 className="text-2xl font-bold uppercase">Visión</h2>
            <p className="mt-4 text-text-muted">{ABOUT.vision}</p>
          </article>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-brand-orange py-14">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold uppercase text-bg-darker sm:text-4xl">
              ¿Listo para potenciar su flota?
            </h2>
            <p className="mt-2 text-bg-darker/80">
              Hable con nuestro equipo de ingeniería y obtenga un diagnóstico personalizado de sus unidades.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
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
          </div>
        </Container>
      </section>
    </>
  );
}
