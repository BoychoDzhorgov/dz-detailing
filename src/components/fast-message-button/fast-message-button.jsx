import React, { useState } from "react";
import ChatIcon from "../../images/icon-chat-bubble.png";
import MessengerIcon from "../../images/icon-messenger.svg";
import InstagramIcon from "../../images/icon-text-instagram.svg";
import ViberIcon from "../../images/icon-viber.svg";
import PhoneIcon from "../../images/icon-call-phone.svg"

import "./fast-message-button.scss"

export default function FastMessageButton() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fast-message-button">
            <button className="main-button" onClick={toggleMenu}>
                <img src={ChatIcon}/>
            </button>
            {isOpen && (
                <div className="options">
                    <a href="tel:+359888888888" className="option">
                        <img src={PhoneIcon} alt="Phone" />
                    </a>
                    <a href="tel:+359888888888" className="option">
                        <img src={ViberIcon} alt="Viber" />
                    </a>
                    <a href="https://www.messenger.com" target="_blank" rel="noopener noreferrer" className="option">
                        <img src={MessengerIcon} alt="Messenger" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="option">
                        <img src={InstagramIcon} alt="Instagram" />
                    </a>
                </div>
            )}
        </div>
    );
}