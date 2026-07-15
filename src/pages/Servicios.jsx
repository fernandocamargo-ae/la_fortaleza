import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import BackgroundCarousel from '../components/ui/BackgroundCarousel';
import Section from '../components/ui/Section';
import Watermark from '../components/ui/Watermark';
import Especializacion from '../components/home/Especializacion';
import MatrizCompatibilidad from '../components/home/MatrizCompatibilidad';
import PhotoGallery from '../components/gallery/PhotoGallery';
import servicios1 from '../assets/images/servicios1.png';
import servicios2 from '../assets/images/servicios2.png';
import servicios3 from '../assets/images/servicios3.png';

const HERO_IMAGES = [servicios1, servicios2, servicios3];

export default function Servicios() {
  return (
    <>
      <Seo
        title="Servicios: eliminación de EGR, DPF y DEF, chiptuning y PROVIAL"
        path="/servicios"
        description="Portafolio de servicios para equipo pesado: eliminación de sistemas de postratamiento (EGR, DPF, DEF), aumento de potencia (chiptuning / reprogramación), certificado de limitador de velocidad PROVIAL, auxilio en ruta y reducción de consumo de combustible."
      />
      {/* Encabezado */}
      <section className="relative overflow-hidden bg-bg-darker">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-darker via-bg-darker to-bg-dark" aria-hidden />
        <Watermark />
        <Container className="relative z-10 grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
          {/* Texto */}
          <div>
            <Reveal as="p" className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Portafolio de Servicios
            </Reveal>
            <Reveal as="h1" delay={100} className="max-w-2xl text-4xl font-extrabold uppercase leading-tight sm:text-6xl">
              Soluciones técnicas para equipo pesado
            </Reveal>
            <Reveal as="p" delay={200} className="mt-6 max-w-xl text-text-muted">
              Servicios especializados de ingeniería automotriz para carga y transporte pesado:
              eliminación de sistemas de postratamiento, reprogramación de potencia, cumplimiento
              vial certificado y asistencia en ruta.
            </Reveal>
            <Reveal delay={300} className="mt-8 flex flex-wrap gap-4">
              <Button as={Link} to="/contacto">Agendar servicio</Button>
              <Button as={Link} to="/emergencia" variant="outline">Auxilio en ruta</Button>
            </Reveal>
          </div>

          {/* Carrusel enmarcado */}
          <Reveal delay={200} className="flex justify-center lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl shadow-black/60 ring-1 ring-subtle/10">
              <BackgroundCarousel
                images={HERO_IMAGES}
                interval={4000}
                showDots
                overlayClassName="bg-gradient-to-t from-black/40 via-transparent to-transparent"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Listado de servicios (reutiliza la sección del Home) */}
      <Especializacion />

      {/* Matriz de compatibilidad */}
      <MatrizCompatibilidad />

      {/* Galería de trabajos realizados */}
      <Section className="bg-bg-dark">
        <Container>
          <Reveal as="h2" className="text-3xl font-extrabold uppercase sm:text-4xl">Galería de Trabajos</Reveal>
          <Reveal as="p" delay={80} className="mt-2 text-sm text-text-muted">
            Fotos reales de diagnósticos, reprogramaciones y servicio en unidades de nuestros clientes.
          </Reveal>
          <div className="mt-8">
            <PhotoGallery />
          </div>
        </Container>
      </Section>

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
