import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { SPECIALIZATION } from '../../utils/constants';

// Envuelve el contenido de la tarjeta en un Link a su página de detalle cuando
// el servicio tiene `slug`; si no, en un <article> normal.
function Card({ item, className, children }) {
  if (item.slug) {
    return (
      <Link to={`/${item.slug}`} className={`block ${className}`}>
        {children}
        <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-brand-orange">
          Ver detalle →
        </span>
      </Link>
    );
  }
  return <article className={className}>{children}</article>;
}

export default function Especializacion({
  limit,
  compact = false,
  title = 'Nuestra Especialización',
  ctaTo,
  ctaLabel = 'Ver todos los servicios',
}) {
  const items = limit ? SPECIALIZATION.slice(0, limit) : SPECIALIZATION;

  return (
    <Section className="bg-bg-dark">
      <Container>
        <Reveal as="h2" className="mb-12 text-center text-3xl font-extrabold uppercase sm:text-4xl">
          {title}
        </Reveal>

        {compact ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="h-full">
                <Card
                  item={item}
                  className="h-full border-t-2 border-brand-orange bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:bg-surface/80 hover:shadow-lg hover:shadow-black/30"
                >
                  <h3 className="text-base font-bold leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{item.summary ?? item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="h-full">
                <Card
                  item={item}
                  className="h-full border border-white/10 bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-orange/60 hover:shadow-lg hover:shadow-black/30"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm text-text-muted">{item.description}</p>
                  {item.tags && (
                    <ul className="mt-4 space-y-1">
                      {item.tags.map((tag) => (
                        <li key={tag} className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
                          ✓ {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        )}

        {ctaTo && (
          <Reveal delay={120} className="mt-10 text-center">
            <Button as={Link} to={ctaTo}>{ctaLabel}</Button>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}
