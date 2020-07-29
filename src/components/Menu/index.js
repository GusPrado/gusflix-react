import React from 'react';
import { Link } from 'react-router-dom'
import './index.css'
import Logo from '../../assets/img/GUSFLIX_RED.png'
import Button from '../Button'

function Menu() {
  return (  
    <nav className="Menu">
    <Link to="/">     
      <img className="Logo" src={Logo} alt="GusFlix logo" />
    </Link>
    <Button as={Link} className="ButtonLink" to="/cadastro/video">
      Novo vídeo
    </Button>
    </nav>
  )
} 

export default Menu;

