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
          With the guidance of my bootcamp, we created this app called What To
          Wear. This app lets the user add clothing items and classify the
          weather type that is most appropriate for the clothing item. Then
          bases on the users location, the app is able to gather their current
          weather conditions and reccommend what to wear using the clothing
          items they added. We used react code, created an API, wrote backend
          code using Express, and deployed it via Google Cloud.
        </p>
      </div>
      <div className="wtwr__container">
        <h1 className="image__title">What To Wear</h1>
        <img className="wtwr__image" src={wtwr} alt="WTWR app" />
      </div>
    </section>
  );
};

export default Projects;
