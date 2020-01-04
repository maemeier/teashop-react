import React from "react";
import About from "../img/tea1.jpg";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="section-center clearfix">
        <div className="about-img">
          <div className="about-picture-container">
            <img src={About} alt="tea" className="about-picture" />
          </div>

          <article className="about-info">
            <div>
              <h3 className="section-subtitle">ABout Us</h3>
              <h2 className="section-title">Tea station</h2>
            </div>
            <p className="about-text">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>

            <p className="about-text">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <a href="about.html" className="main-btn">
              {" "}
              learn more
            </a>
          </article>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
