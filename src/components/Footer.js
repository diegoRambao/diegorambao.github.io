import React from 'react';
import '../assets/css/Footer.css';

import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Con Mucho
        <span role='img' aria-label='heart'>
          💙
        </span>
        por Diego Rambao © 2020
      </p>
      <div className='footer__content-social'>
        <a
          href='https://twitter.com/DiegoRambao'
          className='footer__icon'
          target='_blank'
          rel='noopener noreferrer'>
          <TwitterIcon style={{ fontSize: 38 }} />
        </a>
        <a
          href='https://www.instagram.com/diegorambao/'
          className='footer__icon'
          target='_blank'
          rel='noopener noreferrer'>
          <InstagramIcon style={{ fontSize: 38 }} />
        </a>
        <a
          href='https://www.linkedin.com/in/diego-rambao/'
          className='footer__icon'
          target='_blank'
          rel='noopener noreferrer'>
          <LinkedInIcon style={{ fontSize: 38 }} />
        </a>
        <a
          href='https://www.youtube.com/channel/UCCCcIt7mfZiMqXEYcWS7xbw'
          className='footer__icon'
          target='_blank'
          rel='noopener noreferrer'>
          <YouTubeIcon style={{ fontSize: 38 }} />
        </a>
        <a
          href='https://github.com/diegorambao'
          className='footer__icon'
          target='_blank'
          rel='noopener noreferrer'>
          <GitHubIcon style={{ fontSize: 38 }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
