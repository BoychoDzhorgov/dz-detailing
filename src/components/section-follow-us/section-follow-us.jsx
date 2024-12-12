import React, { useEffect } from "react";
import "./section-follow-us.scss";

export default function SectionFollowUs () { 
    useEffect(() => {
        const scriptId = "EmbedSocialHashtagScript";
        if (!document.getElementById(scriptId)) {
          const script = document.createElement("script");
          script.id = scriptId;
          script.src = "https://embedsocial.com/cdn/ht.js";
          script.async = true;
          document.head.appendChild(script);
        }
      }, []);
    
      return (
        <div className="follow-us-section" id="follow-us">
            <h2 className="section-title">Резултатите от нашата работа</h2>
            <div
                className="embedsocial-hashtag"
                data-ref="c4f680dab4a6efdf4c249b6573092af517ea2dc0"
            >
                <a
                className="feed-powered-by-es feed-powered-by-es-feed-img es-widget-branding"
                href="https://embedsocial.com/social-media-aggregator/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram widget"
                >
                <img
                    src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp"
                    alt="EmbedSocial"
                />
                <div className="es-widget-branding-text">Instagram widget</div>
                </a>
            </div>
        </div>
      );
}
