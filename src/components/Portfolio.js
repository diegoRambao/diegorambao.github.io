import React from 'react';
import Project from './Project';

import '../assets/css/Portfolio.css';
import project1 from '../assets/img/project1.jpeg';
import project2 from '../assets/img/project2.png';

const Portfolio = () => {
  return (
    <section className='porfolio' id='portfolio'>
      <div className='container'>
        <div className='title title-center'>
          <h2 className='title__text'>Portafolio</h2>
          <p className='title__description'>
            Estos son algunos de mis proyectos recientes
          </p>
        </div>

        <div className='porfolio__container-card'>
          <Project
            name='Cat Dog'
            description='Cat dog es un proyecto personal el cual permite a las personas poder dar en adocción a mascotas y tambien por medio de la pagina poder adoctar a una mascota.'
            img={project1}
          />
          <Project
            name='Sistema de facturación'
            description='Es un sistema que gestiona los procesos de inventario, venta, compra de las mypimes'
            img={project2}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
