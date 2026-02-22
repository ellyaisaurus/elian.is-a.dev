// src/componentes/cursor-magnetico/cursor-magnetico.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import estilos from './cursor-magnetico.module.css';

interface PropsCursor {}

export default function CursorMagnetico({}: PropsCursor) {
  // Protocolo anti Hydration Error
  const [estaMontado, setEstaMontado] = useState<boolean>(false);
  const [esInteractivo, setEsInteractivo] = useState<boolean>(false);

  // Valores de movimiento optimizados (no disparan re-renders en React)
  const ratonX = useMotionValue(-100);
  const ratonY = useMotionValue(-100);

  // Físicas de resorte para el anillo exterior. 
  // Damping: Fricción | Stiffness: Tensión | Mass: Peso percibido
  const configResorte = { damping: 25, stiffness: 250, mass: 0.5 };
  const resorteX = useSpring(ratonX, configResorte);
  const resorteY = useSpring(ratonY, configResorte);

  useEffect(() => {
    setEstaMontado(true);

    const actualizarCoordenadas = (e: MouseEvent) => {
      ratonX.set(e.clientX);
      ratonY.set(e.clientY);
    };

    const detectarInteraccion = (e: MouseEvent) => {
      const objetivo = e.target as HTMLElement;
      // Leemos si el elemento bajo el ratón pretende ser clicable
      const estiloCursor = window.getComputedStyle(objetivo).cursor;
      const esClicable = estiloCursor === 'pointer' || objetivo.tagName === 'A' || objetivo.tagName === 'BUTTON';
      
      setEsInteractivo(esClicable);
    };

    window.addEventListener('mousemove', actualizarCoordenadas);
    window.addEventListener('mouseover', detectarInteraccion);

    return () => {
      window.removeEventListener('mousemove', actualizarCoordenadas);
      window.removeEventListener('mouseover', detectarInteraccion);
    };
  }, [ratonX, ratonY]);

  if (!estaMontado) return null;

  return (
    <>
      {/* Anillo Exterior (Aplica fricción física) */}
      <motion.div
        className={estilos['cursor-anillo']}
        style={{
          x: resorteX,
          y: resorteY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: esInteractivo ? 1.8 : 1,
          backgroundColor: esInteractivo ? 'rgba(224, 90, 61, 0.15)' : 'transparent',
          borderColor: esInteractivo ? 'rgba(224, 90, 61, 0)' : 'var(--accent-terra)',
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Punto Central (Respuesta inmediata) */}
      <motion.div
        className={estilos['cursor-punto']}
        style={{
          x: ratonX,
          y: ratonY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: esInteractivo ? 0 : 1,
          opacity: esInteractivo ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}