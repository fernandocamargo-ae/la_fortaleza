import { useEffect, useState } from 'react';
import useInView from '../../hooks/useInView';

const DURATION = 650;

/**
 * Subtle scroll-reveal wrapper: fades and lifts its children into place the
 * first time they enter the viewport. Uses inline styles so the effect always
 * applies. Once the reveal finishes it releases the inline styles so hover
 * transforms on the same element keep working. Disabled under reduced motion.
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, y = 28, className = '' }) {
  const [ref, inView] = useInView();
  const [reduced, setReduced] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!inView) return undefined;
    const t = setTimeout(() => setDone(true), DURATION + delay + 80);
    return () => clearTimeout(t);
  }, [inView, delay]);

  // After the reveal completes (or under reduced motion) drop inline styles so
  // hover transforms on this element are no longer overridden.
  const animating = !reduced && !done;
  const style = animating
    ? {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity ${DURATION}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${DURATION}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }
    : undefined;

  return (
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
}
