import React from 'react';
import MaterialIcon, { colorPalette } from 'material-icons-react';

import '../assets/css/Button.css';

const Button = ({ name, link, icon }) => {
  return (
    <a href={link} className='button'>
      <MaterialIcon icon={icon} color='#ffffff' />
      <span className='button__text'>{name}</span>
    </a>
  );
};

export default Button;
