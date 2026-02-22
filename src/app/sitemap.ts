// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const dominioBase = 'https://elian.is-a.dev';

  return [
    {
      url: dominioBase,
      // lastModified asegura que Google sepa que el contenido está actualizado hoy
      lastModified: new Date(),
      // changeFrequency le dice a los bots qué tan seguido deben volver a revisar tu sitio
      changeFrequency: 'monthly',
      // priority 1.0 le indica que es la URL más crítica de tu ecosistema
      priority: 1.0,
    },
    // Si en el futuro agregas rutas separadas (ej. /proyectos/study), las añadirías a este arreglo:
    /*
    {
      url: `${dominioBase}/proyectos/study`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    }
    */
  ];
}