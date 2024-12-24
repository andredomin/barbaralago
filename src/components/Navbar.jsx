import { motion } from "framer-motion";
const Navbar = () => {
    return (
      <>
            <div className='barbara_dj'>
                <h1>BARBARA LAGO</h1>
            </div>
            <motion.div 
            initial={{ y: 100, opacity: 0 }} // Posición inicial: fuera de pantalla abajo
            animate={{ y: 0, opacity: 1 }}  // Posición final: en su lugar
            transition={{ duration: 0.8, ease: "easeOut" }} >
                <div className="navbar">
                        <ul className='navbar__list'>
                                <li id='navbar__home'><a href="#">HOME</a></li>
                                <li id='navbar__bio'><a href="#bio">BIO</a></li>
                                <li id='navbar__releases'><a href="#releases">RELEASES</a></li>
                                <li id='navbar__dates'><a href="#dates">DATES</a></li>
                                <li id='navbar__media'><a href="#media">MEDIA</a></li>
                                <li id='navbar__contact'><a href="#contact">CONTACT</a></li>
                        </ul>
                </div>
            </motion.div>
      </>
    )
  }
  
  export default Navbar
  