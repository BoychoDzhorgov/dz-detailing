import "./footer.scss"
import LogoSlogan from "../../images/logo-slogan.png"
import Instagram from "../../images/icon-instagram.svg"
import Facebook from "../../images/icon-facebook.svg"
import Phone from "../../images/icon-phone-footer.png"
import Mail from "../../images/icon-mail-footer.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="working-hours">
                <h3 className="title">Работно време</h3>
                <div className="content">
                    <div className="days">Понеделник - Петък</div>
                    <div className="hours">08:00 - 17:00</div>
                </div>
            </div>
            <img className="logo-slogan" src={LogoSlogan} />
            <div className="contacts">
                <h3 className="title">Контакти</h3>
                <div className="content">
                    <div className="content__phone">
                        <img className="content__phone__icon" src={Phone} />
                        <a className="content__phone__tel" href="tel:+359888821747">+359 88 8821747</a>
                    </div>
                    <div className="content__email">
                        <img className="content__email__icon" src={Mail} />
                        <a className="content__email__to" href="mailto:dz.detailing24@gmail.com">dz.detailing24@gmail.com</a>
                    </div>
                    <div className="social">
                        <a href="https://www.instagram.com/dzdetailing_/" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href="https://www.facebook.com/dzdetailing24/" target="_blank" rel="noopener noreferrer">
                            <img src={Facebook} alt="Facebook" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}