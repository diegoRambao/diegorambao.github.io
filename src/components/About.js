import React from 'react';
import Button from './Button';

import '../assets/css/About.css';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='about__container'>
          <div className='title'>
            <h2 className='title__text'>Acerca de mi</h2>
          </div>
          <div className='about__content'>
            <p className='about__description'>
              Soy desarrollador de software y deseñador UI/UX colombiano que
              vive en el departamento del Atlantico.
            </p>

            <p className='about__description'>
              Mi conocimiento gira entorno al desarrollo de aplicaciones web y
              del lado del servidor, especificamente escritas en Node, Laravel,
              React y Vuejs.
            </p>
            <Button name='Descargar CV' link='' icon='cloud_download' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
