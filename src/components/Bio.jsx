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
            transition={{ duration: 0.8, ease: "easeOut" }}> Bárbara Lago comes from a small town in the north of Spain. In 2015, she settled in A Coruña and developed musically starting her career as a DJ.


Recently she has performed in big festivals like a Monegros Festival, Ultra, Verknipt, A Summer History, Dreambeach, Blackworks Festival, Gate Festival and big clubs like a Fabrik, Florida 135,  Industrial Copera, Family Club, Afrobar, Audiodrome… 


She just published her first EP Emergency Control under the Spanish records label No Mercy, and has participated in some VA's of labels such as Reckless with your track Bass In The F Place.</motion.p>
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