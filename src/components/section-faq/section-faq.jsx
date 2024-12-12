import Faq from "../faq/faq"
import faqData from "../../data/faqData"
import "./section-faq.scss";

export default function SectionFaq () {
    return (
        <div className="section-faq" id="faqs">
            <h2 className="section-faq__title">Често задавани въпроси</h2>
            <div className="section-faq__content">
                <div className="faqs">
                    {faqData.map((service, index) => (
                        <Faq key={index} title={service.title} text={service.text} />
                    ))}
                </div>
            </div>
        </div>
    )
}