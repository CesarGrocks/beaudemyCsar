import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='logo'>Beaudemy</div>
    <ul className='nav-links'>
        <li><link to="/">Inicio</link></li>
        <li><link to="/">Cursos</link></li>
        <li><link to="/">Iniciar sesión</link></li>
        <li><link to="/">Registrate</link></li>
    </ul>
    </nav>
  )
}

export default Navbar;