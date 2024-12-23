import { motion, useInView} from "framer-motion";
import { useRef } from "react";

const Bio = () => {

  const ref = useRef(null)

  const isInView = useInView(ref, {once: true})
  return (
    <>
    <div id="bio">
        <motion.h1
            initial={{ x: 100, opacity: 0 }} // Posición inicial: fuera de pantalla abajo
            animate={{ x: 0, opacity: 1 }}  // Posición final: en su lugar
            transition={{ duration: 0.8, ease: "easeOut" }} className='section'>BIO</motion.h1>
        <div className='bio_content'>
            <motion.p ref={ref}
            initial={{ y: -100, opacity: 0 }} 
            animate={ isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}> Bárbara Lago comes from a small town in <span>the north of Spain.</span><br /><br /> In 2015, she settled in <span>A Coruña</span> and developed musically starting her career as a DJ.


<br /><br />Recently she has performed in big festivals like a <span>Monegros Festival</span>, Ultra, Verknipt, A Summer History, Dreambeach, <span>Blackworks Festival</span>… 


<br /><br />She just published her first EP Emergency Control under the Spanish records label <span>No Mercy</span>, and has participated in some VA's of labels such as Reckless with your track <span>Bass In The F Place.</span></motion.p>
            <motion.img ref={ref}
            initial={{ y: 100, opacity: 0 }} 
            animate={ isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }} id='barbara_bio' src='/assets/img/barbara_bio.jpg' />
        </div>
    </div>
</>
  )
}

export default Bio