import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <About/>
      <Skills />
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
