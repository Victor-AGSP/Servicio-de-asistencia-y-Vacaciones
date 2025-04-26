// src/pages/Perfil.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext'; // Importamos el contexto

const Perfil = () => {
  const { usuario } = useAuth(); // Obtenemos los datos del usuario desde el contexto

  if (!usuario) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Arial, sans-serif', color: '#555' }}>
        <h2>🚫 No estás logueado.</h2>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '3rem 1rem' }}>
      
      {/* Contenedor principal */}
      <div style={{ maxWidth: '700px', margin: '0 auto', backgroundColor: '#fff', padding: '3rem 2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        
        {/* Título */}
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#3f51b5' }}>👤 Mi Perfil</h1>

        {/* Línea separadora */}
        <div style={{ height: '3px', width: '60px', backgroundColor: '#3f51b5', margin: '0 auto 2rem auto', borderRadius: '2px' }}></div>

        {/* Información del usuario */}
        <div style={{ display: 'grid', gap: '1.5rem', fontSize: '1.1rem', color: '#333' }}>
          <div>
            <strong style={{ color: '#666' }}>Nombre:</strong> <br /> {usuario.nombre}
          </div>
          <div>
            <strong style={{ color: '#666' }}>Correo electrónico:</strong> <br /> {usuario.correo}
          </div>
          <div>
            <strong style={{ color: '#666' }}>Puesto:</strong> <br /> {usuario.puesto}
          </div>
          <div>
            <strong style={{ color: '#666' }}>Departamento:</strong> <br /> {usuario.departamento}
          </div>
          <div>
            <strong style={{ color: '#666' }}>Fecha de ingreso:</strong> <br /> {usuario.fechaIngreso}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Perfil;
