import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-darker">
      <div className="absolute inset-0 bg-gradient-to-r from-bg-darker via-bg-darker/95 to-bg-dark" aria-hidden />
      <Container className="relative py-24 sm:py-32">
        <Reveal as="p" className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Ingeniería de alto rendimiento
        </Reveal>
        <Reveal as="h1" delay={100} className="max-w-3xl text-4xl font-extrabold uppercase leading-tight sm:text-6xl">
          Soluciones técnicas para equipo pesado
        </Reveal>
        <Reveal as="p" delay={200} className="mt-6 max-w-xl text-text-muted">
          Especialistas en eliminación de sistemas de postratamiento (EGR, DPF y DEF) y
          reprogramación de potencia. Maximizamos el rendimiento de su flota y reducimos
          fallas costosas, con cumplimiento vial certificado.
        </Reveal>
        <Reveal delay={300} className="mt-8 flex flex-wrap gap-4">
          <Button as={Link} to="/contacto">Agendar servicio</Button>
          <Button as={Link} to="/servicios" variant="outline">Ver catálogo</Button>
        </Reveal>
      </Container>
    </section>
  );
}
