// src/componentes/escenario-principal/escenario-principal.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Globe, Cpu, BrainCircuit, Mail, User } from 'lucide-react';
import MonolitoDatos from '@/componentes/inicio/monolito-datos/monolito-datos';
import FormularioContacto from '@/componentes/contacto/formulario-contacto/formulario-contacto';
import CvEjecutivo from '@/componentes/cv-ejecutivo/cv-ejecutivo';
import { diccionarioProyectos } from '@/datos/base-proyectos';
import estilos from './escenario-principal.module.css';

interface PropsEscenario {}

export default function EscenarioPrincipal({}: PropsEscenario) {
  const [estaMontado, setEstaMontado] = useState<boolean>(false);
  const [idProyectoActivo, setIdProyectoActivo] = useState<string | null>(null);
  const [modalContactoAberto, setModalContactoAbierto] = useState<boolean>(false);
  const [modalCvAbierto, setModalCvAbierto] = useState<boolean>(false);
  
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setEstaMontado(true);
  }, []);

  // --- MATEMÁTICAS DE CÁMARA (6 ACTOS DISTRIBUIDOS EN 600VH) ---
  
  // Acto 1: Portada
  const opacidadActo1 = useTransform(scrollYProgress, [0, 0.10, 0.15], [1, 1, 0]);
  const escalaActo1 = useTransform(scrollYProgress, [0, 0.10, 0.15], [1, 1, 4]);
  const blurActo1 = useTransform(scrollYProgress, [0, 0.10, 0.15], ["blur(0px)", "blur(0px)", "blur(20px)"]);
  const visActo1 = useTransform(scrollYProgress, (v) => v <= 0.18 ? "visible" : "hidden");

  // Acto 2: CV Ejecutivo (Elian / Helvion)
  const opacidadActo2 = useTransform(scrollYProgress, [0.10, 0.15, 0.28, 0.33], [0, 1, 1, 0]);
  const escalaActo2 = useTransform(scrollYProgress, [0.10, 0.15, 0.28, 0.33], [0.5, 1, 1, 4]);
  const blurActo2 = useTransform(scrollYProgress, [0.10, 0.15, 0.28, 0.33], ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"]);
  const visActo2 = useTransform(scrollYProgress, (v) => (v >= 0.05 && v <= 0.38) ? "visible" : "hidden");

  // Acto 3: Study EDU COUT
  const opacidadActo3 = useTransform(scrollYProgress, [0.28, 0.33, 0.46, 0.51], [0, 1, 1, 0]);
  const escalaActo3 = useTransform(scrollYProgress, [0.28, 0.33, 0.46, 0.51], [0.5, 1, 1, 4]);
  const blurActo3 = useTransform(scrollYProgress, [0.28, 0.33, 0.46, 0.51], ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"]);
  const visActo3 = useTransform(scrollYProgress, (v) => (v >= 0.23 && v <= 0.56) ? "visible" : "hidden");

  // Acto 4: Fixit Ya
  const opacidadActo4 = useTransform(scrollYProgress, [0.46, 0.51, 0.64, 0.69], [0, 1, 1, 0]);
  const escalaActo4 = useTransform(scrollYProgress, [0.46, 0.51, 0.64, 0.69], [0.5, 1, 1, 4]);
  const blurActo4 = useTransform(scrollYProgress, [0.46, 0.51, 0.64, 0.69], ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"]);
  const visActo4 = useTransform(scrollYProgress, (v) => (v >= 0.41 && v <= 0.74) ? "visible" : "hidden");

  // Acto 5: Omyu
  const opacidadActo5 = useTransform(scrollYProgress, [0.64, 0.69, 0.82, 0.87], [0, 1, 1, 0]);
  const escalaActo5 = useTransform(scrollYProgress, [0.64, 0.69, 0.82, 0.87], [0.5, 1, 1, 4]);
  const blurActo5 = useTransform(scrollYProgress, [0.64, 0.69, 0.82, 0.87], ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"]);
  const visActo5 = useTransform(scrollYProgress, (v) => (v >= 0.59 && v <= 0.92) ? "visible" : "hidden");

  // Acto 6: Contacto
  const opacidadActo6 = useTransform(scrollYProgress, [0.82, 0.87, 1], [0, 1, 1]);
  const escalaActo6 = useTransform(scrollYProgress, [0.82, 0.87, 1], [0.5, 1, 1]);
  const blurActo6 = useTransform(scrollYProgress, [0.82, 0.87, 1], ["blur(20px)", "blur(0px)", "blur(0px)"]);
  const visActo6 = useTransform(scrollYProgress, (v) => v >= 0.77 ? "visible" : "hidden");

  if (!estaMontado) return null;

  const proyectoSeleccionado = idProyectoActivo ? diccionarioProyectos[idProyectoActivo] : null;
  const algunModalAbierto = idProyectoActivo !== null || modalContactoAberto || modalCvAbierto;

  return (
    <>
      <div className={estilos['contenedor-scroll']}>
        <motion.div 
          className={estilos['camara-fija']}
          animate={{
            scale: algunModalAbierto ? 1.15 : 1,
            filter: algunModalAbierto ? 'brightness(0.2) blur(10px)' : 'brightness(1) blur(0px)'
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence>
            
            {/* ACTO I: Portada */}
            <motion.div className={estilos['escena-absoluta']} style={{ opacity: opacidadActo1, scale: escalaActo1, filter: blurActo1, visibility: visActo1 }}>
              <span className={estilos['etiqueta-sistema']}>Presentación Ejecutiva</span>
              <h1 className={estilos['titulo-cinematico']}>Estratega <br /> Logístico <span className={estilos.acento}>Digital.</span></h1>
              <p className={estilos['descripcion-escena']}>
                Negocios Internacionales x Arquitectura de Software. <br />
                Traduzco el flujo de capital global en infraestructuras de alto rendimiento.
              </p>
            </motion.div>

            {/* ACTO II: CV (Elian / Helvion) */}
            <motion.div className={estilos['escena-absoluta']} style={{ opacity: opacidadActo2, scale: escalaActo2, filter: blurActo2, visibility: visActo2 }}>
              <User color="var(--accent-data)" size={48} strokeWidth={1} style={{ marginBottom: '1rem' }} />
              <span className={estilos['etiqueta-sistema']}>Perfil Profesional</span>
              <h2 className={estilos['titulo-cinematico']}>Elian <span className={estilos.acento}>Mejia</span></h2>
              <p className={estilos['descripcion-escena']}>
                Desarrollador Full-Stack formado en la Escuela Bancaria y Comercial. 
                Construyo sistemas donde la lógica de la cadena de suministro global se encuentra con la eficiencia del código moderno.
              </p>
              <button className={estilos['btn-explorar']} onClick={() => setModalCvAbierto(true)}>
                Ver Trayectoria
              </button>
            </motion.div>

            {/* ACTO III: Study EDU COUT */}
            <motion.div className={estilos['escena-absoluta']} style={{ opacity: opacidadActo3, scale: escalaActo3, filter: blurActo3, visibility: visActo3 }}>
              <Globe color="var(--accent-data)" size={48} strokeWidth={1} style={{ marginBottom: '1rem' }} />
              <span className={estilos['etiqueta-sistema']}>Caso de Estudio 01</span>
              <h2 className={estilos['titulo-cinematico']}>Study EDU <span className={estilos.acento}>COUT</span></h2>
              <p className={estilos['descripcion-escena']}>
                Portal de educación y certificaciones en inglés. Indexación estratégica, 
                arquitectura frontend asimétrica y gestión de roles con integración a API de Zoom.
              </p>
              <div className={estilos['metadatos-tecnicos']}>
                <span className={estilos['tag-tecnico']}>Next.js</span>
                <span className={estilos['tag-tecnico']}>Node.js</span>
                <span className={estilos['tag-tecnico']}>React</span>
                <span className={estilos['tag-tecnico']}>MariaDB</span>
              </div>
              <button className={estilos['btn-explorar']} onClick={() => setIdProyectoActivo('study')}>
                Ver Detalles
              </button>
            </motion.div>

            {/* ACTO IV: Fixit Ya */}
            <motion.div className={estilos['escena-absoluta']} style={{ opacity: opacidadActo4, scale: escalaActo4, filter: blurActo4, visibility: visActo4 }}>
              <BrainCircuit color="var(--accent-terra)" size={48} strokeWidth={1} style={{ marginBottom: '1rem' }} />
              <span className={estilos['etiqueta-sistema']}>Caso de Estudio 02</span>
              <h2 className={estilos['titulo-cinematico']}>Fixit <span className={estilos.acento}>Ya</span></h2>
              <p className={estilos['descripcion-escena']}>
                Conectando el mercado y oficios a través de inteligencia artificial. 
                Desarrollo de un motor capaz de comprender al cliente y estructurar especificaciones precisas.
              </p>
              <div className={estilos['metadatos-tecnicos']}>
                <span className={estilos['tag-tecnico']}>SiliconFlow IA</span>
                <span className={estilos['tag-tecnico']}>TypeScript</span>
                <span className={estilos['tag-tecnico']}>Next.js</span>
              </div>
              <button className={estilos['btn-explorar']} onClick={() => setIdProyectoActivo('fixitya')}>
                Explorar Proyecto
              </button>
            </motion.div>

            {/* ACTO V: Omyu */}
            <motion.div className={estilos['escena-absoluta']} style={{ opacity: opacidadActo5, scale: escalaActo5, filter: blurActo5, visibility: visActo5 }}>
              <Cpu color="var(--text-body)" size={48} strokeWidth={1} style={{ marginBottom: '1rem' }} />
              <span className={estilos['etiqueta-sistema']}>Proyecto Actual 03</span>
              <h2 className={estilos['titulo-cinematico']}>Omyu<span className={estilos.acento}>.de</span></h2>
              <p className={estilos['descripcion-escena']}>
                El santuario digital de la productividad. Un dojo social interactivo con IA, 
                gestión de tareas atómicas, método Pomodoro y personalización estética.
              </p>
              <div className={estilos['metadatos-tecnicos']}>
                <span className={estilos['tag-tecnico']}>ZeroClaw</span>
                <span className={estilos['tag-tecnico']}>SQL</span>
                <span className={estilos['tag-tecnico']}>TypeScript</span>
              </div>
              <button className={estilos['btn-explorar']} onClick={() => setIdProyectoActivo('omyu')}>
                Conocer Más
              </button>
            </motion.div>

            {/* ACTO VI: Contacto */}
            <motion.div className={estilos['escena-absoluta']} style={{ opacity: opacidadActo6, scale: escalaActo6, filter: blurActo6, visibility: visActo6 }}>
              <Mail color="var(--accent-terra)" size={48} strokeWidth={1} style={{ marginBottom: '1rem' }} />
              <span className={estilos['etiqueta-sistema']}>Próximos Pasos</span>
              <h2 className={estilos['titulo-cinematico']}>¿Hablamos de <span className={estilos.acento}>Negocios?</span></h2>
              <p className={estilos['descripcion-escena']}>
                Si requieres una arquitectura digital de alto rendimiento, optimización de flujos logísticos o consultoría corporativa, ponte en contacto.
              </p>
              <button className={estilos['btn-explorar']} onClick={() => setModalContactoAbierto(true)} style={{ marginTop: '1.5rem' }}>
                Enviar Mensaje
              </button>
            </motion.div>

          </AnimatePresence>
        </motion.div>
      </div>

      {/* Orquestación de Modales Cinemáticos (Capas de Profundidad) */}
      <AnimatePresence>
        {modalCvAbierto && (
          <CvEjecutivo alCerrar={() => setModalCvAbierto(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {proyectoSeleccionado && (
          <MonolitoDatos proyecto={proyectoSeleccionado} alCerrar={() => setIdProyectoActivo(null)} />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {modalContactoAberto && (
          <FormularioContacto alCerrar={() => setModalContactoAbierto(false)} />
        )}
      </AnimatePresence>
    </>
  );
}