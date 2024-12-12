import "./header.scss"
import React, { useState, useEffect } from "react";
import Logo from "../../images/logo.png"
import BurgerMenuIcon from "../../images/icon-burger-menu.png";
import CloseIcon from "../../images/icon-close.png";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return isMobile;
  };

export default function Header() {
    const isMobile = useIsMobile();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
            const headerHeight = document.querySelector("header").offsetHeight;
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - headerHeight;
        
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });

            if (isMobile) {
                setIsMenuOpen(false);
            }
        }
    };

    return (
        <>
            {isMobile ? (
                <header className="mobile-header">
                    <div className="mobile-header__logo-slogan">
                        <img src={Logo}/>
                    </div>
                    <button
                    className="mobile-header__menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <img src={CloseIcon} height={30} width={30}/>
                        ) : (
                            <img src={BurgerMenuIcon} height={30} width={30}/>
                        )}
                    </button>
                    {isMenuOpen && (
                        <nav className="mobile-header__mobile-navigation">
                            <a className="mobile-header__mobile-navigation__item" href="#home" onClick={(e) => handleScroll(e, "home")}>Начало</a>
                            <a className="mobile-header__mobile-navigation__item" href="#services" onClick={(e) => handleScroll(e, "services")}>Услуги и цени</a>
                            <a className="mobile-header__mobile-navigation__item" href="#follow-us" onClick={(e) => handleScroll(e, "follow-us")}>Резултати</a>
                            <a className="mobile-header__mobile-navigation__item" href="#faqs" onClick={(e) => handleScroll(e, "faqs")}>Чести въпроси</a>
                            <a className="mobile-header__mobile-navigation__item" href="#about" onClick={(e) => handleScroll(e, "about")}>За нас</a>
                        </nav>
                    )}
                </header>
            ) : (
                <header className="desktop-header">
                    <div className="desktop-header__logo-slogan">
                        <img src={Logo}/>
                    </div>
                        <nav>
                            <a href="#home" onClick={(e) => handleScroll(e, "home")}>Начало</a>
                            <a href="#services" onClick={(e) => handleScroll(e, "services")}>Услуги и цени</a>
                            <a href="#follow-us" onClick={(e) => handleScroll(e, "follow-us")}>Резултати</a>
                            <a href="#faqs" onClick={(e) => handleScroll(e, "faqs")}>Чести въпроси</a>
                            <a href="#about" onClick={(e) => handleScroll(e, "about")}>За нас</a>
                        </nav>
                </header>
            )}
        </>
    );
}
