import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Title from "./Components/Title/Title";
import Contact from "./Components/Contact/Contact";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Title />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
