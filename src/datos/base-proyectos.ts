// src/datos/base-proyectos.ts

export interface DefinicionProyecto {
  id: string;
  nombre: string;
  tagline: string;
  descripcionLarga: string;
  impactoNegocio: string;
  ejecucionTecnica: string[];
  stack: string[];
  url: string; // Nueva propiedad obligatoria
}

export const diccionarioProyectos: Record<string, DefinicionProyecto> = {
  study: {
    id: 'study',
    nombre: 'Study EDU COUT',
    tagline: 'Logística Educativa y Certificaciones',
    descripcionLarga: 'Plataforma integral enfocada en la venta e impartición de cursos de inglés para la formación de habilidades profesionales y certificaciones de negocios.',
    impactoNegocio: 'Sistematización del flujo educativo, permitiendo una gestión automatizada de alumnos y docentes, reduciendo fricciones operativas y asegurando el control de métricas de aprendizaje.',
    ejecucionTecnica: [
      'Auditoría e implementación de indexación SEO estratégica.',
      'Desarrollo y optimización de arquitectura Frontend asimétrica.',
      'Criptografía y seguridad en protocolos de autenticación (Login).',
      'Ingeniería de roles (Alumno/Docente) con gestión de calificaciones, material y tareas.',
      'Integración con API de Zoom para aulas virtuales automatizadas.'
    ],
    stack: ['Next.js', 'Node.js', 'React', 'MariaDB', 'SQL'],
    url: 'https://studyeducout.org'
  },
  fixitya: {
    id: 'fixitya',
    nombre: 'Fixitya',
    tagline: 'Conexión Laboral Impulsada por IA',
    descripcionLarga: 'Ecosistema digital diseñado para conectar de manera eficiente a usuarios comunes con profesionales técnicos de diversos oficios (electricidad, plomería, pintura).',
    impactoNegocio: 'Reducción del tiempo de fricción en la contratación de servicios mediante la automatización del levantamiento de requerimientos técnicos.',
    ejecucionTecnica: [
      'Desarrollo de motor de Inteligencia Artificial para comprensión de lenguaje natural.',
      'Extracción algorítmica de datos del usuario para el llenado de formularios técnicos.',
      'Desarrollo Frontend reactivo para interfaces de alto contraste.'
    ],
    stack: ['SiliconFlow', 'TypeScript', 'Next.js', 'React', 'Node.js', 'Tailwind'],
    url: 'https://fixitya.com'
  },
  omyu: {
    id: 'omyu',
    nombre: 'Omyu.de',
    tagline: 'Santuario de Productividad Cognitiva',
    descripcionLarga: 'Una aplicación multifuncional que apela a la calma mental, fusionando la gestión de tareas rigurosa con un entorno estético y herramientas de concentración.',
    impactoNegocio: 'Creación de un producto digital centrado en la retención del usuario mediante la gamificación de la productividad y el bienestar mental.',
    ejecucionTecnica: [
      'Ingeniería de un "Dojo Social" simulado con IA para interacciones controladas.',
      'Desarrollo de sistema de tareas atómicas y subtareas.',
      'Implementación algorítmica del Método Pomodoro y técnicas de focus.',
      'Motor de personalización visual (Themes) inspirado en Pinterest.',
      'Integración de reproductor musical en segundo plano.'
    ],
    stack: ['ZeroClaw', 'SQL', 'TypeScript', 'Next.js', 'Node.js', 'React'],
    url: 'https://omyu.de'
  }
};