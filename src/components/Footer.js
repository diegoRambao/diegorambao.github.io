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
      <p className='footer__text'>Con Mucho 💙 por Diego Rambao © 2020</p>
      <div className='footer__content-social'>
        <a
          href='https://twitter.com/DiegoRambao'
          className='footer__icon'
          target='_blank'>
          <TwitterIcon style={{ fontSize: 38 }} />
        </a>
        <a
          href='https://www.instagram.com/diegorambao/'
          className='footer__icon'
          target='_blank'>
          <InstagramIcon style={{ fontSize: 38 }} />
        </a>
        <a
          href='https://www.linkedin.com/in/diego-rambao/'
          className='footer__icon'
          target='_blank'>
          <LinkedInIcon style={{ fontSize: 38 }} />
        </a>
        <a
          href='https://www.youtube.com/channel/UCCCcIt7mfZiMqXEYcWS7xbw'
          className='footer__icon'
          target='_blank'>
          <YouTubeIcon style={{ fontSize: 38 }} />
        </a>
        <a
          href='https://github.com/diegorambao'
          className='footer__icon'
          target='_blank'>
          <GitHubIcon style={{ fontSize: 38 }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
