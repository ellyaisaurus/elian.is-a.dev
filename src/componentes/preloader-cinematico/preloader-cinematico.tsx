// src/componentes/preloader-cinematico/preloader-cinematico.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import estilos from './preloader-cinematico.module.css';

interface PropsPreloader {}

export default function PreloaderCinematico({}: PropsPreloader) {
  const [progreso, setProgreso] = useState<number>(0);
  const [estaCargando, setEstaCargando] = useState<boolean>(true);
  const [estaMontado, setEstaMontado] = useState<boolean>(false);

  // Prevención de Hydration Error
  useEffect(() => {
    setEstaMontado(true);
    
    // Bloqueamos el scroll del cuerpo de la página mientras carga
    document.body.style.overflow = 'hidden';

    // Simulador de carga matemática inercial
    const intervaloCarga = setInterval(() => {
      setProgreso((prev) => {
        // Aceleración asimétrica para que se sienta humano, no lineal
        const incremento = Math.floor(Math.random() * 15) + 1;
        const nuevoProgreso = prev + incremento;
        
        if (nuevoProgreso >= 100) {
          clearInterval(intervaloCarga);
          setTimeout(() => {
            setEstaCargando(false);
            // Liberamos el scroll nativo al terminar
            document.body.style.overflow = '';
          }, 600); // Pausa dramática en 100%
          return 100;
        }
        return nuevoProgreso;
      });
    }, 150);

    return () => {
      clearInterval(intervaloCarga);
      document.body.style.overflow = '';
    };
  }, []);

  if (!estaMontado) return null;

  return (
    <AnimatePresence>
      {estaCargando && (
        <motion.div
          className={estilos['pantalla-arranque']}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(20px)' }} // Se esfuma y se desenfoca al salir
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Curva de animación suave
        >
          <div className={estilos['contenedor-datos']}>
            <span className={estilos['etiqueta-carga']}>Calibrando Entorno</span>
            
            <div className={estilos['contador-numerico']}>
              {progreso}
              <span className={estilos['simbolo-porcentaje']}>%</span>
            </div>

            <div className={estilos['barra-progreso-base']}>
              <motion.div 
                className={estilos['barra-progreso-llena']}
                animate={{ width: `${progreso}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>
            
            <span className={estilos['status-logistico']}>
              {progreso < 100 ? 'Sincronizando nodos...' : 'Sistemas en línea'}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}