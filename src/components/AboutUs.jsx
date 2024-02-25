import React from "react";
import image from "../images/maharaj4img.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img src={image} alt="hero" />
          </div>
          <div className="hero-content">
            <p>
              This platform facilitates users in discovering Marathi Kirtankars,
              enabling them to book Kirtankars for specific dates and times.
              Kirtankars have the option to accept or reject invitations, while
              individuals can also apply to become Kirtankars themselves.
              Additionally, the platform provides comprehensive details about
              upcoming booked Kirtans, offering a streamlined experience for
              both organizers and performers alike.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
