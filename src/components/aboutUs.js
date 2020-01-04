import React from "react";
import About from "../img/tea1.jpg";

const AboutUs = () => {
  return (
    <div class="about">
      <div class="section-center clearfix">
        <div class="about-img">
          <div class="about-picture-container">
            <img src={About} alt="tea kettle" class="about-picture" />
          </div>
        </div>

        <div class="about-info">
          <div>
            <h3 class="section-subtitle">About US</h3>
            <h2 class="section-title">tea station</h2>
          </div>

          <p class="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti, dolores.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corrupti, dolores.
          </p>
          <p class="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti, dolores.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corrupti, dolores.
          </p>
          <a href="about.html" class="main-btn">
            learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
