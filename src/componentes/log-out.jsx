// src/pages/LogOut.jsx
import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext'; // Importamos el hook de contexto
import { useNavigate } from 'react-router-dom'; // Importamos el hook de navegación

const LogOut = () => {
  const { logout } = useAuth(); // Usamos la función logout del contexto
  const navigate = useNavigate(); // Usamos useNavigate para redirigir

  useEffect(() => {
    // Llamamos a logout cuando el componente se monta
    logout();

    // Redirigimos al usuario a la página de login o inicio después de cerrar sesión
    navigate('/'); // Puedes cambiar '/login' por '/' si quieres redirigir al inicio
  }, [logout, navigate]);

  return <div>Redirigiendo...</div>; // Puedes mostrar un mensaje temporal mientras redirige
};

export default LogOut;
