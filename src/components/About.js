import React from "react";
import "../blocks/About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about__title ">
        <h1 className="about__title-text">About Me</h1>
      </div>

      <div className="about__paragraph ">
        <p className="about__paragraph-text">
          I currently live in the Salt Lake City area but grew up near Portland,
          Oregon with a passion for sports and fitness. These passions stayed
          with me as I attended Oregon State University and recieved a degree in
          Kinesiology. After four years of professional experience, I realized
          there was something I was missing in my career. I was missing out on
          the ability to be creative as well as the consistent challenges that I
          found when I discovered coding. Thats when I knew, this is what I
          wanted to do. After having already gone through the University route I
          decided taking a bootcamp would be a better option for myself. Here
          are some projects that highlight what I have learned:
        </p>
      </div>

      {/* <div class="things-about">
        <div class="content-about">
          <div class="arrow-about">
            <div class="curve-about"></div>
            <div class="point-about"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default About;
