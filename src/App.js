import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./components/landing/Home";
import { Skills } from "./components/skills/Skills";
import { Languages } from "./components/languages/Languages";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import Project from './components/projects/Projects';
import { About } from './components/about/About';
import { useState } from 'react';


const App = () => {



  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Languages />
      <Project />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
