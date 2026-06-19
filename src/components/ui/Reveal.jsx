import useInView from '../../hooks/useInView';

/**
 * Subtle scroll-reveal wrapper: fades and lifts its children into place the
 * first time they enter the viewport. Honors prefers-reduced-motion via the
 * `motion-safe`/`motion-reduce` variants (reduced-motion users see content
 * immediately, no transform).
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }) {
  const [ref, inView] = useInView();

  const state = inView
    ? 'motion-safe:opacity-100 motion-safe:translate-y-0'
    : 'motion-safe:opacity-0 motion-safe:translate-y-6';

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${state} ${className}`}
    >
      {children}
    </Tag>
  );
}
