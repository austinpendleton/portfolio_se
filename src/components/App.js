import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
