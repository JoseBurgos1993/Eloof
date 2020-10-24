import React, { Component } from 'react'
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import About from '../components/About';

const Homepage = () => {
  return(
    <div>
      <Landing />
      <About />
      <Footer />
    </div>
  );
}

export default Homepage;