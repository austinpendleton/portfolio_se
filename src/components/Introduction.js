import React from "react";
import "../blocks/Introduction.css";
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
    </section>
  );
};

export default Introduction;
