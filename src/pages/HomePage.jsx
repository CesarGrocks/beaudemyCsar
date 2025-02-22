import React from 'react';
import Navbar from '../components/Navbar';
import './styles/HomePage.css';

const HomePage = () => {


  return (
    <div className='homepage'>
    <Navbar />
    <header className='hero'>
      <div className='hero-content'>
        <h1>Bienvenid@ a Beaudemy</h1>
        <p>Tú academia online de extensiones de pestañas</p>
        <button className='cta-button'>Explota nuestros cursos</button>
      </div>
    </header>
    </div>
  );
};

export default HomePage;