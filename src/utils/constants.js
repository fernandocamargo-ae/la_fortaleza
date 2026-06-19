export const NAV_ITEMS = [
  { label: 'Servicios', path: '/servicios' },
  { label: 'Motores', path: '/motores' },
  { label: 'Repuestos', path: '/repuestos' },
  { label: 'Flotillas', path: '/flotillas' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Contacto', path: '/contacto' },
];

export const EMERGENCY_ITEM = { label: 'Asistencia de Emergencia', path: '/emergencia' };

export const SPECIALIZATION = [
  {
    title: 'Eliminación de Sistemas de Postratamiento',
    description:
      'Optimización integral de software para suprimir sistemas DPF, SCR y EGR. Reduce costos de mantenimiento y tiempos de inactividad por fallos de regeneración.',
    tags: ['Desactivación DPF/DEF', 'Eliminación bloqueo EGR', 'Software OEM certificado'],
  },
  {
    title: 'Aumento de Potencia (Chiptuning)',
    description:
      'Maximizamos el torque y los HP de su motor sin comprometer la integridad estructural. Ganancias de hasta un 25% en eficiencia dinámica.',
  },
  {
    title: 'Certificado de Limitador (PROVIAL)',
    description:
      'Instalación y calibración de limitadores de velocidad a 80km/h bajo la normativa técnica PROVIAL. Entrega de certificación inmediata para cumplimiento legal.',
  },
  {
    title: 'Auxilio en Ruta 24/7',
    description:
      'Diagnóstico computarizado y reparaciones mecánicas in-situ. Cobertura nacional para flota pesada.',
  },
];

export const COMPAT_MATRIX = [
  { brand: 'Caterpillar (CAT)', systems: 'EGR, DPF, DEF, Potencia', application: 'Pesado / Maquinaria industrial' },
  { brand: 'Cummins', systems: 'EGR, DPF, DEF, Potencia', application: 'Comercial / Carga Pesada' },
  { brand: 'Volvo / Detroit', systems: 'EGR, DPF, DEF, Potencia', application: 'Transporte de larga distancia' },
  { brand: 'MaxxForce', systems: 'EGR, DPF, DEF, Potencia', application: 'Camiones medianos y pesados' },
  { brand: 'Hino / Mitsubishi / Isuzu', systems: 'EGR, DPF, DEF, Potencia', application: 'Comercial ligero y urbano' },
];

export const FOOTER_LINKS = [
  { label: 'Certificación PROVIAL', path: '/servicios' },
  { label: 'Términos de Servicio', path: '/terminos' },
  { label: 'Política de Privacidad', path: '/privacidad' },
  { label: 'Soporte Técnico', path: '/contacto' },
  { label: 'Contacto', path: '/contacto' },
];

export const CONTACT_INFO = {
  address: '4.ª Avenida, Lote 359, Colonia Sebastopol, Zona 3, Escuintla, Guatemala',
  phone: '+502 40665192 / +502 31663239',
  email: 'Lforta001@gmail.com',
};
