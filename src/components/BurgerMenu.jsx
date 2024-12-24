import { useState } from "react";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const ToggleMenu = () => setIsOpen(!isOpen);

    // Función para manejar el clic y cerrar el menú
    const handleLinkClick = (e, sectionId) => {
        e.preventDefault();  // Prevenir el comportamiento predeterminado del enlace

        // Realizar el desplazamiento suave
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }

        // Cerrar el menú después de un pequeño retraso
        setTimeout(() => {
            setIsOpen(false);
        }, 200);  // 200ms de retraso para permitir que el desplazamiento ocurra
    };

    return (
        <>
            <div className="burger_container">
                <div className="burger_icon" onClick={ToggleMenu}>
                    <div className={`line ${isOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isOpen ? 'open' : ''}`}></div>
                </div>

                {isOpen && (
                    <div className="burger_menu">
                        <li id='burger__home'>
                            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>HOME</a>
                        </li>
                        <li id='burger__bio'>
                            <a href="#bio" onClick={(e) => handleLinkClick(e, 'bio')}>BIO</a>
                        </li>
                        <li id='burger__releases'>
                            <a href="#releases" onClick={(e) => handleLinkClick(e, 'releases')}>RELEASES</a>
                        </li>
                        <li id='burger__dates'>
                            <a href="#dates" onClick={(e) => handleLinkClick(e, 'dates')}>DATES</a>
                        </li>
                        <li id='burger__media'>
                            <a href="#media" onClick={(e) => handleLinkClick(e, 'media')}>MEDIA</a>
                        </li>
                        <li id='burger__contact'>
                            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>CONTACT</a>
                        </li>
                    </div>
                )}
            </div>
        </>
    );
};

export default BurgerMenu;
