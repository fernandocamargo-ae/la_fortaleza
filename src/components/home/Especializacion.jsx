import Container from '../ui/Container';
import Section from '../ui/Section';
import { SPECIALIZATION } from '../../utils/constants';

export default function Especializacion() {
  return (
    <Section className="bg-bg-dark">
      <Container>
        <h2 className="mb-12 text-center text-3xl font-extrabold uppercase sm:text-4xl">
          Nuestra Especialización
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {SPECIALIZATION.map((item) => (
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
      </Container>
    </Section>
  );
}
