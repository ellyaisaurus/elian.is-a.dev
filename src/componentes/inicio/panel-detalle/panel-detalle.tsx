// src/componentes/inicio/panel-detalle/panel-detalle.tsx
'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { DefinicionProyecto } from '@/datos/base-proyectos';
import estilos from './panel-detalle.module.css';

interface PropsPanel {
  proyecto: DefinicionProyecto;
  alCerrar: () => void;
}

export default function PanelDetalle({ proyecto, alCerrar }: PropsPanel) {
  // Protocolo: Bloqueo de scroll global al abrir el panel
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      className={estilos['overlay-cristal']}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={alCerrar} // Cierra al hacer click fuera del panel
    >
      <motion.aside
        className={estilos['panel-lateral']}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()} // Previene cierre al clickear dentro
      >
        <header className={estilos['cabecera-panel']}>
          <div>
            <h2 className={estilos['titulo-panel']}>{proyecto.nombre}</h2>
            <span className={estilos['tagline-panel']}>{proyecto.tagline}</span>
          </div>
          <button className={estilos['boton-cerrar']} onClick={alCerrar} aria-label="Cerrar panel">
            <X size={24} strokeWidth={1.5} />
          </button>
        </header>

        <section className={estilos['seccion-datos']}>
          <h3>Contexto y Visión de Negocio</h3>
          <p className={estilos['texto-descriptivo']}>{proyecto.descripcionLarga}</p>
          <br />
          <p className={estilos['texto-descriptivo']} style={{ borderLeft: '2px solid var(--accent-terra)', paddingLeft: '1rem' }}>
            <strong>Impacto:</strong> {proyecto.impactoNegocio}
          </p>
        </section>

        <section className={estilos['seccion-datos']}>
          <h3>Ejecución Arquitectónica</h3>
          <ul className={estilos['lista-ejecucion']}>
            {proyecto.ejecucionTecnica.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={estilos['seccion-datos']}>
          <h3>Stack Tecnológico</h3>
          <div className={estilos['contenedor-stack']}>
            {proyecto.stack.map((tech, index) => (
              <span key={index} className={estilos['tag-stack']}>{tech}</span>
            ))}
          </div>
        </section>
      </motion.aside>
    </motion.div>
  );
}