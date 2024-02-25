import React from "react";
import image from "../images/maharajimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          "तुमची सेवा, <br />
          &emsp;&emsp; आमचा धर्म"
        </h1>

        <p>
          {/* मराठी कीर्तन हा मराठी सांस्कृतिक पद्धतीतील एक आध्यात्मिक साहित्यिक
          गोष्टीचा एक अत्यंत महत्त्वाचा भाग आहे. ह्या कलेचे संगीतमय आणि उत्कृष्ट
          शैली आणि त्याचे पात्र, ध्येय आणि सन्देश याची विशेषता आहे. मराठी
          कीर्तनात आम्ही आमच्या प्राचीन धार्मिक संस्कृतीच्या भावना, भक्तिभावना
          आणि संगीताच्या सामर्थ्याने रसिकांना तत्त्वज्ञानात घेऊन जातो.
          कीर्तनाच्या पद्धतीचा मुख्य उद्देश देवाच्या स्मरणात आणि उपासनेत लोकांना
          समर्पित करणे आहे| */}
          Marathi Kirtan is an integral part of Marathi cultural tradition,
          embodying spiritual and literary narratives of profound significance.
          It features a musical and eloquent style, along with its distinctive
          characters, themes, and messages.
        </p>
      </div>
      <div className="hero-img">
        <img src={image} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
