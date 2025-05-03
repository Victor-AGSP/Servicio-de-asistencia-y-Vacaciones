import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let datosUsuario = null;

    if (usuario === 'admin' && clave === '1234') {
      datosUsuario = {
        nombre: 'Admin',
        correo: 'admin@empresa.com',
        puesto: 'jefe',
        departamento: 'Dirección Ejecutiva',
        fechaIngreso: '2020-01-10',
      };
    } else if (usuario === 'empleado' && clave === '1234') {
      datosUsuario = {
        nombre: 'Juan Pérez',
        correo: 'empleado@empresa.com',
        puesto: 'empleado',
        departamento: 'Desarrollo',
        fechaIngreso: '2022-07-18',
      };
    }

    if (datosUsuario) {
      login(datosUsuario);
      navigate('/');
    } else {
      alert("Credenciales inválidas");
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
