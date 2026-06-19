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
  { brand: 'CUMMINS', models: 'ISX, ISM, ISL, ISB, QSK', postTreatment: 'DISPONIBLE', chiptuning: 'DISPONIBLE', status: 'CERTIFICADO' },
  { brand: 'CATERPILLAR', models: 'C12, C13, C15 ACERT, 3406E', postTreatment: 'DISPONIBLE', chiptuning: 'DISPONIBLE', status: 'CERTIFICADO' },
  { brand: 'DETROIT DIESEL', models: 'DD13, DD15, SERIES 60', postTreatment: 'DISPONIBLE', chiptuning: 'DISPONIBLE', status: 'CERTIFICADO' },
  { brand: 'VOLVO / MACK', models: 'D11, D13, D16, MP7, MP8', postTreatment: 'DISPONIBLE', chiptuning: 'DISPONIBLE', status: 'CERTIFICADO' },
  { brand: 'HINO / ISUZU', models: 'J08, N04, 4HK1, 6HK1', postTreatment: 'DISPONIBLE', chiptuning: 'DISPONIBLE', status: 'CERTIFICADO' },
];

export const FOOTER_LINKS = [
  { label: 'Certificación PROVIAL', path: '/servicios' },
  { label: 'Términos de Servicio', path: '/terminos' },
  { label: 'Política de Privacidad', path: '/privacidad' },
  { label: 'Soporte Técnico', path: '/contacto' },
  { label: 'Contacto', path: '/contacto' },
];

export const CONTACT_INFO = {
  address: 'Zona Industrial, Ciudad de Guatemala, GT.',
  phone: '+502 2000-0000',
  email: 'info@lafortaleza.com.gt',
};
