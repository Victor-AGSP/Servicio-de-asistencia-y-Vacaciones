// src/pages/Inicio.jsx
import React from 'react';

const Inicio = () => {
  return (
    <div>
      <header style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Bienvenido a la app de asistencia y vacaciones</h1>
        <p>Gestión eficiente de los permisos, vacaciones y asistencia del personal.</p>
      </header>

      <section style={{ padding: '2rem' }}>
        <h2>¿Qué puedes hacer aquí?</h2>
        <ul>
          <li>📅 Registrar días de vacaciones.</li>
          <li>🕒 Ver el historial de asistencias.</li>
          <li>✅ Aprobar o rechazar solicitudes.</li>
          <li>👥 Consultar información del personal.</li>
        </ul>
      </section>

      <section style={{ padding: '2rem', backgroundColor: '#f0f0f0' }}>
        <h2>Últimas actualizaciones</h2>
        <p>📢 ¡Nueva función para exportar reportes en PDF añadida!</p>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '3rem', padding: '1rem', backgroundColor: '#222', color: '#fff' }}>
        <p>&copy; 2025 App de Asistencia y Vacaciones - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Inicio;
