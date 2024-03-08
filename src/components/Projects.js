import wtwr from "../images/wtwr-project.png";
import golf from "../images/golf-app.png";
import slopopedia from "../images/slopopedia.png";
import "../blocks/Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__title">
        <h1 className="projects__title-text">Projects</h1>
      </div>
      <div className="projects__container">
        <div className="projects__wtwr-container">
          <div className="wtwr__container">
            <h1 className="image__title">What To Wear</h1>
            <img className="wtwr__image" src={wtwr} alt="WTWR app" />
          </div>
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
              <li className="golf__list-item">Google Cloud</li>
            </ul>
          </div>
        </div>
        <div className="projects__slop-container">
          <div className="slop__container">
            <h1 className="image__title">Slopopedia</h1>
            <img className="slop__image" src={slopopedia} alt="Slopopedia" />
          </div>
          <div className="projects__slop-paragraph">
            <p className="projects__slop-paragraph-text">
              Contributed to the full software development lifecycle in a remote
              setting
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
