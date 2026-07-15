import watermark from '../../assets/images/logo-watermark.png';

// Marca de agua decorativa: logo grande, difuminado y casi transparente,
// pensado para ir detrás del encabezado de cada página. El padre debe ser
// `relative overflow-hidden` para que se recorte correctamente.
export default function Watermark({ className = '', align = 'center' }) {
  const alignClass = align === 'top' ? 'top-16' : 'top-1/2 -translate-y-1/2';

  return (
    <img
      src={watermark}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 ${alignClass} w-[700px] max-w-none -translate-x-1/2 select-none opacity-[0.08] blur-[3px] sm:w-[950px] lg:w-[1200px] ${className}`}
    />
  );
}
