import { motion, useInView} from "framer-motion"
import { useRef } from "react"

const Dates = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
  
  return (
      <>
      <div id="dates">
      <motion.h1
            ref={ref}
            initial={{ x: 100, opacity: 0 }} 
            animate={ isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }} className='section'>DATES</motion.h1>
          <div className='date_content'>
              <motion.div ref={ref}
            initial={{ x: 100, opacity: 0 }} 
            animate={ isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }} className="date_item">
            <h2 className="date_content__location"> A Coruña, Galicia, Spain</h2>
              <p className="date_content__text">24 May</p>
              </motion.div>
              <motion.div ref={ref}
            initial={{ x: -100, opacity: 0 }} 
            animate={ isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }} className="date_item">
            <h2 className="date_content__location"> Madrid, Spain</h2>
              <p className="date_content__text">1 Jun</p>
              </motion.div>
              <motion.div ref={ref}
            initial={{ x: 100, opacity: 0 }} 
            animate={ isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }} className="date_item">
            <h2 className="date_content__location"> Bogotá, Colombia</h2>
              <p className="date_content__text">5 Jul</p>
              </motion.div>
          </div>
      </div>
      </>
    )
  }
  
  export default Dates