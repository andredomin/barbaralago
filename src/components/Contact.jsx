import { motion, useInView} from "framer-motion"
import { useRef } from "react"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView( ref, {once: true})
  return (
    <>
    <div id="contact">
    <motion.h1
            ref={ref}
            initial={{ x: 100, opacity: 0 }} 
            animate={ isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }} className='section'>CONTACT</motion.h1>
        <div className="formulario">
        <motion.div
        className="formulario-item"
        initial={{ x: 0, opacity: 0 }}
        animate={isInView ? { x: 100, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="formulario__title">WW BOOKINGS:</h2>
        <a className="formulario__links" href="mailto:asierb4bookings.net">
          asierb4bookings.net
        </a>
      </motion.div>

      <motion.div
        className="formulario-item"
        initial={{ x: 0, opacity: 0 }}
        animate={isInView ? {  x: 100, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} // Con un retraso
      >
        <h2 className="formulario__title">SOUNDCLOUD</h2>
        <a
          className="formulario__links"
          href="https://soundcloud.com/barbaralago"
        >
          /barbaralago
        </a>
      </motion.div>
            
        </div>
    </div>
    </>
  )
}

export default Contact