import { SITE_URL, CONTACT_INFO, SOCIAL_LINKS } from '../../utils/constants';

/**
 * JSON-LD structured data describing the business (helps local SEO / rich
 * results in Google). Rendered once site-wide via MainLayout.
 */
export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Servicios y Ventas La Fortaleza',
    description:
      'Especialistas en eliminación de sistemas de postratamiento (EGR, DPF y DEF), reprogramación de potencia, certificado de limitador PROVIAL y auxilio en ruta para transporte y carga pesada.',
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: CONTACT_INFO.phones[0].replace(/\s+/g, ''),
    email: CONTACT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4.ª Avenida, Lote 359, Colonia Sebastopol, Zona 3',
      addressLocality: 'Escuintla',
      addressCountry: 'GT',
    },
    areaServed: 'Guatemala',
    sameAs: SOCIAL_LINKS.map((s) => s.href),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
