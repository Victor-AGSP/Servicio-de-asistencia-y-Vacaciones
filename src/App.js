// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './componentes/menu';

// Importa tus vistas
import Inicio from './componentes/inicio';
import Asistencia from './componentes/asistencia';
import Login from './componentes/login';
import About from './componentes/about';
import Perfil from './componentes/perfil';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/asistencia" element={<Asistencia />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;
