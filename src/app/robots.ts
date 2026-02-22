// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const dominioBase = 'https://elian.is-a.dev';

  return {
    rules: {
      // El asterisco permite el acceso a todos los motores (Google, Bing, ChatGPT, Claude)
      userAgent: '*',
      allow: '/',
      // Aquí podrías bloquear rutas en el futuro si tuvieras un panel de administración
      disallow: ['/privado/', '/api/'],
    },
    sitemap: `${dominioBase}/sitemap.xml`,
  };
}