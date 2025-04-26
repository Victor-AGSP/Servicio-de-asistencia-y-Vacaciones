// src/context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usuario, setUsuario] = useState(null); // Aquí guardamos los datos del usuario

  const login = (user) => {
    setIsLoggedIn(true);
    setUsuario(user); // Guardamos los datos del usuario cuando inicia sesión
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsuario(null); // Limpiamos los datos del usuario al cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
