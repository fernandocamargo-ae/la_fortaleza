import Seo from '../components/seo/Seo';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Reveal from '../components/ui/Reveal';
import Watermark from '../components/ui/Watermark';
import VideoCard from '../components/videos/VideoCard';
import { VIDEOS } from '../data/videos';

export default function Videos() {
  return (
    <>
      <Seo
        title="Videos de nuestros servicios"
        path="/videos"
        description="Videos reales de nuestros trabajos: reprogramación de ECU, diagnóstico computarizado y servicio técnico para transporte y carga pesada en Guatemala."
      />

      <Section className="relative overflow-hidden bg-bg-darker">
        <Watermark />
        <Container className="relative">
          <Reveal as="p" className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Galería
          </Reveal>
          <Reveal as="h1" delay={100} className="max-w-3xl text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
            Videos de nuestros servicios
          </Reveal>
          <Reveal as="p" delay={200} className="mt-6 max-w-2xl text-text-muted">
            Conozca de cerca nuestro trabajo: diagnóstico, reprogramación de potencia y el equipo detrás de cada servicio.
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-bg-dark">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((video, i) => (
              <Reveal key={video.slug} delay={i * 80} className="h-full">
                <VideoCard {...video} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
