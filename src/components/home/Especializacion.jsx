import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { SPECIALIZATION } from '../../utils/constants';

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
        <h2 className="mb-12 text-center text-3xl font-extrabold uppercase sm:text-4xl">
          {title}
        </h2>

        {compact ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article key={item.title} className="border-t-2 border-brand-orange bg-surface p-6">
                <h3 className="text-base font-bold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{item.summary ?? item.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <article key={item.title} className="border border-white/10 bg-surface p-6">
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
              </article>
            ))}
          </div>
        )}

        {ctaTo && (
          <div className="mt-10 text-center">
            <Button as={Link} to={ctaTo}>{ctaLabel}</Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
