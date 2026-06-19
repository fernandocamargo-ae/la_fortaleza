import Container from '../ui/Container';
import Section from '../ui/Section';
import { COMPAT_MATRIX } from '../../utils/constants';

const HEADERS = ['Marca de Motor', 'Modelos Soportados', 'Eliminación Post.', 'Chiptuning', 'Estado'];

export default function MatrizCompatibilidad() {
  return (
    <Section className="bg-bg-darker">
      <Container>
        <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">Matriz de Compatibilidad</h2>
        <p className="mt-2 text-sm text-text-muted">Sistemas y marcas compatibles para optimización de software.</p>
        <div className="mt-8 overflow-x-auto">
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
                <tr key={row.brand} className="border-b border-white/5">
                  <td className="py-4 pr-4 font-bold">{row.brand}</td>
                  <td className="py-4 pr-4 text-text-muted">{row.models}</td>
                  <td className="py-4 pr-4 font-semibold text-brand-orange">{row.postTreatment}</td>
                  <td className="py-4 pr-4 font-semibold text-brand-orange">{row.chiptuning}</td>
                  <td className="py-4 pr-4">
                    <span className="inline-block border border-green-500/40 px-2 py-1 text-xs font-semibold uppercase text-green-400">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-text-muted">
          * Para otras marcas y modelos, consulte con nuestro departamento de ingeniería técnica.
        </p>
      </Container>
    </Section>
  );
}
