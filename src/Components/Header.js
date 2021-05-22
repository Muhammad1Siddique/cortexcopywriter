import React from 'react'
import {Navbar} from './Navbar';
import {Home} from './home';
import {Services} from './Services';
import {About} from './About';
import {Samples} from './Samples';

export const Header = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <Services/>
      <About />
      <Samples />
    </div>
  )
}
