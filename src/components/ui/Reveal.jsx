import { useEffect, useState } from 'react';
import useInView from '../../hooks/useInView';

const DURATION = 650;

/**
 * Scroll-reveal wrapper: fades and lifts its children into place whenever they
 * enter the viewport, and re-hides them when they leave, so the animation
 * replays on every scroll pass. Disabled when the user prefers reduced motion.
 *
 * NOTE: this drives `transform` via inline styles, so do NOT put a hover
 * transform (e.g. hover:-translate-y-1) on the SAME element — wrap the
 * hover target as a child instead.
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, y = 28, className = '' }) {
  const [ref, inView] = useInView();
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const style = reduced
    ? undefined
    : {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity ${DURATION}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${DURATION}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      };

  return (
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
}
