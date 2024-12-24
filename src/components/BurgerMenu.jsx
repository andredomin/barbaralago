import { useState } from "react";
import { motion } from "framer-motion";
const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="burger_container">
                <div className="burger_icon" onClick={toggleMenu}>
                    <div className={`line ${isOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isOpen ? 'open' : ''}`}></div>
                </div>
            </div>

            {/* Menú desplegable */}
            {isOpen && (
                <ul className="burger_menu">
                    <motion.li initial={{ y: -100, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} id='burger__home'><a href="#home" onClick={() => {setIsOpen(false)}}>HOME</a></motion.li>
                    <motion.li initial={{ y: -100, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }} id='burger__bio'><a href="#bio" onClick={() => {setIsOpen(false)}}>BIO</a></motion.li>
                    <motion.li initial={{ y: -100, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }} id='burger__releases'><a href="#releases" onClick={() => {setIsOpen(false)}}>RELEASES</a></motion.li>
                    <motion.li initial={{ y: -100, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.4, ease: "easeOut" }} id='burger__dates'><a href="#dates" onClick={() => {setIsOpen(false)}}>DATES</a></motion.li>
                    <motion.li initial={{ y: -100, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.6, ease: "easeOut" }} id='burger__media'><a href="#media" onClick={() => {setIsOpen(false)}}>MEDIA</a></motion.li>
                    <motion.li initial={{ y: -100, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.8, ease: "easeOut" }} id='burger__contact'><a href="#contact"onClick={() => {setIsOpen(false)}}>CONTACT</a></motion.li>
                </ul>
            )}
        </>
    );
};

export default BurgerMenu;
