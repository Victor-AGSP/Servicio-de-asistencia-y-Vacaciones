// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './componentes/menu';
import './App.css';

// Importa tus vistas
import Inicio from './componentes/inicio';
import Asistencia from './componentes/asistencia';
import Vacaciones from './componentes/vacaciones';
import Login from './componentes/login';
import About from './componentes/about';
import Perfil from './componentes/perfil';
import LogOut from './componentes/log-out'; // Importa el componente de cierre de sesión
import Empleados from './componentes/empleados'; // Importa el componente de empleados
import VacacionesAdmin from './componentes/vacacionesAdmin'; // Importa el componente de vacaciones admin
import AsistenciaAdmin from './componentes/asistenciaAdmin'; // Importa el componente de asistencia admin

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/asistencia" element={<Asistencia />} />
        <Route path="/vacaciones" element={<Vacaciones />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/vacaciones-admin" element={<VacacionesAdmin />} /> {/* Ruta para Vacaciones Admin */}
        <Route path="/asistencia-admin" element={<AsistenciaAdmin />} /> {/* Ruta para Asistencia Admin */}
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/log-out" element={<LogOut />} /> {/* Ruta para LogOut */}
      </Routes>
    </Router>
  );
}

export default App;
