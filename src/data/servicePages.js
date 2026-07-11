// Contenido de las páginas de servicio (landing por palabra clave).
// Cada slug es una URL indexable: https://lafortalezagt.com/<slug>
export const SERVICE_PAGES = [
  {
    slug: 'eliminacion-egr-dpf-def',
    eyebrow: 'Sistemas de postratamiento',
    title: 'Eliminación de EGR, DPF y DEF',
    seoTitle: 'Eliminación de EGR, DPF y DEF para camiones en Guatemala',
    seoDescription:
      'Desactivación y optimización de sistemas EGR, DPF y DEF para eliminar fallas crónicas, recuperar potencia y reducir costos. Solución multimarca para transporte pesado en Guatemala.',
    intro:
      'Desactivamos y optimizamos los sistemas de recirculación de gases (EGR) y de postratamiento (DPF y DEF) que generan fallas crónicas, pérdidas de potencia y costosos tiempos de inactividad en su unidad.',
    benefits: [
      { title: 'Menos fallas y paros', text: 'Elimina los ciclos de regeneración fallidos y los códigos que dejan su unidad varada en carretera.' },
      { title: 'Recupera potencia', text: 'El motor respira mejor: mejor respuesta, torque y rendimiento en cargas y pendientes exigentes.' },
      { title: 'Menores costos', text: 'Sin reemplazos costosos de DPF/DEF ni consumo continuo de aditivo (DEF/AdBlue).' },
      { title: 'Solución multimarca', text: 'Trabajamos las principales marcas de motor diésel del transporte pesado.' },
    ],
    details: [
      'Cada unidad recibe un diagnóstico computarizado previo para identificar el estado real del motor y sus sistemas de emisiones. A partir de ahí aplicamos una calibración de software especializada, sin improvisar.',
      'El resultado es una unidad más confiable y rentable, con menos visitas al taller por fallas de regeneración y una operación continua para el transportista.',
    ],
    brands: ['CAT', 'Cummins', 'Volvo', 'Detroit', 'Maxxforce', 'Hino', 'Mitsubishi', 'Isuzu'],
  },
  {
    slug: 'reprogramacion-potencia',
    eyebrow: 'Chiptuning / Reprogramación',
    title: 'Aumento de potencia (Chiptuning)',
    seoTitle: 'Chiptuning y reprogramación de potencia para camiones',
    seoDescription:
      'Reprogramación electrónica del motor para aumentar torque y caballos de fuerza (HP) en camiones y transporte pesado, sin comprometer la integridad del motor. Guatemala.',
    intro:
      'Ajustamos electrónicamente los parámetros del motor para incrementar el torque y los caballos de fuerza (HP), permitiendo que su unidad enfrente altas cargas y terrenos difíciles con mayor facilidad.',
    benefits: [
      { title: 'Más torque y HP', text: 'Ganancias reales de potencia para arrancar con carga y subir pendientes sin esfuerzo.' },
      { title: 'Mejor manejo', text: 'Respuesta más ágil del acelerador y conducción más cómoda en ruta.' },
      { title: 'Calibración responsable', text: 'Ajustes dentro de los márgenes seguros del motor para cuidar su vida útil.' },
    ],
    details: [
      'La reprogramación se realiza a la medida de cada motor y de la operación del cliente (carga, rutas, tipo de camino). No usamos archivos genéricos que arriesguen la mecánica.',
      'Combinada con la eliminación de sistemas de postratamiento, la reprogramación maximiza el rendimiento y la eficiencia de la unidad.',
    ],
  },
  {
    slug: 'certificado-provial',
    eyebrow: 'Cumplimiento vial',
    title: 'Certificado de limitador de velocidad (PROVIAL)',
    seoTitle: 'Certificado de limitador de velocidad 80 km/h — PROVIAL',
    seoDescription:
      'Instalación, calibración y emisión del certificado oficial del limitador de velocidad a 80 km/h, avalado por PROVIAL. Cumplimiento de la normativa vial para transporte pesado en Guatemala.',
    intro:
      'Instalamos, calibramos y emitimos la certificación oficial del gobernador o limitador de velocidad a 80 km/h, garantizando el cumplimiento estricto de la normativa vial vigente.',
    benefits: [
      { title: 'Certificación oficial', text: 'Documento avalado por PROVIAL, listo para su trámite y fiscalización.' },
      { title: 'Calibración precisa', text: 'Ajuste del limitador a la velocidad reglamentaria de 80 km/h.' },
      { title: 'Entrega ágil', text: 'Proceso claro y rápido para no detener su operación.' },
    ],
    details: [
      'El cumplimiento del limitador de velocidad es un requisito para el transporte de carga pesada. Nos encargamos de todo el proceso técnico y documental para que su unidad quede en regla.',
    ],
  },
  {
    slug: 'auxilio-en-ruta',
    eyebrow: 'Asistencia 24/7',
    title: 'Auxilio en ruta',
    seoTitle: 'Auxilio en ruta y diagnóstico para camiones en Guatemala',
    seoDescription:
      'Asistencia mecánica de emergencia y diagnóstico computarizado en el lugar de la falla para transporte pesado. Minimizamos los tiempos muertos en carretera. Guatemala.',
    intro:
      'Brindamos asistencia mecánica de emergencia y diagnóstico computarizado directamente en el lugar de la falla, minimizando los tiempos muertos de su transporte en las principales carreteras.',
    benefits: [
      { title: 'Respuesta en carretera', text: 'Atendemos la falla donde ocurre para que su unidad vuelva a rodar cuanto antes.' },
      { title: 'Diagnóstico en sitio', text: 'Equipo computarizado para identificar el problema con precisión.' },
      { title: 'Menos tiempo perdido', text: 'Reducimos las horas de paro que le cuestan a su operación.' },
    ],
    details: [
      'Cada hora que un camión está detenido es dinero perdido. Nuestro servicio de auxilio en ruta está pensado para devolver la unidad a la operación en el menor tiempo posible.',
    ],
  },
  {
    slug: 'reduccion-consumo-combustible',
    eyebrow: 'Eficiencia',
    title: 'Reducción de consumo de combustible',
    seoTitle: 'Reducción de consumo de combustible en camiones',
    seoDescription:
      'Optimización de la gestión del motor para una combustión más eficiente y ahorro real de combustible por kilómetro en transporte y carga pesada. Guatemala.',
    intro:
      'Optimizamos la gestión del motor para lograr una combustión más eficiente, lo que se traduce en un ahorro significativo en los costos operativos por kilómetro recorrido.',
    benefits: [
      { title: 'Ahorro por kilómetro', text: 'Mejor eficiencia de combustión = menos gasto de combustible en cada viaje.' },
      { title: 'Rentabilidad', text: 'El combustible es uno de los mayores costos del transporte; optimizarlo mejora el margen.' },
      { title: 'Motor sano', text: 'Una gestión afinada también favorece la vida útil del motor.' },
    ],
    details: [
      'El ahorro de combustible se logra con una calibración precisa de la gestión del motor, adaptada a la operación real de la unidad. Los resultados se notan directamente en los costos por kilómetro.',
    ],
  },
];

export const SERVICE_SLUGS = SERVICE_PAGES.map((s) => s.slug);
