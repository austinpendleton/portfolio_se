import React from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import About from "./About";
import Languages from "./Languages";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <About />

      <Projects />
      <Languages />
      <ContactForm />

      <Footer />
    </div>
  );
}

export default App;
