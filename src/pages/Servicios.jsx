import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import BackgroundCarousel from '../components/ui/BackgroundCarousel';
import Especializacion from '../components/home/Especializacion';
import MatrizCompatibilidad from '../components/home/MatrizCompatibilidad';
import servicios1 from '../assets/images/servicios1.png';
import servicios2 from '../assets/images/servicios2.png';
import servicios3 from '../assets/images/servicios3.png';

const HERO_IMAGES = [servicios1, servicios2, servicios3];

export default function Servicios() {
  return (
    <>
      {/* Encabezado */}
      <section className="relative overflow-hidden bg-bg-darker">
        <BackgroundCarousel
          images={HERO_IMAGES}
          overlayClassName="bg-gradient-to-r from-bg-darker via-bg-darker/95 to-bg-darker/70"
        />
        <Container className="relative z-10 py-20 sm:py-28">
          <Reveal as="p" className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Portafolio de Servicios
          </Reveal>
          <Reveal as="h1" delay={100} className="max-w-3xl text-4xl font-extrabold uppercase leading-tight sm:text-6xl">
            Soluciones técnicas para equipo pesado
          </Reveal>
          <Reveal as="p" delay={200} className="mt-6 max-w-2xl text-text-muted">
            Servicios especializados de ingeniería automotriz para carga y transporte pesado:
            eliminación de sistemas de postratamiento, reprogramación de potencia, cumplimiento
            vial certificado y asistencia en ruta.
          </Reveal>
          <Reveal delay={300} className="mt-8 flex flex-wrap gap-4">
            <Button as={Link} to="/contacto">Agendar servicio</Button>
            <Button as={Link} to="/emergencia" variant="outline">Auxilio en ruta</Button>
          </Reveal>
        </Container>
      </section>

      {/* Listado de servicios (reutiliza la sección del Home) */}
      <Especializacion />

      {/* Matriz de compatibilidad */}
      <MatrizCompatibilidad />

      {/* CTA */}
      <section className="bg-brand-orange py-14">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <Reveal className="max-w-xl">
            <h2 className="text-3xl font-extrabold uppercase text-bg-darker sm:text-4xl">
              ¿Necesita optimizar sus unidades?
            </h2>
            <p className="mt-2 text-bg-darker/80">
              Contáctenos para un diagnóstico personalizado y una cotización de los servicios que su operación requiere.
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
