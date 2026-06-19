import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Especializacion from '../components/home/Especializacion';
import MatrizCompatibilidad from '../components/home/MatrizCompatibilidad';

export default function Servicios() {
  return (
    <>
      {/* Encabezado */}
      <section className="relative overflow-hidden bg-bg-darker">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-darker via-bg-darker/95 to-bg-dark" aria-hidden />
        <Container className="relative py-20 sm:py-28">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Portafolio de Servicios
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold uppercase leading-tight sm:text-6xl">
            Soluciones técnicas para equipo pesado
          </h1>
          <p className="mt-6 max-w-2xl text-text-muted">
            Servicios especializados de ingeniería automotriz para carga y transporte pesado:
            eliminación de sistemas de postratamiento, reprogramación de potencia, cumplimiento
            vial certificado y asistencia en ruta.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button as={Link} to="/contacto">Agendar servicio</Button>
            <Button as={Link} to="/emergencia" variant="outline">Auxilio en ruta</Button>
          </div>
        </Container>
      </section>

      {/* Listado de servicios (reutiliza la sección del Home) */}
      <Especializacion />

      {/* Matriz de compatibilidad */}
      <MatrizCompatibilidad />

      {/* CTA */}
      <section className="bg-brand-orange py-14">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold uppercase text-bg-darker sm:text-4xl">
              ¿Necesita optimizar su flota?
            </h2>
            <p className="mt-2 text-bg-darker/80">
              Contáctenos para un diagnóstico personalizado y una cotización de los servicios que su operación requiere.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button as={Link} to="/contacto" className="bg-bg-darker text-brand-orange hover:bg-black">
              Hablar con ingeniería
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
