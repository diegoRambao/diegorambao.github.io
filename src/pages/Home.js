import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import CardOpinion from '../components/CardOpinion';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div className='home-page'>
      <Header />;
      <main>
        <About />
        <Portfolio />
        <CardOpinion
          name='Diego Rambao'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit es aliquam laudantium quam earum dignissimos cupiditate minima, quisquam fugiat veniam voluptates sequi nisi similique sunt quia! Ducimus, cupiditate reiciendis?'
          img='skfkdsjflkdsjfld'
        />
        <Contact />
      </main>
      <footer className='footer'>
        <p>@2020 Diego Rambao | Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default HomePage;
