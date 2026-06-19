import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Motores from './pages/Motores';
import Repuestos from './pages/Repuestos';
import Flotillas from './pages/Flotillas';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Emergencia from './pages/Emergencia';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/motores" element={<Motores />} />
      <Route path="/repuestos" element={<Repuestos />} />
      <Route path="/flotillas" element={<Flotillas />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/emergencia" element={<Emergencia />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
