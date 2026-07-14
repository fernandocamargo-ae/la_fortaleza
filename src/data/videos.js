import video1 from '../assets/videos/video-1.mp4';
import video1Poster from '../assets/videos/video-1-poster.jpg';
import video2 from '../assets/videos/video-2.mp4';
import video2Poster from '../assets/videos/video-2-poster.jpg';
import video3 from '../assets/videos/video-3.mp4';
import video3Poster from '../assets/videos/video-3-poster.jpg';
import video4 from '../assets/videos/video-4.mp4';
import video4Poster from '../assets/videos/video-4-poster.jpg';

// Galería de videos del taller. Los títulos/descripciones se pueden ajustar
// libremente; el nombre de archivo no necesita coincidir con el contenido.
export const VIDEOS = [
  {
    slug: 'reprogramacion-ecu-taller',
    title: 'Reprogramación de ECU en taller',
    description: 'Proceso de reprogramación de la unidad de control electrónico (ECU) para optimizar el rendimiento del motor.',
    src: video1,
    poster: video1Poster,
  },
  {
    slug: 'diagnostico-calibracion-modulo',
    title: 'Diagnóstico y calibración de módulo electrónico',
    description: 'Diagnóstico y calibración de un módulo de control electrónico previo a la reprogramación de potencia.',
    src: video2,
    poster: video2Poster,
  },
  {
    slug: 'diagnostico-computarizado-unidad',
    title: 'Diagnóstico computarizado en unidad',
    description: 'Diagnóstico computarizado en sitio, revisando parámetros del motor en tiempo real.',
    src: video3,
    poster: video3Poster,
  },
  {
    slug: 'conoce-a-nuestro-equipo',
    title: 'Conoce a nuestro equipo',
    description: 'Nuestro equipo técnico explicando el trabajo realizado en una de las unidades atendidas.',
    src: video4,
    poster: video4Poster,
  },
];
