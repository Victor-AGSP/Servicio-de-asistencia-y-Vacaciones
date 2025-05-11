// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [usuarios, setUsuarios] = useState([]); // Agrega el estado de los usuarios

  // Cargar desde localStorage al iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }

    // Aquí podrías cargar la lista de usuarios desde una API o base de datos
    const cargarUsuarios = async () => {
      // Ejemplo de usuarios, esto debería venir de una base de datos o una API
      const usuariosFromDb = [
        {
          id: 1,
          nombre: 'Juan Pérez',
          asistencias: [
            { fecha: '2025-04-01', estado: 'Asistió' },
            { fecha: '2025-04-02', estado: 'Faltó' },
          ],
        },
        {
          id: 2,
          nombre: 'María López',
          asistencias: [
            { fecha: '2025-04-01', estado: 'Asistió' },
            { fecha: '2025-04-02', estado: 'Asistió' },
          ],
        },
      ];
      setUsuarios(usuariosFromDb);
    };

    cargarUsuarios();
  }, []);

  const login = (user) => {
    setIsLoggedIn(true);
    setUsuario(user);
    localStorage.setItem('usuario', JSON.stringify(user)); // Guardar en localStorage
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsuario(null);
    localStorage.removeItem('usuario'); // Eliminar del localStorage
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, usuario, login, logout, usuarios }}>
      {children}
    </AuthContext.Provider>
  );
};
