import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function CTABanner() {
  return (
    <section className="bg-brand-orange py-14">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold uppercase text-bg-darker sm:text-4xl">
            ¿Listo para potenciar su flota?
          </h2>
          <p className="mt-2 text-bg-darker/80">
            Contacte hoy mismo con un experto y obtenga un diagnóstico personalizado de sus unidades.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button as={Link} to="/contacto" className="bg-bg-darker text-brand-orange hover:bg-black">
            Hablar con ingeniería
          </Button>
          <Button as={Link} to="/servicios" variant="outline" className="border-bg-darker text-bg-darker hover:border-bg-darker hover:text-black">
            Descargar tarifario
          </Button>
        </div>
      </Container>
    </section>
  );
}
