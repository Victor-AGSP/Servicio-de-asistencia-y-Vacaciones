// src/pages/Login.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';  // Importamos useNavigate

const Login = () => {
  const { login } = useAuth();
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate(); // Usamos el hook useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Datos predefinidos de usuario
    const usuarioCorrecto = 'admin';
    const claveCorrecta = '1234';

    if (usuario === usuarioCorrecto && clave === claveCorrecta) {
      // Si las credenciales son correctas, logueamos al usuario
      login({
        nombre: 'Victor Sepúlveda Parra',
        correo: 'victor@example.com',
        puesto: 'Desarrollador Frontend',
        departamento: 'Tecnología',
        fechaIngreso: '15/03/2023',
      });
      console.log('Login exitoso');

      // Redirigimos al usuario al inicio
      navigate('/'); // Redirige a la página de inicio
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h1>🔐 Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#333', color: 'white', border: 'none' }}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
