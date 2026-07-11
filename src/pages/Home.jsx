import Seo from '../components/seo/Seo';
import Hero from '../components/home/Hero';
import Especializacion from '../components/home/Especializacion';
import CTABanner from '../components/home/CTABanner';

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        description="Diagnóstico especializado en camiones y transporte pesado en Guatemala: eliminación de sistemas de postratamiento (EGR, DPF y DEF), reprogramación de potencia y certificado de limitador PROVIAL. Cuida la economía de tu vehículo."
      />
      <Hero />
      <Especializacion compact title="Nuestros Servicios" ctaTo="/servicios" />
      <CTABanner />
    </>
  );
}
