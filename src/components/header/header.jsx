import "./header.scss"
import React, { useRef } from "react";
import Logo from "../../images/logo.png"

export default function Header() {
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
        }
    };

    return (
        <header>
            <div className="logo-slogan">
                <img src={Logo}/>
            </div>
            <nav >
                <a href="#home" onClick={(e) => handleScroll(e, "home")}>Начало</a>
                <a href="#section-services" onClick={(e) => handleScroll(e, "section-services")}>Услуги и цени</a>
                <a href="#section-follow-us" onClick={(e) => handleScroll(e, "section-follow-us")}>Резултати</a>
                <a href="#faq" onClick={(e) => handleScroll(e, "faq")}>Чести въпроси</a>
                <a href="#about" onClick={(e) => handleScroll(e, "about")}>За нас</a>
            </nav>
        </header>
    );
}
