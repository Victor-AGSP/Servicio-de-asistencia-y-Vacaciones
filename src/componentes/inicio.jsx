import React from 'react';

const Inicio = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7fa', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem', backgroundColor: '#3f51b5', color: '#fff', borderRadius: '8px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Bienvenido a la app de Asistencia y Vacaciones</h1>
        <p style={{ fontSize: '1.2rem', fontWeight: '300' }}>Gestión eficiente de los permisos, vacaciones y asistencia del personal.</p>
      </header>

      {/* ¿Qué puedes hacer aquí? */}
      <section style={{ padding: '2rem', maxWidth: '900px', margin: '3rem auto', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2rem' }}>¿Qué puedes hacer aquí?</h2>

        {/* Funciones para empleados */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#4caf50' }}>Si eres <strong>empleado</strong> puedes:</h3>
          <ul style={{ listStyle: 'none', fontSize: '1.1rem', paddingLeft: '0' }}>
            <li style={{ marginBottom: '1rem' }}>📅 <strong>Registrar tus días de vacaciones</strong>.</li>
            <li style={{ marginBottom: '1rem' }}>🕒 <strong>Ver tu historial de asistencias</strong>.</li>
            <li style={{ marginBottom: '1rem' }}>✅ <strong>Solicitar permisos o vacaciones</strong>.</li>
          </ul>
        </div>

        {/* Funciones para jefes */}
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff5722' }}>Si eres <strong>jefe</strong> puedes:</h3>
          <ul style={{ listStyle: 'none', fontSize: '1.1rem', paddingLeft: '0' }}>
            <li style={{ marginBottom: '1rem' }}>📅 <strong>Registrar días de vacaciones de los empleados</strong>.</li>
            <li style={{ marginBottom: '1rem' }}>🕒 <strong>Ver el historial de asistencias de todos los empleados</strong>.</li>
            <li style={{ marginBottom: '1rem' }}>✅ <strong>Aprobar o rechazar solicitudes de permisos o vacaciones</strong>.</li>
            <li style={{ marginBottom: '1rem' }}>👥 <strong>Consultar información del personal</strong>.</li>
          </ul>
        </div>
      </section>

      {/* Últimas Actualizaciones */}
      <section style={{ padding: '2rem', backgroundColor: '#f0f0f0', marginTop: '3rem', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '1rem' }}>Últimas actualizaciones</h2>
        <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <p style={{ fontSize: '1.2rem' }}>📢 <strong>¡Nueva función para exportar reportes en PDF añadida!</strong></p>
          <p style={{ fontSize: '1.1rem' }}>🔧 También hemos mejorado la visualización de los historiales de asistencia para mayor claridad.</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '3rem', padding: '1rem', backgroundColor: '#222', color: '#fff' }}>
        <p>&copy; 2025 App de Asistencia y Vacaciones - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Inicio;
