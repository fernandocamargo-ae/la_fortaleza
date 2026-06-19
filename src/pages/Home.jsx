import Hero from '../components/home/Hero';
import Especializacion from '../components/home/Especializacion';
import CTABanner from '../components/home/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Especializacion compact title="Nuestros Servicios" ctaTo="/servicios" />
      <CTABanner />
    </>
  );
}
