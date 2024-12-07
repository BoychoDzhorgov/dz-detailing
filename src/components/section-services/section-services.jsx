import Service from "../service/service"
import servicesData from "../../data/servicesData"
import Phone from "../../images/icon-phone.png";
import Mail from "../../images/icon-mail-fill.png"
import LogoSlogan from "../../images/logo-slogan.png";
import "./section-services.scss"

export default function SectionServices () {
    return (
        <div className="section-services" id="section-services">
            <h2 className="section-services__title">Услуги и цени</h2>
            <div className="section-services__content">
                <div className="services">
                    {servicesData.map((service, index) => (
                        <Service key={index} title={service.title} items={service.items} />
                    ))}
                </div>
                <div className="reserve">
                    <h3 className="reserve__title">Запазете своя час при нас!</h3>
                    <div className="reserve__content">
                        <div className="phone">
                            <img className="phone__icon" src={Phone} />
                            <div className="phone__text">Телефон:</div>
                            <a className="phone__tel" href="tel:+359888821747">+359 88 8821747</a>
                        </div>
                        <div className="email">
                            <img className="email__icon" src={Mail} />
                            <div className="email__text">Имейл адрес: </div>
                            <a className="email__to" href="mailto:dz.detailing24@gmail.com">dz.detailing24@gmail.com</a>
                        </div>
                        <img className="logo" src={LogoSlogan} />
                    </div>
                </div>
            </div>
        </div>
    )
}