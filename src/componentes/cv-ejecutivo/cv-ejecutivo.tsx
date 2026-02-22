// src/componentes/cv-ejecutivo/cv-ejecutivo.tsx
'use client';

import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import estilos from './cv-ejecutivo.module.css';

interface PropsCV {
  alCerrar: () => void;
}

// Orquestación en cascada para la página entera
const contenedorVariants: Variants = {
  oculto: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  salida: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

// Animación de texto emergiendo de una línea invisible
const revealVariants: Variants = {
  oculto: { y: '120%', opacity: 0, rotateZ: 2 },
  visible: { 
    y: '0%', 
    opacity: 1, 
    rotateZ: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
  salida: { y: '100%', opacity: 0, transition: { duration: 0.4 } }
};

export default function CvEjecutivo({ alCerrar }: PropsCV) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const manejarEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') alCerrar(); };
    window.addEventListener('keydown', manejarEscape);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', manejarEscape); };
  }, [alCerrar]);

  return (
    <motion.div 
      className={estilos['takeover-cv']} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={estilos['marca-agua-colosal']}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.02 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        Helvion
      </motion.div>

      <motion.main 
        className={estilos['grid-cv']} 
        variants={contenedorVariants} 
        initial="oculto" 
        animate="visible" 
        exit="salida"
      >
        
        {/* ==========================================
            COLUMNA IZQUIERDA: IDENTIDAD & MANIFIESTO
        ========================================== */}
        <div className={estilos['columna-identidad']}>
          <div className={estilos['mascara-texto']}>
            <motion.div variants={revealVariants} className={estilos['contenedor-nombre']}>
              <span className={estilos['nombre-real']}>Elian<br/>Mejia.</span>
              <span className={estilos['nombre-dev']}>Helvion<br/>System.</span>
            </motion.div>
          </div>
          
          <div className={estilos['mascara-texto']}>
            <motion.h2 variants={revealVariants} className={estilos['titulo-profesional']}>
              Arquitecto de Soluciones & Estratega Logístico
            </motion.h2>
          </div>

          <div className={estilos['seccion-idiomas']}>
            <div className={estilos['mascara-texto']}>
              <motion.div variants={revealVariants} className={estilos['item-idioma']}>
                <span className={estilos['tag-idioma']}>ES</span> Español Nativo
              </motion.div>
            </div>
            <div className={estilos['mascara-texto']}>
              <motion.div variants={revealVariants} className={estilos['item-idioma']}>
                <span className={estilos['tag-idioma']}>EN</span> B2+ Business (EBC Standard)
              </motion.div>
            </div>
          </div>
          
          <div className={estilos['mascara-texto']}>
            <motion.p variants={revealVariants} className={estilos['manifiesto']}>
              "El código sin propósito es solo sintaxis. Mi formación en Negocios Internacionales me permite auditar las necesidades de mercado, para luego forjar la infraestructura técnica exacta que las resuelve."
            </motion.p>
          </div>
        </div>

        {/* ==========================================
            COLUMNA DERECHA: DATOS DUROS & ARSENAL
        ========================================== */}
        <div className={estilos['columna-datos']}>
          
          {/* BLOQUE: PROPUESTA DE VALOR */}
          <section className={estilos['bloque-cv']}>
            <div className={estilos['mascara-texto']}>
              <motion.h3 variants={revealVariants} className={estilos['encabezado-bloque']}>
                Cobertura de Necesidades Corporativas
              </motion.h3>
            </div>
            
            <div className={estilos['item-solucion']}>
              <div className={estilos['mascara-texto']}>
                <motion.span variants={revealVariants} className={estilos['numero-solucion']}>01</motion.span>
              </div>
              <div className={estilos['contenido-solucion']}>
                <div className={estilos['mascara-texto']}>
                  <motion.h4 variants={revealVariants}>Detección y Visualización de Datos</motion.h4>
                </div>
                <div className={estilos['mascara-texto']}>
                  <motion.p variants={revealVariants}>Traducción de KPIs comerciales a lógica de bases de datos y dashboards interactivos de alta precisión, optimizando la toma de decisiones.</motion.p>
                </div>
              </div>
            </div>

            <div className={estilos['item-solucion']}>
              <div className={estilos['mascara-texto']}>
                <motion.span variants={revealVariants} className={estilos['numero-solucion']}>02</motion.span>
              </div>
              <div className={estilos['contenido-solucion']}>
                <div className={estilos['mascara-texto']}>
                  <motion.h4 variants={revealVariants}>Automatización mediante IA Generativa</motion.h4>
                </div>
                <div className={estilos['mascara-texto']}>
                  <motion.p variants={revealVariants}>Ideación e integración de ecosistemas inteligentes (Gemini / SiliconFlow) para resolver cuellos de botella en logística y atención B2B.</motion.p>
                </div>
              </div>
            </div>

            <div className={estilos['item-solucion']}>
              <div className={estilos['mascara-texto']}>
                <motion.span variants={revealVariants} className={estilos['numero-solucion']}>03</motion.span>
              </div>
              <div className={estilos['contenido-solucion']}>
                <div className={estilos['mascara-texto']}>
                  <motion.h4 variants={revealVariants}>Seguridad y Relaciones Laborales</motion.h4>
                </div>
                <div className={estilos['mascara-texto']}>
                  <motion.p variants={revealVariants}>Adaptación técnica al cambio operativo, garantizando ciberseguridad en protocolos de acceso y una experiencia de usuario (UX) sin fricción.</motion.p>
                </div>
              </div>
            </div>
          </section>

          {/* BLOQUE: STACK TÉCNICO */}
          <section className={estilos['bloque-cv']}>
            <div className={estilos['mascara-texto']}>
              <motion.h3 variants={revealVariants} className={estilos['encabezado-bloque']}>
                Arsenal Arquitectónico
              </motion.h3>
            </div>

            <div className={estilos['grupo-tecnico']}>
              <div className={estilos['mascara-texto']}>
                <motion.span variants={revealVariants} className={estilos['label-tecnico']}>Lenguajes Base</motion.span>
              </div>
              <div className={estilos['contenedor-tags']}>
                {['TypeScript', 'JavaScript', 'SQL', 'PHP', 'HTML5', 'CSS3'].map((tech, i) => (
                  <div key={i} className={estilos['mascara-texto']}>
                    <motion.div variants={revealVariants} className={estilos['tag-tecnico-cv']}>{tech}</motion.div>
                  </div>
                ))}
              </div>
            </div>

            <div className={estilos['grupo-tecnico']}>
              <div className={estilos['mascara-texto']}>
                <motion.span variants={revealVariants} className={estilos['label-tecnico']}>Frameworks & Librerías</motion.span>
              </div>
              <div className={estilos['contenedor-tags']}>
                {['React', 'Next.js', 'Node.js', 'Vue.js', 'Framer Motion', 'Bootstrap'].map((tech, i) => (
                  <div key={i} className={estilos['mascara-texto']}>
                    <motion.div variants={revealVariants} className={estilos['tag-tecnico-cv']}>{tech}</motion.div>
                  </div>
                ))}
              </div>
            </div>

            <div className={estilos['grupo-tecnico']}>
              <div className={estilos['mascara-texto']}>
                <motion.span variants={revealVariants} className={estilos['label-tecnico']}>Infraestructura & Gestión</motion.span>
              </div>
              <div className={estilos['contenedor-tags']}>
                {['MariaDB', 'MongoDB', 'Vercel', 'Postman', 'GitHub', 'Figma', 'Notion', 'Obsidian'].map((tech, i) => (
                  <div key={i} className={estilos['mascara-texto']}>
                    <motion.div variants={revealVariants} className={estilos['tag-tecnico-cv']}>{tech}</motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BLOQUE: CERTIFICACIONES */}
          <section className={estilos['bloque-cv']}>
            <div className={estilos['mascara-texto']}>
              <motion.h3 variants={revealVariants} className={estilos['encabezado-bloque']}>
                Acreditaciones & Formación Continua
              </motion.h3>
            </div>

            <div className={estilos['lista-certificaciones']}>
              <div className={estilos['item-cert']}>
                <div className={estilos['mascara-texto']}>
                  <motion.h4 variants={revealVariants} className={estilos['titulo-cert']}>Google AI Studio Bootcamp</motion.h4>
                </div>
                <div className={estilos['mascara-texto']}>
                  <motion.span variants={revealVariants} className={estilos['subtitulo-cert']}>Build Pro Apps with Gemini</motion.span>
                </div>
              </div>

              <div className={estilos['item-cert']}>
                <div className={estilos['mascara-texto']}>
                  <motion.h4 variants={revealVariants} className={estilos['titulo-cert']}>IA Business Certification</motion.h4>
                </div>
                <div className={estilos['mascara-texto']}>
                  <motion.span variants={revealVariants} className={estilos['subtitulo-cert']}>Founderz Academy</motion.span>
                </div>
              </div>

              <div className={estilos['item-cert']}>
                <div className={estilos['mascara-texto']}>
                  <motion.h4 variants={revealVariants} className={estilos['titulo-cert']}>Full-Stack Web Development</motion.h4>
                </div>
                <div className={estilos['mascara-texto']}>
                  <motion.span variants={revealVariants} className={estilos['subtitulo-cert']}>React, JS, HTML, CSS - Udemy Certification</motion.span>
                </div>
              </div>

              <div className={estilos['item-cert']}>
                <div className={estilos['mascara-texto']}>
                  <motion.h4 variants={revealVariants} className={estilos['titulo-cert']}>Backend Essentials</motion.h4>
                </div>
                <div className={estilos['mascara-texto']}>
                  <motion.span variants={revealVariants} className={estilos['subtitulo-cert']}>Procesos CRUD con MariaDB, PHP & C++ para Principiantes</motion.span>
                </div>
              </div>
            </div>
          </section>

          <motion.div variants={revealVariants} className={estilos['panel-controles']}>
            <button className={estilos['btn-cerrar']} onClick={alCerrar}>
              [ Colapsar Expediente ]
            </button>
          </motion.div>

        </div>
      </motion.main>
    </motion.div>
  );
}