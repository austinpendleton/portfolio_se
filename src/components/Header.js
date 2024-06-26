import React from "react";
import "../blocks/Header.css";
import linkedin from "../images/linkedin-logo.svg";
import github from "../images/github-logo.svg";
import aplogo from "../images/ap-logo.svg";
import myresume from "../../src/Resume 2.0.pdf";

const Header = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");

    link.href = myresume;

    link.download = "AustinPendletonResume.pdf";

    link.click();
  };

  return (
    <header className="header">
      <a className="header__logo" href="#intro">
        <img className="header__logo-image" src={aplogo} alt="AP" />
      </a>

      <div className="header__nav">
        <a href="#about" className="header__links">
          About
        </a>

        <a href="#projects" className="header__links">
          Projects
        </a>

        <a className="header__links" href="#skills">
          Skills
        </a>

        <a to="contact" className="header__links" href="#contact">
          Contact
        </a>
      </div>

      <div className="header__social">
        <a
          className=""
          href="https://www.linkedin.com/in/austinp-tech/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="linkedin__logo" alt="LinkedIn" src={linkedin} />
        </a>
        <a
          className=""
          href="https://github.com/austinpendleton"
          target="_blank"
          rel="noreferrer"
        >
          <img className="github__logo" alt="GitHub" src={github} />
        </a>
        <div className="resume__button-container">
          <button className="resume__button" onClick={handleResumeDownload}>
            Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
