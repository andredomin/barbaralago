import { motion, useInView } from "framer-motion"
import { useRef } from "react"

  


const Releases = () => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true });


  return (
    <>
    <div id="releases">
    <motion.h1
            ref={ref}
            initial={{ x: 100, opacity: 0 }} 
            animate={ isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }} className='section'>RELEASES</motion.h1>
        <motion.div ref={ref}
            initial={{ x: -100, opacity: 0 }} 
            animate={ isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }} className='bio_content'>
            <p className="releases_item">EP Emergency Control - 2023</p>
            <img id='emergency_control' src='/assets/img/emergency_control.jpg' />
        </motion.div>
    </div>
</>
  )
}

export default Releases