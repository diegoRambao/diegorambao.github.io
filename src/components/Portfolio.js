import React from 'react';
import Project from './Project';

import '../assets/css/Portfolio.css';
import dashboard1 from '../assets/img/dashboard.jpg';

const Portfolio = () => {
  return (
    <section className='porfolio'>
      <div className='container'>
        <div className='title title-center'>
          <h2 className='title__text'>Portafolio</h2>
          <p className='title__description'>
            Estos son algunos de mis proyectos recientes
          </p>
        </div>

        <div className='porfolio__container-card'>
          <Project
            name='Sistema de facturacion'
            description='El sistema de facturacion gestiona todos los procesos invulucrados en una empresa como la compra y venta de productos'
            img={dashboard1}
          />
          <Project
            name='Sistema de facturacion'
            description='El sistema de facturacion gestiona todos los procesos invulucrados en una empresa como la compra y venta de productos'
            img={dashboard1}
          />
          <Project
            name='Sistema de facturacion'
            description='El sistema de facturacion gestiona todos los procesos invulucrados en una empresa como la compra y venta de productos'
            img={dashboard1}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
