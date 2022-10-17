import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Bot from "../components/Bot";
import Contact from "../components/Contact";
import Hero from "../components/Hero/Hero";
import Hireme from "../components/Hireme";
import Project from "../components/Project/Project";
import Skills from "../components/Skills";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/hireme" element={<Hireme />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
