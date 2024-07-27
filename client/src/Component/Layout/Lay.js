// src/Component/Layout/Lay.js
import React from 'react';
import '../../css/layout.css';
import Navbar from './Nav/Navbar';
import Footer from './Footer/Footer';
import HeroSection from './Hero/HeroSection';

const Lay = (props) => {
  return (
    <div className="layout">
      <Navbar />
      <HeroSection/>
      <main className="main-content">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Lay;
