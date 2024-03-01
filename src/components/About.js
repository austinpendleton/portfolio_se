import React from "react";
import "../blocks/About.css";
import osu from "../images/osu-logo.png";
import physiq from "../images/physiq.png";
import seahawks from "../images/seahawks-logo.png";

import fenway from "../images/fenway-edited.png";
const About = () => {
  return (
    <section className="about">
      <div className="about__title ">
        <h1 className="about__title-text">About Me</h1>
      </div>
      <div className="about__container">
        <img src={fenway} alt="Fenway Park" className="about__image" />

        <div className="about__paragraph ">
          <p className="about__paragraph-text">
            I'm currently based in the Salt Lake City area but originally from
            near Portland, Oregon, where my love for sports and fitness began. I
            pursued this passion at Oregon State University, earning a degree in
            Kinesiology. After gaining four years of professional experience, I
            felt a need for more creativity and consistent challenges, which led
            me to discover coding. Realizing this was my calling, I opted for a
            bootcamp over traditional university education to further my skills.
            Now, I'm eager to contribute to cutting-edge innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
