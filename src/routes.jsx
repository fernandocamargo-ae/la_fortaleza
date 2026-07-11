import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Motores from './pages/Motores';
import Repuestos from './pages/Repuestos';
import Flotillas from './pages/Flotillas';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Emergencia from './pages/Emergencia';
import Terminos from './pages/Terminos';
import Privacidad from './pages/Privacidad';
import NotFound from './pages/NotFound';
import ServicePage from './pages/ServicePage';
import { SERVICE_PAGES } from './data/servicePages';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        {SERVICE_PAGES.map((s) => (
          <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage slug={s.slug} />} />
        ))}
        <Route path="/motores" element={<Motores />} />
        <Route path="/repuestos" element={<Repuestos />} />
        <Route path="/flotillas" element={<Flotillas />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/emergencia" element={<Emergencia />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
