import React from 'react';

import '../assets/css/About.css';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='about__container'>
          <div className='title about__title title--buttom'>
            <h2 className='title__text'>Acerca de mi</h2>
          </div>
          <div className='about__content'>
            <p className='about__description'>
              Soy Diego, un amante del café{' '}
              <span role='img' aria-label='coffee'>
                ☕
              </span>
              , desarrollador web y desañador UI/UX,
              <span role='img' aria-label='computer'>
                💻
              </span>
              con una sólida formación educativa en tecnología de la información
            </p>

            <p className='about__description'>
              Comencé a crear diseños web usando HTML y CSS en 2016. Soy un
              entusiasta de JavaScript y laravel, extremadamente apasionado por
              la codificación. Me encanta aprender cosas nuevas todos los días y
              estar al día con las nuevas tecnologías
              <span role='img' aria-label='heart'>
                💙
              </span>
              .
            </p>
            {/* <Button name='Descargar CV' link='' icon='cloud_download' /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
