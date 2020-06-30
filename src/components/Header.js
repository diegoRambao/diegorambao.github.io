import React from 'react';
import Button from './Button';

import '../assets/css/Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__container-logo'>
          <img
            src={require('../assets/img/icon.png')}
            alt=''
            className='header__logo'
          />
        </div>
        <div className='header__container-title'>
          <h1 className='header__title'>
            Hola
            <br />
            Soy Diego.
          </h1>

          <p className='header__description'>
            !Bienvenido a mi sitio web! <br /> Soy Desarrollador web y diseñador
            UI/UX, listo para llevar tus proyectos al siguiente nivel
          </p>
          <Button name='Ver portafolio' link='#portfolio' icon='card_travel' />
        </div>
      </div>
    </header>
  );
};

export default Header;
