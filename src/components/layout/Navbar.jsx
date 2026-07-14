import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../ui/Container';
import ThemeToggle from '../ui/ThemeToggle';
import useScrollHeader from '../../hooks/useScrollHeader';
import { NAV_ITEMS, EMERGENCY_ITEM } from '../../utils/constants';
import logo from '../../assets/images/logo.jpg';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollHeader();

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-brand-orange' : 'text-text-primary hover:text-brand-orange'}`;

  return (
    <header className="sticky top-3 z-50 px-3 sm:top-4 sm:px-4">
      <div
        className={`mx-auto max-w-[1400px] overflow-hidden border border-subtle/10 shadow-lg shadow-black/10 backdrop-blur-md transition-colors ${
          open ? 'rounded-3xl' : 'rounded-full'
        } ${scrolled || open ? 'bg-bg-darker/85' : 'bg-bg-darker/70'}`}
      >
        <Container className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <img src={logo} alt="La Fortaleza" className="h-9 w-9 rounded object-cover" />
            <span className="text-lg font-extrabold leading-none">LA<br className="hidden sm:block" />FORTALEZA</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass}>{item.label}</NavLink>
            ))}
            <ThemeToggle />
            <Link to={EMERGENCY_ITEM.path} className="bg-brand-orange px-4 py-2 text-xs font-semibold uppercase tracking-wide text-bg-darker hover:bg-brand-orange/90">
              {EMERGENCY_ITEM.label}
            </Link>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button type="button" aria-label="Abrir menú" onClick={() => setOpen((v) => !v)}>
              <span className="block h-0.5 w-6 bg-text-primary" />
              <span className="mt-1.5 block h-0.5 w-6 bg-text-primary" />
              <span className="mt-1.5 block h-0.5 w-6 bg-text-primary" />
            </button>
          </div>
        </Container>

        {open && (
          <nav className="border-t border-subtle/10 lg:hidden">
            <Container className="flex flex-col gap-4 py-4">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.path} to={item.path} className={linkClass} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
              <Link to={EMERGENCY_ITEM.path} onClick={() => setOpen(false)} className="bg-brand-orange px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-bg-darker hover:bg-brand-orange/90">
                {EMERGENCY_ITEM.label}
              </Link>
            </Container>
          </nav>
        )}
      </div>
    </header>
  );
}
