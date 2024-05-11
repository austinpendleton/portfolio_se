import wtwr from "../images/wtwr-project.png";
import golf from "../images/golf-app.png";
import slopopedia from "../images/slopopedia.png";
import "../blocks/Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__title">
        <h1 className="projects__title-text">Projects</h1>
      </div>
      <div className="projects__container">
        <div className="projects__wtwr-container">
          <div className="wtwr__container">
            <h1 className="image__title">What To Wear</h1>
            <img className="wtwr__image" src={wtwr} alt="WTWR app" />
          </div>
          <a
            className="link__to-repo"
            href="https://github.com/austinpendleton/se_project_react"
          >
            <p className="repo__link">Link to Repository</p>
          </a>
          <div className="projects__wtwr-paragraph">
            <p className="projects__wtwr-paragraph-text">
              An app to help you decide what to wear based on current weather
              conditions in your area.
            </p>
            <ul className="wtwr__list">
              <li className="wtwr__list-item">React</li>
              <li className="wtwr__list-item">JavaScript</li>
              <li className="wtwr__list-item">HTML</li>
              <li className="wtwr__list-item">CSS</li>
              <li className="wtwr__list-item">API</li>
              <li className="wtwr__list-item">Google Cloud</li>
            </ul>
          </div>
        </div>
        <div className="projects__golf-container">
          <div className="golf__container">
            <h1 className="image__title">I Can Hit That Far</h1>
            <img className="golf__image" src={golf} alt="golf app" />
            <a
              className="link__to-repo"
              href="https://github.com/austinpendleton/hit_that_far_golf"
            >
              <p className="repo__link">Link to Repository</p>
            </a>
          </div>
          <div className="projects__golf-paragraph">
            <p className="projects__golf-paragraph-text">
              An app to help you decide what club in your bag to use while out
              golfing.
            </p>
            <ul className="golf__list">
              <li className="golf__list-item">React</li>
              <li className="golf__list-item">JavaScript</li>
              <li className="golf__list-item">HTML</li>
              <li className="golf__list-item">CSS</li>
              <li className="golf__list-item">Express</li>
            </ul>
          </div>
        </div>
        <div className="projects__slop-container">
          <div className="slop__container">
            <h1 className="image__title">Slopopedia</h1>
            <img className="slop__image" src={slopopedia} alt="Slopopedia" />
            <a
              className="link__to-repo"
              href="https://github.com/jahorwitz/slopopedia"
            >
              <p className="repo__link">Link to Repository</p>
            </a>
          </div>
          <div className="projects__slop-paragraph">
            <p className="projects__slop-paragraph-text">
              A Wikipedia-style app with some networking features for low
              budget, poorly rated films which are often overlooked.
            </p>
            <ul className="slop__list">
              <li className="slop__list-item">React</li>
              <li className="slop__list-item">JavaScript</li>
              <li className="slop__list-item">Tailwind</li>
              <li className="slop__list-item">Storybook</li>
              <li className="slop__list-item">Jira</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
