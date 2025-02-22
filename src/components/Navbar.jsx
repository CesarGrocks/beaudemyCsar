import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='logo'>Beaudemy</div>
    <ul className='nav-links'>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/">Cursos</Link></li>
        <li><Link to="/">Iniciar sesión</Link></li>
        <li><Link to="/">Registrate</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar;