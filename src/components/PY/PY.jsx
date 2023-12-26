import React from 'react'
import styles from "../PY/PY.module.css"
import { useState } from "react"
import {motion} from "framer-motion"

function PY({img1, img2, titulo, desc1, desc2, desc3, enlace}) {

  const [hov, setHov] = useState(0)
  const [cl, setCl] = useState(0)

  return (
    <div className={styles.PY}      
      style={hov === 1 ? {border: "solid 1px rgba(255, 255, 255, 0.6)", transition: "all 0.5s ease-out"}: {border: "solid 1px rgba(255, 255, 255, 0.2)", transition: "all 0.5s ease-out"}}
    >
        <div className={styles.titulo}
            onClick={() => setCl(1)} 
            onMouseEnter={() => setHov(1)} onMouseLeave={() => setHov(0)} 
        >{titulo}</div>
        <div className={styles.content}>
            <div className={styles.info} style={cl === 1 ? {top: "0%", transition: "all 0.5s ease-out"} : {top: "-100%", transition: "all 0.5s ease-out"}}>
                <div className={styles.descCont}>
                    <p>{desc1}</p>
                    <p>{desc2}</p>
                    <p>{desc3}</p>
                </div>
                <div className={styles.panelB}>
                    <div className={styles.contB}>
                        <div className={styles.regresar} onClick={() => setCl(0)}>Atrás</div>
                    </div>
                    <div className={styles.contB}>
                        <a href={enlace} target="_blank" rel="noopener noreferrer">Ir al sitio</a>
                    </div>
                </div>
            </div>
            <div className={styles.imgC1} >
                <motion.img src={img1} alt="" style={hov === 1 ? {top: "-100%", transition: "all 0.5s ease-out"}: {top: "0%", transition: "all 0.5s ease-out"}}/>
            </div>
            <div className={styles.imgC2}>
                <motion.img src={img2} alt="" style={hov === 1 ? {left: "-100%", transition: "all 0.5s ease-out"}: {left: "0%", transition: "all 0.5s ease-out"}}/>
            </div>
        </div>
    </div>
  )
}

export default PY