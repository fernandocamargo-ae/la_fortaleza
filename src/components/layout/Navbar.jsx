import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../ui/Container';
import useScrollHeader from '../../hooks/useScrollHeader';
import { NAV_ITEMS, EMERGENCY_ITEM } from '../../utils/constants';
import logo from '../../assets/images/logo.jpg';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollHeader();

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-brand-orange' : 'text-text-primary hover:text-brand-orange'}`;

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 transition-colors ${scrolled ? 'bg-bg-darker/95 backdrop-blur' : 'bg-bg-darker'}`}>
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="La Fortaleza" className="h-9 w-9 rounded object-cover" />
          <span className="text-lg font-extrabold leading-none">LA<br className="hidden sm:block" />FORTALEZA</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>{item.label}</NavLink>
          ))}
          <Link to={EMERGENCY_ITEM.path} className="bg-brand-orange px-4 py-2 text-xs font-semibold uppercase tracking-wide text-bg-darker hover:bg-brand-orange/90">
            {EMERGENCY_ITEM.label}
          </Link>
        </nav>

        <button type="button" className="lg:hidden" aria-label="Abrir menú" onClick={() => setOpen((v) => !v)}>
          <span className="block h-0.5 w-6 bg-text-primary" />
          <span className="mt-1.5 block h-0.5 w-6 bg-text-primary" />
          <span className="mt-1.5 block h-0.5 w-6 bg-text-primary" />
        </button>
      </Container>

      {open && (
        <nav className="border-t border-white/10 bg-bg-darker lg:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link to={EMERGENCY_ITEM.path} onClick={() => setOpen(false)} className="bg-brand-orange px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-bg-darker">
              {EMERGENCY_ITEM.label}
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
