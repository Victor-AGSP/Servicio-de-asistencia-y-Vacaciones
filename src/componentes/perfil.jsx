// src/pages/Perfil.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
  const { usuario } = useAuth();
  const navigate = useNavigate();

  if (!usuario) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Arial, sans-serif', color: '#555' }}>
        <h2>🚫 No estás logueado.</h2>
      </div>
    );
  }

  const esJefe = usuario.puesto?.toLowerCase() === 'jefe';

  const botonesAdmin = [
    { label: '📅 Vacaciones (Admin)', ruta: '/vacaciones-admin' },
    { label: '✅ Asistencia (Admin)', ruta: '/asistencia-admin' },
    { label: '👥 Gestión de Empleados', ruta: '/empleados' },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '3rem 1rem' }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '3rem 2rem',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
      }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.7rem', marginBottom: '1.5rem', color: '#3f51b5' }}>👤 Mi Perfil</h1>
        <div style={{
          height: '4px',
          width: '70px',
          backgroundColor: '#3f51b5',
          margin: '0 auto 2rem auto',
          borderRadius: '3px'
        }}></div>

        <div style={{ display: 'grid', gap: '1.5rem', fontSize: '1.1rem', color: '#333' }}>
          <div>
            <strong style={{ color: '#666' }}>Nombre:</strong><br />{usuario.nombre}
          </div>
          <div>
            <strong style={{ color: '#666' }}>Correo electrónico:</strong><br />{usuario.correo}
          </div>
          <div>
            <strong style={{ color: '#666' }}>Puesto:</strong><br />{usuario.puesto}
          </div>
          <div>
            <strong style={{ color: '#666' }}>Departamento:</strong><br />{usuario.departamento}
          </div>
          <div>
            <strong style={{ color: '#666' }}>Fecha de ingreso:</strong><br />{usuario.fechaIngreso}
          </div>
        </div>

        {/* Botones para jefe */}
        {esJefe && (
          <>
            <hr style={{ margin: '3rem 0', borderColor: '#ddd' }} />
            <h2 style={{ textAlign: 'center', color: '#3f51b5', marginBottom: '1rem' }}>🔧 Herramientas Administrativas</h2>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              {botonesAdmin.map((btn, index) => (
                <button
                  key={index}
                  onClick={() => navigate(btn.ruta)}
                  style={{
                    padding: '0.8rem 1.5rem',
                    fontSize: '1rem',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#3f51b5',
                    color: '#fff',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    minWidth: '200px'
                  }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = '#303f9f'}
                  onMouseOut={e => e.currentTarget.style.backgroundColor = '#3f51b5'}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Perfil;
