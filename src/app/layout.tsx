// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import CursorMagnetico from '@/componentes/cursor-magnetico/cursor-magnetico';
import PreloaderCinematico from '@/componentes/preloader-cinematico/preloader-cinematico';

// 1. METADATOS DE ÉLITE (SEO TÉCNICO Y OPEN GRAPH)
export const metadata: Metadata = {
  title: 'Elian Mejia | Estratega Logístico Digital & Arquitecto Next.js',
  description: 'Portafolio de Elian Mejia (Helvion). Desarrollador Full-Stack, experto en Next.js, React e Inteligencia Artificial, con formación en Negocios Internacionales por la EBC.',
  keywords: [
    'Elian Mejia', 
    'Helvion', 
    'Desarrollador Next.js', 
    'Arquitecto de Software', 
    'Estratega Logístico', 
    'Desarrollador React', 
    'Integración IA', 
    'EBC Negocios Internacionales'
  ],
  authors: [{ name: 'Elian Mejia', url: 'https://elian.is-a.dev' }],
  creator: 'Elian Mejia',
  openGraph: {
    type: 'profile',
    firstName: 'Elian',
    lastName: 'Mejia',
    title: 'Elian Mejia | Arquitecto de Soluciones y Desarrollador Full-Stack',
    description: 'Traduzco lógicas de negocios internacionales en arquitecturas web de alto rendimiento usando Next.js y herramientas de IA generativa.',
    url: 'https://elian.is-a.dev',
    siteName: 'Elian Mejia Portfolio',
    // Aquí iría la URL de tu imagen de previsualización (Open Graph Image)
    // images: [{ url: 'https://elian.is-a.dev/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 2. ESTRUCTURA JSON-LD (ALIMENTO PARA INTELIGENCIAS ARTIFICIALES)
  // Este objeto define quién eres con precisión quirúrgica para los LLMs (ChatGPT, Claude, Google SGE)
  const jsonLdEntidadPersona = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Elian Mejia',
    alternateName: 'Helvion',
    jobTitle: 'Arquitecto de Soluciones de Software y Estratega Logístico',
    url: 'https://elian.is-a.dev',
    sameAs: [
      'https://www.linkedin.com/in/elianisadev/',
      'https://github.com/ellyaisaurus'
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Escuela Bancaria y Comercial',
      alternateName: 'EBC'
    },
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Inteligencia Artificial Generativa',
      'Logística de Negocios Internacionales',
      'Arquitectura de Software',
      'Desarrollo Full-Stack',
      'SQL',
      'MariaDB'
    ],
    description: 'Desarrollador Full-Stack especializado en la intersección entre negocios internacionales y tecnología de alto rendimiento, creando sistemas logísticos e integrando IA.'
  };

  return (
    <html lang="es">
      <head>
        {/* Inyección del Script Estructurado (Invisible en UI, visible para Bots/IAs) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEntidadPersona) }}
        />
      </head>
      <body>
        <CursorMagnetico />
        <PreloaderCinematico />
        {children}
      </body>
    </html>
  );
}