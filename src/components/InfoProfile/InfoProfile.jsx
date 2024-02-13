import React from 'react'
import styles from "../InfoProfile/InfoProfile.module.css"
import {motion} from "framer-motion"

function InfoProfile() {
  return (
    <motion.div className={styles.InfoProfile} initial={{opacity: 0}} animate={{opacity: 1}}>
        <p>Me llamo Walter Sánchez, soy programador y desarrollador web. Me gusta el diseño de aplicaciones, websites y todo lo que involucra la interacción con el usuario. Me manejo bien con el orden, las estructuras de información, y los patrones de trabajo que voy aprendiendo en este camino por el desarrollo web.</p>
    </motion.div>
  )
}

export default InfoProfile