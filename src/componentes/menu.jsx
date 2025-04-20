import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem', color: 'white' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li><Link to="/" style={{ color: 'white' }}>Inicio</Link></li>
        <li><Link to="/asistencia" style={{ color: 'white' }}>Asistencia</Link></li>
        <li><Link to="/login" style={{ color: 'white' }}>Iniciar Sesion</Link></li>
        <li><Link to="/about" style={{ color: 'white' }}>About</Link></li>
        <li><Link to="/perfil" style={{ color: 'white' }}>Perfil</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
