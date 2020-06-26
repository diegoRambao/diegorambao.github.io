import React from 'react';
import Button from './Button';

const About = () => {
  return (
    <section className='about'>
      <div className='about__container'>
        <div className='title'>
          <h2 className='title__text'></h2>
          <hr className='title__line' />
        </div>
        <div className='about__content'>
          <p className='about__description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            maiores in possimus! Quis adipisci expedita, ex corporis
            perspiciatis illum excepturi? Cum aliquam corporis vitae rerum
            corrupti enim minus, fugit laboriosam.
          </p>
          <Button btnColor='#000' name='Descargar CV' link='#ffff' />
        </div>
      </div>
    </section>
  );
};

export default About;
