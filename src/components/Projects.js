import wtwr from "../images/wtwr-project.png";
import "../blocks/Projects.css";
const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__title">
        <h1 className="projects__title-text">Projects</h1>
      </div>
      <div className="projects__wtwr-paragraph">
        <p className="projects__wtwr-paragraph-text">
          An app to help you decide what to wear based on current weather
          conditions in your area.
        </p>
      </div>
      <ul className="wtwr__list">
        <li className="wtwr__list-item">React</li>
        <li className="wtwr__list-item">JavaScript</li>
        <li className="wtwr__list-item">HTML</li>
        <li className="wtwr__list-item">CSS</li>
        <li className="wtwr__list-item">API</li>
        <li className="wtwr__list-item">Google Cloud</li>
      </ul>
      <div className="wtwr__container">
        <h1 className="image__title">What To Wear</h1>
        <img className="wtwr__image" src={wtwr} alt="WTWR app" />
      </div>
    </section>
  );
};

export default Projects;
