import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';  // Importamos useNavigate

const Login = () => {
  const { login } = useAuth();
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate(); // Usamos el hook useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Hacemos la solicitud POST al servidor en Glitch

      console.log('Enviando datos:', { email: usuario, password: clave }); // Verificamos los datos enviados
      const response = await fetch("https://ringed-dapper-farmer.glitch.me/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: usuario,
          password: clave,
        }),
        credentials: 'include',  // Aquí estamos permitiendo el envío de cookies o credenciales
      });


      console.log('Response:', response); // Verificamos la respuesta del servidor
      const data = await response.json();

      if (response.ok) {
        // Si el login es exitoso, guarda los datos en el contexto
        login({
          nombre: data.nombre,
          email: data.email,
          empresa: data.empresa,
          rango: data.rango,
        });

        console.log('Login exitoso');

        // Redirigimos al usuario al inicio
        navigate('/'); // Redirige a la página de inicio
      } else {
        // Si la respuesta del servidor no es ok, mostramos el error
        alert(data.message || "Credenciales inválidas");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("No se pudo conectar al servidor");
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
