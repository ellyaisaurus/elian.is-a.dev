// src/componentes/inicio/monolito-datos/monolito-datos.tsx
'use client';

import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { DefinicionProyecto } from '@/datos/base-proyectos';
import estilos from './monolito-datos.module.css';

interface PropsMonolito {
  proyecto: DefinicionProyecto;
  alCerrar: () => void;
}

const contenedorVariants: Variants = {
  oculto: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.3,    
    },
  },
  salida: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const revealVariants: Variants = {
  oculto: { y: 100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
  salida: { y: 50, opacity: 0, transition: { duration: 0.4 } }
};

export default function MonolitoDatos({ proyecto, alCerrar }: PropsMonolito) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const manejarEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') alCerrar();
    };
    window.addEventListener('keydown', manejarEscape);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', manejarEscape);
    };
  }, [alCerrar]);

  // Transformación visual específica para Fixit Ya en la marca de agua
  const nombreColosal = proyecto.id === 'fixitya' ? 'Fixit Ya' : proyecto.nombre;

  return (
    <motion.div
      className={estilos['takeover-absoluto']}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={estilos['marca-agua-colosal']}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.03 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {nombreColosal}
      </motion.div>

      <motion.main 
        className={estilos['grid-monolito']}
        variants={contenedorVariants}
        initial="oculto"
        animate="visible"
        exit="salida"
      >
        <div className={estilos['columna-informacion']}>
          
          <div className={estilos['bloque-dato']}>
            <div className={estilos['mascara-texto']}>
              <motion.h3 variants={revealVariants} className={estilos['titulo-seccion']}>
                Contexto del Proyecto
              </motion.h3>
            </div>
            <div className={estilos['mascara-texto']}>
              <motion.p variants={revealVariants} className={estilos['texto-impacto']}>
                "{proyecto.impactoNegocio}"
              </motion.p>
            </div>
          </div>

          <div className={estilos['bloque-dato']}>
            <div className={estilos['mascara-texto']}>
              <motion.h3 variants={revealVariants} className={estilos['titulo-seccion']}>
                Desarrollo e Implementación
              </motion.h3>
            </div>
            <ul className={estilos['lista-arquitectura']}>
              {proyecto.ejecucionTecnica.map((item, index) => (
                <li key={index}>
                  <div className={estilos['mascara-texto']} style={{ flexShrink: 0 }}>
                    <motion.span variants={revealVariants} className={estilos['viñeta-codigo']} style={{ display: 'block' }}>
                      {`{0${index + 1}}`}
                    </motion.span>
                  </div>
                  <div className={estilos['mascara-texto']}>
                    <motion.span variants={revealVariants} style={{ display: 'block' }}>
                      {item}
                    </motion.span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={estilos['bloque-dato']}>
            <div className={estilos['mascara-texto']}>
              <motion.h3 variants={revealVariants} className={estilos['titulo-seccion']}>
                Tecnologías Utilizadas
              </motion.h3>
            </div>
            <div className={estilos['contenedor-stack']}>
              {proyecto.stack.map((tech, index) => (
                <div key={index} className={estilos['mascara-texto']}>
                  <motion.span variants={revealVariants} className={estilos['tag-monolito']} style={{ display: 'block' }}>
                    {tech}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>

          <motion.div variants={revealVariants} className={estilos['panel-controles']}>
            <button className={estilos['btn-colapsar']} onClick={alCerrar}>
              Volver Atrás
            </button>
            
            <a 
              href={proyecto.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={estilos['btn-visitar']}
              title={`Visitar ${proyecto.nombre}`}
            >
              Visitar Sitio Web
            </a>
          </motion.div>

        </div>
      </motion.main>
    </motion.div>
  );
}