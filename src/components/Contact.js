import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';

import '../assets/css/Contact.css';
const Contact = () => {
  return (
    <section className='contact'>
      <div className='container'>
        <div className='contact__container'>
          <div className='contact__title'>
            <div className='title title--contact-center'>
              <h2 className='title__text'>Contactame</h2>
            </div>
            <p className='title__description title__description--margin'>
              Me encantaría que me contactaras. Incluso si es solo para decir
              "!Hola!". ¡Envíame un mensaje y te responderé lo antes posible!
            </p>
          </div>
          <div className='contact__content'>
            <a
              href='mailto: diegoandrestrom04@gmail.com'
              className='boton boton--red'>
              <EmailIcon />
              <span className='boton__text'>Email</span>
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=3003086333&text=Hola quisiera contactar a Diego Rambao'
              className='boton boton--green'>
              <WhatsAppIcon />
              <span className='boton__text'>Whatsapp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
