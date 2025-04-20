// src/pages/Perfil.jsx
import React from 'react';

const Perfil = () => {
  const usuarioEjemplo = {
    nombre: 'Victor Sepúlveda Parra',
    correo: 'victor@example.com',
    puesto: 'Desarrollador Frontend',
    departamento: 'Tecnología',
    fechaIngreso: '15/03/2023',
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>👤 Mi Perfil</h1>
      <div style={{ marginTop: '1.5rem', backgroundColor: '#f5f5f5', padding: '1.5rem', borderRadius: '8px' }}>
        <p><strong>Nombre:</strong> {usuarioEjemplo.nombre}</p>
        <p><strong>Correo electrónico:</strong> {usuarioEjemplo.correo}</p>
        <p><strong>Puesto:</strong> {usuarioEjemplo.puesto}</p>
        <p><strong>Departamento:</strong> {usuarioEjemplo.departamento}</p>
        <p><strong>Fecha de ingreso:</strong> {usuarioEjemplo.fechaIngreso}</p>
      </div>
    </div>
  );
};

export default Perfil;
