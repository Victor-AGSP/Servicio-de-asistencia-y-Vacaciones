// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>ℹ️ Acerca de la Aplicación</h1>
      <p style={{ marginTop: '1rem' }}>
        Esta aplicación fue creada con el propósito de facilitar la gestión de asistencia, vacaciones y permisos
        del personal de una organización. Permite llevar un control eficiente y transparente de las solicitudes
        y aprobaciones, así como del historial de asistencia de cada miembro del equipo.
      </p>

      <h2 style={{ marginTop: '2rem' }}>Características principales:</h2>
      <ul style={{ marginTop: '1rem' }}>
        <li>📅 Registro y seguimiento de días de vacaciones.</li>
        <li>🕒 Consulta de historial de asistencia.</li>
        <li>✅ Gestión de solicitudes de permisos.</li>
        <li>📊 Reportes exportables en formato PDF.</li>
        <li>🔒 Acceso seguro mediante inicio de sesión.</li>
      </ul>

      <p style={{ marginTop: '2rem' }}>
        Desarrollado por un equipo comprometido con mejorar la eficiencia del entorno laboral.
        Si tienes sugerencias o deseas contribuir, ¡no dudes en contactarnos!
      </p>
    </div>
  );
};

export default About;
