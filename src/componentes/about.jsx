import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría lógica de envío si fuera real
    navigate('/'); // Redirige a la página de inicio
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7fa', minHeight: '100vh', padding: '2rem' }}>
      <section style={{ backgroundColor: '#fff', maxWidth: '900px', margin: '3rem auto', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1.5rem' }}>ℹ️ Acerca de la Aplicación</h1>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '2rem', fontWeight: '300' }}>
          Una solución eficiente para gestionar asistencia, vacaciones y permisos del personal.
        </p>

        <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <p>Esta aplicación fue creada para facilitar y optimizar la gestión de asistencia, vacaciones y permisos...</p>

          <h2 style={{ marginTop: '2.5rem', fontSize: '1.8rem', textAlign: 'center' }}>✨ Características principales</h2>
          <ul style={{ listStyle: 'none', marginTop: '1.5rem', paddingLeft: '0' }}>
            <li style={{ marginBottom: '1rem' }}>📅 <strong>Registro y seguimiento de días de vacaciones</strong>.</li>
            <li style={{ marginBottom: '1rem' }}>🕒 <strong>Consulta detallada del historial de asistencia</strong>.</li>
            <li style={{ marginBottom: '1rem' }}>✅ <strong>Gestión de solicitudes de permisos y vacaciones</strong>.</li>
            <li style={{ marginBottom: '1rem' }}>📊 <strong>Generación y exportación de reportes en formato PDF</strong>.</li>
            <li style={{ marginBottom: '1rem' }}>🔒 <strong>Acceso seguro mediante sistema de inicio de sesión</strong>.</li>
          </ul>

          <p style={{ marginTop: '2rem', textAlign: 'center' }}>
            <img 
              src="/equipo.png" 
              alt="Equipo de desarrollo" 
              style={{ maxWidth: '400px', width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '1.5rem', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
            />
            <br />
            ¿Tienes sugerencias o deseas contribuir? ¡Contáctanos y hagamos crecer esta herramienta juntos! 🚀
            <br /><br />
            <button onClick={() => setShowForm(true)} style={{ padding: '0.6rem 1.2rem', fontSize: '1rem', marginTop: '1rem', borderRadius: '6px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>
              Abrir formulario de contacto
            </button>
          </p>
        </div>
      </section>

      {/* Modal de contacto */}
      {showForm && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', width: '90%', maxWidth: '400px', position: 'relative' }}>
            <button 
              onClick={() => setShowForm(false)} 
              style={{ position: 'absolute', top: '10px', right: '15px', background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}
            >
              ✖
            </button>
            <h2 style={{ marginBottom: '1rem' }}>Formulario de contacto</h2>
            <form onSubmit={handleSubmit}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Tu correo:</label>
              <input type="email" required style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} />
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Mensaje:</label>
              <textarea required style={{ width: '100%', padding: '0.5rem', height: '100px', marginBottom: '1rem' }}></textarea>
              <button type="submit" style={{ padding: '0.6rem 1.2rem', fontSize: '1rem', borderRadius: '6px', border: 'none', backgroundColor: '#28a745', color: 'white', cursor: 'pointer' }}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
