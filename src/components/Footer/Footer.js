import React from 'react';
import facebook from '../Assets/icons8-facebook.svg'
import youtube from '../Assets/icons8-youtube.svg';
import spotify from "../Assets/icons8-spotify-481.png"
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer_main}>
        <span>
            The Generics
        </span>
        <span>
          <img src={facebook} alt='logo'></img>
          <img src={spotify} alt="logo"></img>
          <img src={youtube} alt="logo"></img>
          </span>
    </footer>
  );
}

export default Footer;