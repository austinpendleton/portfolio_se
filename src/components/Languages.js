import html from "../images/html.svg";
import css from "../images/css.svg";
import python from "../images/python.svg";
import vscode from "../images/visual-studio-code.svg";
import mongodb from "../images/mongodb.png";
import node from "../images/nodejs.svg";
import webpack from "../images/webpack.svg";
import postman from "../images/postman.svg";
import restapi from "../images/restapi.png";
import git from "../images/git.svg";
import javascript from "../images/java-script.svg";
import reactlogo from "../images/react.svg";
import googlecloud from "../images/googlecloud.svg";
import figma from "../images/figma.svg";
import express from "../images/express.png";
import jira from "../images/jira.svg";
import storybook from "../images/storybook.svg";
import tailwind from "../images/tailwind.svg";

import "../blocks/Languages.css";

const Languages = () => {
  return (
    <section className="languages">
      <div className="languages__title">
        <h1 className="languages__title-text">Languages</h1>
      </div>
      <div className="languages__paragraph">
        <p className="languages__paragraph-text">
          These are some of the coding languages and programs I feel comfortable
          with.
        </p>
      </div>
      <div className="languages__list">
        <img src={html} alt="HTML" className="languages__images" />

        <img src={css} alt="CSS" className="languages__images" />

        <img src={javascript} alt="JavaScript" className="languages__images" />

        <img src={python} alt="Python" className="languages__images" />

        <img src={node} alt="Node" className="languages__images" />

        <img src={vscode} alt="VsCode" className="languages__images" />

        <img src={mongodb} alt="MongoDB" className="languages__images" />

        <img src={git} alt="Git" className="languages__images" />

        <img src={express} alt="Express" className="languages__images" />

        <img src={restapi} alt="Rest API" className="languages__images" />

        <img src={figma} alt="Figma" className="languages__images" />

        <img src={webpack} alt="Webpack" className="languages__images" />

        <img src={reactlogo} alt="React" className="languages__images" />

        <img
          src={googlecloud}
          alt="Google Cloud"
          className="languages__images"
        />

        <img src={postman} alt="Postman" className="languages__images" />
        <img src={jira} alt="React" className="languages__images" />
        <img src={tailwind} alt="React" className="languages__images" />
        <img
          src={storybook}
          alt="React"
          className="languages__images-storybook languages__images"
        />
      </div>
    </section>
  );
};
export default Languages;
