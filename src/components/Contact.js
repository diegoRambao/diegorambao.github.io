import React from 'react';

const Contact = () => {
  return (
    <section className='contact'>
      <div className='contact__title'>
        <div className='title'>
          <h2 className='title__text'>Contactame</h2>
        </div>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className='contact__content'>
        <a href='' className='boton'>
          <i className='boton__icon'></i>
          <span className='boton__text'>Whatsapp</span>
        </a>
        <a href='' className='boton'>
          <i className='boton__icon'></i>
          <span className='boton__text'>Email</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
