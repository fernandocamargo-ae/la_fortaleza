import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/globals.css';

// Coincide con la `base` de Vite: '/' en dev, '/lfortaleza' en producción.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
