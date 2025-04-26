import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Menu = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem', color: 'white' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li><Link to="/" style={{ color: 'white' }}>Inicio</Link></li>
        {!isLoggedIn && (
          <li><Link to="/login" style={{ color: 'white' }}>Iniciar Sesion</Link></li>
        )}
        <li><Link to="/about" style={{ color: 'white' }}>About</Link></li>
        {isLoggedIn && (
          <>
            <li><Link to="/asistencia" style={{ color: 'white' }}>Asistencia</Link></li>
            <li><Link to="/vacaciones" style={{ color: 'white' }}>Vacaciones</Link></li>
            <li><Link to="/perfil" style={{ color: 'white' }}>Perfil</Link></li>
            <li><Link to="/log-out" style={{ color: 'white' }}>Log Out</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
