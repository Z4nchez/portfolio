import React from 'react'
import styles from "../Proyectos/Proyectos.module.css"
import {useInView, motion} from "framer-motion"
import PY from '../PY/PY'
import {useRef} from "react"

function Proyectos() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const descMF1 = "Juego de memoria. Una vez registrado, el jugador puede iniciar una partida donde intentará voltear todas las fichas en el menor tiempo posible." 
  const descMF2 = "Aplicación MERN. Desarrollé una API con una base de datos donde se almacena la información de cada jugador y los puntajes más altos obtenidos para el Ranking." 
  const descMF3 = "Tecnologias usadas: HTML, CSS, React, Node, MongoDB, React Spring, GitHub Pages, Vercel"
  const descWG1 = "Blog de Huertas. Un sitio donde subo información y guias sobre como cultivar el suelo en climas aridos."
  const descWG2 = "Sitio Web Full Stack. Utilicé el patrón Modelo-Vista-Controlador para desarrollar tanto el backend como el fronend en un mismo proyecto."
  const descWG3 = "Tecnologias usadas: HTML, CSS, JavaScript, Node, MongoDB."
  const descOL1 = "Aplicación para crear torneos. El usuario puede crear torneos de eliminacion directa de hasta 64 participantes, asi como compartir el bracket a los jugadores." 
  const descOL2 = "Aplicación MERN. Construí una API con una base de datos donde se almacenan la información de cada torneo, los resultados y los participantes."
  const descOL3 = "Tecnologias usadas: HTML, CSS, React, Node, MongoDB, React Spring, GitHub Pages, Vercel."
  const descCO1 = "Landing Page para un negocio de muebles. El sitio cuenta con una estructura basica de comercio en linea y la posibilidad de hacer busqueda de productos y filtros en las busquedas."
  const descCO2 = "Web estática."
  const descCO3 = "Tecnologias usadas: HTML, CSS, React, React Spring, GitHub Pages."
  const descWW1 = "Aplicación de clima. El usuario puede ingresar el nombre de una ciudad y ver el clima actual y el pronóstico para los próximos 5 dias."
  const descWW2 = "Web estática con feching de datos a una API de terceros."
  const descWW3 = "Tecnologias usadas: HTML, CSS, React, React Spring, GitHub Pages."

  return (
    <div className={styles.Proyectos} id='iproyectos' >
      <motion.div className={styles.back} transition={{duration: 0.5, ease: "easeOut"}} initial={{scale: 0.6, opacity: 0}} animate={isInView ? {scale: 1, opacity: 1} : {scale: 0.6, opacity: 0}}>
        <div className={styles.back2} >
          <div className={styles.proyectosCont} ref={ref}>
            <motion.div className={styles.titulo} transition={{delay: 0.5, duration: 0.5, ease: "easeOut"}} initial={{left: "-200px", opacity: 0}} animate={isInView ? {left: "0px", opacity: 1} : {left: "-200px", opacity: 0}}>Proyectos</motion.div>
            <motion.div className={styles.pr} transition={{delay: 1, duration: 0.5, ease: "easeOut"}} initial={{left: "200px", opacity: 0}} animate={isInView ? {left: "0px", opacity: 1} : {left: "200px", opacity: 0}}>
              <PY img1="mf1.webp" img2="mf2.webp" titulo="MemoFun" desc1={descMF1} desc2={descMF2} desc3={descMF3} enlace="https://z4nchez.github.io/MemoFun/"></PY>
              <PY img1="ol1.webp" img2="ol2.webp" titulo="OnLeague" desc1={descOL1} desc2={descOL2} desc3={descOL3} enlace="https://z4nchez.github.io/onleague/"></PY>
              <PY img1="co1.webp" img2="co2.webp" titulo="Comoda" desc1={descCO1} desc2={descCO2} desc3={descCO3} enlace="https://z4nchez.github.io/Comoda/"></PY>
              <PY img1="ww1.webp" img2="ww2.webp" titulo="WWeather" desc1={descWW1} desc2={descWW2} desc3={descWW3} enlace="https://z4nchez.github.io/WWeather/"></PY>
              <PY img1="wg1.webp" img2="wg2.webp" titulo="Wind Garden" desc1={descWG1} desc2={descWG2} desc3={descWG3} enlace="https://windgarden.onrender.com"></PY>
            </motion.div>
          </div>
        </div>
        
      </motion.div>
    </div>
  )
}

export default Proyectos