import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../blocks/Header.css";
import instagram from "../images/instagram-logo.svg";
import linkedin from "../images/linkedin-logo.svg";
import github from "../images/github-logo.svg";
import gmail from "../images/gmail-logo.svg";
import aplogo from "../images/ap-logo.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-image" src={aplogo} alt="AP" />
      </div>

      <ul className="header__nav">
        <li>
          <Link to="/about" className="header__links">
            About
          </Link>
        </li>
        <li>
          <a className="header__links" href="">
            Projects
          </a>
        </li>
        <li>
          <a className="header__links" href="">
            Languages
          </a>
        </li>
        <li>
          <a className="header__links" href="">
            Contact
          </a>
        </li>
      </ul>

      <div className="header__social">
        <a
          className=""
          href="https://www.linkedin.com/in/austinp-tech/"
          target="_blank"
        >
          <img className="linkedin__logo" alt="LinkedIn" src={linkedin} />
        </a>
        <a
          className=""
          href="https://github.com/austinpendleton"
          target="_blank"
        >
          <img className="github__logo" alt="GitHub" src={github} />
        </a>
        <a
          className=""
          href="https://www.instagram.com/austinpendleton/"
          target="_blank"
        >
          <img className="instagram__logo" alt="Instagram" src={instagram} />
        </a>
      </div>
    </header>
  );
};

export default Header;
