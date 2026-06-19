import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import logo from '../../assets/images/logo.jpg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-darker">
      <div className="absolute inset-0 bg-gradient-to-r from-bg-darker via-bg-darker/95 to-bg-dark" aria-hidden />
      <Container className="relative grid items-center gap-12 py-24 sm:py-32 lg:grid-cols-2">
        {/* Texto */}
        <div>
          <Reveal as="p" className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Ingeniería de alto rendimiento
          </Reveal>
          <Reveal as="h1" delay={100} className="max-w-2xl text-4xl font-extrabold uppercase leading-tight sm:text-6xl">
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
        </div>

        {/* Logo */}
        <Reveal delay={200} className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-brand-orange/20 blur-3xl" aria-hidden />
            <img
              src={logo}
              alt="Servicios y Ventas La Fortaleza"
              className="relative w-56 rounded-2xl shadow-2xl shadow-black/60 ring-1 ring-white/10 sm:w-72 lg:w-80"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
