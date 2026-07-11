// Dominio canónico del sitio en producción (sin barra final). Se usa para
// canonical URLs, Open Graph y el sitemap.
export const SITE_URL = 'https://lafortalezagt.com';

// Motores, Repuestos y Flotillas quedan fuera del menú por ahora; sus páginas y
// rutas siguen en el código (src/pages, src/routes.jsx) para reactivarlas cuando
// haya requerimiento.
export const NAV_ITEMS = [
  { label: 'Servicios', path: '/servicios' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Contacto', path: '/contacto' },
];

export const EMERGENCY_ITEM = { label: 'Asistencia de Emergencia', path: '/emergencia' };

export const SPECIALIZATION = [
  {
    slug: 'eliminacion-egr-dpf-def',
    title: 'Eliminación de Sistemas de Postratamiento (EGR, DPF y DEF)',
    summary: 'Desactivación de EGR, DPF y DEF para eliminar fallas crónicas y recuperar potencia.',
    description:
      'Desactivación y optimización de sistemas de recirculación de gases y reducción catalítica para evitar fallas crónicas, pérdidas de potencia y costosos tiempos de inactividad. Solución especializada para motores multimarca.',
    tags: ['CAT · Cummins · Volvo · Detroit', 'Maxxforce · Hino', 'Mitsubishi · Isuzu y más'],
  },
  {
    slug: 'reprogramacion-potencia',
    title: 'Aumento de Potencia (Chiptuning / Reprogramación)',
    summary: 'Reprogramación que incrementa torque y HP para cargas y terrenos exigentes.',
    description:
      'Ajuste electrónico de los parámetros del motor para incrementar el torque y los caballos de fuerza (HP), permitiendo que los vehículos enfrenten altas cargas y terrenos difíciles con mayor facilidad.',
  },
  {
    slug: 'certificado-provial',
    title: 'Certificado de Limitador de Velocidad a 80km/h (PROVIAL)',
    summary: 'Calibración y certificación oficial del limitador a 80 km/h, avalada por PROVIAL.',
    description:
      'Instalación, calibración y emisión de la certificación oficial del gobernador o limitador de velocidad, garantizando el cumplimiento estricto de las normativas viales vigentes.',
  },
  {
    slug: 'auxilio-en-ruta',
    title: 'Auxilio en Ruta',
    summary: 'Asistencia mecánica de emergencia y diagnóstico en el lugar de la falla.',
    description:
      'Servicio de asistencia mecánica de emergencia y diagnóstico computarizado directamente en el lugar de la falla, minimizando los tiempos muertos del transporte en las principales carreteras.',
  },
  {
    slug: 'reduccion-consumo-combustible',
    title: 'Reducción de Consumo de Combustible',
    summary: 'Gestión optimizada del motor para ahorrar combustible por kilómetro recorrido.',
    description:
      'Optimización de la gestión del motor para lograr una combustión más eficiente, traduciéndose en un ahorro significativo en los costos operativos por kilómetro recorrido.',
  },
];

export const ABOUT = {
  origin: [
    'Servicios y Ventas La Fortaleza nace de una necesidad crítica identificada en el departamento: la urgencia de optimizar el rendimiento de los vehículos de carga y transporte pesado. Las altas exigencias operativas y las grandes cargas a las que se someten estos vehículos demandan una potencia superior y una reducción de fallas mecánicas costosas.',
    'Ante la recurrencia de problemas técnicos relacionados con los sistemas de control de emisiones en la región, la empresa se fundó para ofrecer una solución definitiva mediante la eliminación especializada de sistemas de postratamiento y la reprogramación de potencia, permitiendo a los transportistas mantener la rentabilidad y continuidad de sus operaciones.',
  ],
  mission:
    'Optimizar el rendimiento, la eficiencia y la seguridad de los vehículos de transporte y carga pesada a través de soluciones técnicas avanzadas y certificadas. En Servicios y Ventas La Fortaleza nos comprometemos a brindar un soporte integral en ruta y un servicio de ingeniería automotriz de la más alta calidad, garantizando la continuidad operativa y la rentabilidad de nuestros clientes.',
  vision:
    'Ser la empresa líder a nivel regional en optimización de motores y soluciones de cumplimiento vial para el transporte pesado, reconocidos por nuestra excelencia técnica, capacidad de respuesta inmediata y por ser el aliado estratégico de confianza para flotas y transportistas individuales.',
};

export const COMPAT_MATRIX = [
  { brand: 'Caterpillar (CAT)', systems: 'EGR, DPF, DEF, Potencia', application: 'Pesado / Maquinaria industrial' },
  { brand: 'Cummins', systems: 'EGR, DPF, DEF, Potencia', application: 'Comercial / Carga Pesada' },
  { brand: 'Volvo / Detroit', systems: 'EGR, DPF, DEF, Potencia', application: 'Transporte de larga distancia' },
  { brand: 'MaxxForce', systems: 'EGR, DPF, DEF, Potencia', application: 'Camiones medianos y pesados' },
  { brand: 'Hino / Mitsubishi / Isuzu', systems: 'EGR, DPF, DEF, Potencia', application: 'Comercial ligero y urbano' },
];

export const FOOTER_LINKS = [
  { label: 'Servicios', path: '/servicios' },
];

export const CONTACT_INFO = {
  address: '4.ª Avenida, Lote 359, Colonia Sebastopol, Zona 3, Escuintla, Guatemala',
  phones: ['+502 4066 5192', '+502 3166 3239'],
  email: 'Lforta001@gmail.com',
};

export const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/lafortaleza74/',
  },
];
