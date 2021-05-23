import React from 'react';
import './App.css';
import {Header} from './Components/Header';
import {Home} from './Components/home';
import {About} from './Components/About';
import {Services} from './Components/Services';
import {Samples} from './Components/Samples';
import {CaseStudies} from './Components/CaseStudies';
import {Footer} from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <About />
      <Samples />
      <CaseStudies />
      <Footer />
    </>
  );
}

export default App;
