import Container from '../ui/Container';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import { COMPAT_MATRIX } from '../../utils/constants';

const HEADERS = ['Marca del Motor', 'Sistemas Soportados', 'Aplicación Sugerida en Web'];

export default function MatrizCompatibilidad() {
  return (
    <Section className="bg-bg-darker">
      <Container>
        <Reveal as="h2" className="text-3xl font-extrabold uppercase sm:text-4xl">Matriz de Compatibilidad</Reveal>
        <Reveal as="p" delay={80} className="mt-2 text-sm text-text-muted">Sistemas y marcas compatibles para optimización de software.</Reveal>
        <Reveal className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-text-muted">
                {HEADERS.map((h) => (
                  <th key={h} className="py-3 pr-4 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPAT_MATRIX.map((row) => (
                <tr key={row.brand} className="border-b border-white/5 transition-colors duration-200 hover:bg-white/5">
                  <td className="py-4 pr-4 font-bold">{row.brand}</td>
                  <td className="py-4 pr-4 font-semibold text-brand-orange">{row.systems}</td>
                  <td className="py-4 pr-4 text-text-muted">{row.application}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="mt-4 text-xs text-text-muted">
          * Para otras marcas y modelos, consulte con nuestro departamento de ingeniería técnica.
        </p>
      </Container>
    </Section>
  );
}
