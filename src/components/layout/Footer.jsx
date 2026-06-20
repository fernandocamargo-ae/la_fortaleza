import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { FOOTER_LINKS, CONTACT_INFO } from '../../utils/constants';

const iconProps = {
  className: 'mt-0.5 h-5 w-5 shrink-0 text-brand-orange',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

function PinIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 1-2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

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
                <Link to={l.path} className="text-sm text-text-primary transition-colors hover:text-brand-orange">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-muted">Ubicación &amp; Contacto</p>
          <address className="space-y-4 not-italic">
            <div className="flex items-start gap-3">
              <PinIcon />
              <p className="text-sm leading-relaxed text-text-muted">{CONTACT_INFO.address}</p>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon />
              <div className="space-y-1 text-sm">
                {CONTACT_INFO.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="block text-text-primary transition-colors hover:text-brand-orange"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MailIcon />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="break-all text-sm text-text-primary transition-colors hover:text-brand-orange"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </address>
        </div>
      </Container>
    </footer>
  );
}
