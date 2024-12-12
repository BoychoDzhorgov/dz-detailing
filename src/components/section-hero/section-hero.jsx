import "./section-hero.scss";
import { useIsMobile } from "../../hooks/use-mobile";
import CoverPhoto from "../../images/cover-1.jpg";
import CoverPhotoMobile from "../../images/cover-mobile-1.jpg"

export default function SectionHero () {
    const isMobile = useIsMobile();
    
    return (
        <div className="section-hero" id="hero">
            {isMobile ? (
                <img src={CoverPhotoMobile} />
            ) : (
                <img src={CoverPhoto} />
            )}
        </div>
    )
}