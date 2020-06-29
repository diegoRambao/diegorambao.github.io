import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='home-page'>
      <Header />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
