import React from "react";
import "../blocks/About.css";
import fenway from "../images/fenway-edited.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__title ">
        <h1 className="about__title-text">About Me</h1>
      </div>
      <div className="about__container">
        <img src={fenway} alt="Fenway Park" className="about__image" />

        <div className="about__paragraph ">
          <p className="about__paragraph-text">
            I'm a software engineer based in the Salt Lake City area with roots
            tracing back to Portland, Oregon, where my passion for sports and
            fitness first took flight. Graduating with a degree in Kinesiology
            from Oregon State University provided me with a solid understanding
            of human movement and laid the groundwork for my journey into the
            world of software engineering.
          </p>
          <p className="about__paragraph-text">
            Over four years of professional experience has helped me cultivate a
            knack for problem-solving and develop a keen eye for detail.
            However, my thirst for creativity and a desire for consistent
            challenges led me to discover coding. Recognizing this as my true
            calling I embarked on a coding bootcamp journey to further sharpen
            my skills.
          </p>
          <p className="about__paragraph-text">
            Now, armed with a diverse background and a fresh perspective I'm
            eager to contribute to cutting-edge innovation in the tech industry.
            I thrive on tackling complex problems and am excited about the
            possibilities that lie ahead in this dynamic field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
