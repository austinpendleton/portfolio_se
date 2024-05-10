import React from "react";
import "../blocks/Introduction.css";
import portfolioheadshot from "../images/portfolio_headshot.png";
import portfolioheadshotbackground from "../images/headshot_withbackground.jpeg";

const Introduction = () => {
  return (
    <section className="introduction" id="intro">
      <div className="name__wrapper">
        <h1 className="name__text">Austin Pendleton</h1>
      </div>
      <div className="introduction__picture">
        <img
          src={portfolioheadshotbackground}
          alt="Myself"
          className="introduction__image"
        />
      </div>
      <div className="title__wrapper">
        <h2 className="title__text">Software Engineer</h2>
      </div>

      {/* <div class="things">
        <div class="content">
          <div class="arrow">
            <div class="curve"></div>
            <div class="point"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Introduction;
