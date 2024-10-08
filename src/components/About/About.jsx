import React from 'react'
import {useState, useRef} from "react"
import {useInView, motion} from "framer-motion"
import styles from "../About/About.module.css"
import InfoProfile from '../infoProfile/InfoProfile'
import FormProfile from '../FormProfile/FormProfile'
import SkillsProfile from '../SkillsProfile/SkillsProfile'

function About() {

  const [infoState, setInfoState] = useState("A")
  const ref = useRef(null);
  const ref0 = useRef(null)
  const isInView = useInView(ref, { once: false });
  const isInView0 = useInView(ref0, { once: false });

  return (
    <div className={styles.About} id='iabout' style={{background: isInView0 ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)", transition: "all 1.5s ease-out"}} ref={ref0}>
      <motion.div className={styles.module1} style={{height: isInView ? "calc(10% * var(--alto))" : "calc(4% * var(--alto))", opacity: isInView ? 1 : 0, transition: "all 0.5s ease-out"}}>
        <div className={styles.profileCont} >
          <div className={styles.title} ref={ref}>Acerca de mi</div>
          <img src="image1.jpg" alt="" />
        </div>
      </motion.div>
      <motion.div className={styles.module2} transition={{delay: 0.5, duration: 0.5, ease: "easeOut"}} initial={{width: "calc(30% * var(--ancho))", opacity: 0}} animate={isInView ? {width: "calc(40% * var(--ancho))", opacity: 1} : {width: "calc(30% * var(--ancho))", opacity: 0}}>
        <motion.div className={styles.dataCont} transition={{delay: 1, duration: 0.5, ease: "easeOut"}} initial={{opacity: 0}} animate={isInView ? {opacity: 1} : {opacity: 0}}>
          <div className={styles.menu} >
            <div className={styles.menuBoton} onClick={() => setInfoState("A")} style={infoState === "A" ? {backgroundColor: "rgba(0, 0, 0, 0.1)"} : {backgroundColor: "rgba(0, 0, 0, 0)"}}>Descripción</div>
            <div className={styles.menuBoton} onClick={() => setInfoState("B")} style={infoState === "B" ? {backgroundColor: "rgba(0, 0, 0, 0.1)"} : {backgroundColor: "rgba(0, 0, 0, 0)"}}>Formación</div>
            <div className={styles.menuBoton} onClick={() => setInfoState("C")} style={infoState === "C" ? {backgroundColor: "rgba(0, 0, 0, 0.1)"} : {backgroundColor: "rgba(0, 0, 0, 0)"}}>Skills</div>
          </div>
          <div className={styles.infoCont}>
            {infoState === "A" && <InfoProfile></InfoProfile>}
            {infoState === "B" && <FormProfile></FormProfile>}
            {infoState === "C" && <SkillsProfile></SkillsProfile>}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About