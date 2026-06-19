import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { FOOTER_LINKS, CONTACT_INFO } from '../../utils/constants';

export default function Footer() {
  return (
    <footer className="border-t-2 border-brand-orange bg-bg-darker">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="text-xl font-extrabold text-brand-orange">LA FORTALEZA</p>
          <p className="mt-3 text-sm text-text-muted">
            © 2026 Servicios y Ventas La Fortaleza. Expertos en Potencia Pesada.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-muted">Enlaces directos</p>
          <ul className="space-y-2">
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.path} className="text-sm text-text-primary hover:text-brand-orange">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-muted">Ubicación</p>
          <address className="space-y-2 text-sm not-italic text-text-primary">
            <p>{CONTACT_INFO.address}</p>
            <p>{CONTACT_INFO.phone}</p>
            <p>{CONTACT_INFO.email}</p>
          </address>
        </div>
      </Container>
    </footer>
  );
}
