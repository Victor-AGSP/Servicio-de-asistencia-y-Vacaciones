// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7fa', minHeight: '100vh', padding: '2rem' }}>
      {/* Sección principal */}
      <section style={{ backgroundColor: '#fff', maxWidth: '900px', margin: '3rem auto', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1.5rem' }}>ℹ️ Acerca de la Aplicación</h1>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '2rem', fontWeight: '300' }}>
          Una solución eficiente para gestionar asistencia, vacaciones y permisos del personal.
        </p>

        <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <p>
            Esta aplicación fue creada para facilitar y optimizar la gestión de asistencia, vacaciones y permisos en organizaciones de cualquier tamaño. 
            Permite llevar un control claro, rápido y transparente de las solicitudes, aprobaciones y del historial de asistencia de cada miembro del equipo.
          </p>

          <h2 style={{ marginTop: '2.5rem', fontSize: '1.8rem', textAlign: 'center' }}>✨ Características principales</h2>
          <ul style={{ listStyle: 'none', marginTop: '1.5rem', paddingLeft: '0' }}>
            <li style={{ marginBottom: '1rem' }}>📅 <strong>Registro y seguimiento de días de vacaciones</strong>.</li>
            <li style={{ marginBottom: '1rem' }}>🕒 <strong>Consulta detallada del historial de asistencia</strong>.</li>
            <li style={{ marginBottom: '1rem' }}>✅ <strong>Gestión de solicitudes de permisos y vacaciones</strong>.</li>
            <li style={{ marginBottom: '1rem' }}>📊 <strong>Generación y exportación de reportes en formato PDF</strong>.</li>
            <li style={{ marginBottom: '1rem' }}>🔒 <strong>Acceso seguro mediante sistema de inicio de sesión</strong>.</li>
          </ul>

          <p style={{ marginTop: '2rem', textAlign: 'center' }}>
            Desarrollado por un equipo comprometido con mejorar la eficiencia y la transparencia en el entorno laboral. 
            <br /><br />
            ¿Tienes sugerencias o deseas contribuir? ¡Contáctanos y hagamos crecer esta herramienta juntos! 🚀
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
