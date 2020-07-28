import React from 'react';
import './index.css'
import Logo from '../../assets/img/GUSFLIX_RED.png'
import ButtonLink from '../components/ButtonLink'

function Menu() {
  return (
    <nav className="Menu">
    <a href="/">
      <img className="Logo" src={Logo} alt="GusFlix logo" />
    </a>
    <ButtonLink className="ButtonLink" href="/">
      Novo vídeo
    </ButtonLink>
    </nav>
  )
} 

export default Menu;

