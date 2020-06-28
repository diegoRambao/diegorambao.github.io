import React from 'react';
import Project from './Project';

const Portfolio = () => {
  return (
    <section className='porfolio'>
      <div className='title'>
        <h2 className='title__text'>Portafolio</h2>
      </div>

      <div className='porfolio__container-card'>
        <Project
          name='Sistema de facturacion'
          description='El sistema de facturacion gestiona todos los procesos invulucrados en una empresa como la compra y venta de productos'
          img='src//img'
        />
        <Project
          name='Sistema de facturacion'
          description='El sistema de facturacion gestiona todos los procesos invulucrados en una empresa como la compra y venta de productos'
          img='src//img'
        />
        <Project
          name='Sistema de facturacion'
          description='El sistema de facturacion gestiona todos los procesos invulucrados en una empresa como la compra y venta de productos'
          img='src//img'
        />
      </div>
    </section>
  );
};

export default Portfolio;
