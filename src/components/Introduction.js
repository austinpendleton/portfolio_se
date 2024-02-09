import React from "react";
import "../blocks/Introduction.css";
import nobackgroundpic from "../images/nobackgroundpic.png";

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="name__wrapper">
        <h1 className="name__text">Austin Pendleton</h1>
      </div>
      <div className="introduction__picture">
        <img
          src={nobackgroundpic}
          alt="Myself"
          className="introduction__image"
        />
      </div>
      <div className="title__wrapper">
        <h2 className="title__text">Web Developer</h2>
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
