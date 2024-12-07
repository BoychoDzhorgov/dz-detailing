import "./section-introduction.scss"
import QualityIcon from "../../images/best-quality-icon.svg";
import HandShakeIcon from "../../images/hand-shake-icon.svg";
import VanIcon from "../../images/van-icon.svg"

export default function SectionIntroduction () {
    
    return (
        <div className="section-introduction">
            <div className="intro-cards">
                <div className="card">
                <div className="icon-wrapper">
                        <img className="icon" src={VanIcon} />
                    </div>
                    <div className="title">Изцяло мобилна услуга</div>
                    <div className="description">Извършваме услугата си на удобен за клиента адрес</div>
                </div>
                <div className="card">
                    <div className="icon-wrapper">
                        <img className="icon" src={QualityIcon} />
                    </div>
                    <div className="title">Високо качество</div>
                    <div className="description">Използваме висококачествени и доказани продукти</div>
                </div>
                <div className="card">
                <div className="icon-wrapper">
                        <img className="icon" src={HandShakeIcon} />
                    </div>
                    <div className="title">Отговорност</div>
                    <div className="description">Грижата за вашия автомобил е изцяло наша отговорност</div>
                </div>
            </div>
        </div>
    )
}