// src/pages/Vacaciones.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Importamos el contexto

const Vacaciones = () => {
  const { usuario } = useAuth(); // Sacamos el usuario del contexto
  const [añoSeleccionado, setAñoSeleccionado] = useState('2025');

  if (!usuario) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>No estás logueado.</p>;
  }

  // Simulamos registros de vacaciones para el usuario (luego puedes traerlos de la base de datos)
  const vacacionesSimuladas = [
    { inicio: '2025-06-10', fin: '2025-06-20', diasTomados: 10 },
    { inicio: '2025-12-22', fin: '2025-12-31', diasTomados: 8 },
    // Más periodos si quieres
  ];

  const diasDisponibles = 20; // Supongamos que el usuario tiene 20 días anuales
  const diasUsados = vacacionesSimuladas.reduce((acc, vacacion) => acc + vacacion.diasTomados, 0);
  const diasRestantes = diasDisponibles - diasUsados;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7fa', minHeight: '100vh', padding: '2rem' }}>
      
      {/* Título */}
      <section style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '1000px', margin: '2rem auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>🏖️ Registro de Vacaciones</h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: '300' }}>
          Consulta y gestiona tus días de descanso.
        </p>
      </section>

      {/* Resumen del Usuario */}
      <section style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '1000px', margin: '2rem auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>👤 Resumen de {usuario.nombre}</h2>
        <p><strong>Puesto:</strong> {usuario.puesto}</p>
        <p><strong>Departamento:</strong> {usuario.departamento}</p>
        <p><strong>Fecha de Ingreso:</strong> {usuario.fechaIngreso}</p>
        <p><strong>Año seleccionado:</strong> {añoSeleccionado}</p>

        {/* Selector de Año */}
        <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
          <label htmlFor="año" style={{ marginRight: '1rem', fontWeight: 'bold' }}>Selecciona año:</label>
          <select
            id="año"
            value={añoSeleccionado}
            onChange={(e) => setAñoSeleccionado(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            {/* Agrega más si quieres */}
          </select>
        </div>

        {/* Resumen de Vacaciones */}
        <div style={{ marginBottom: '2rem', backgroundColor: '#e3f2fd', padding: '1rem', borderRadius: '8px' }}>
          <p><strong>Días disponibles:</strong> {diasDisponibles} días</p>
          <p><strong>Días tomados:</strong> {diasUsados} días</p>
          <p><strong>Días restantes:</strong> {diasRestantes} días</p>
        </div>

        {/* Tabla de Vacaciones */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#00acc1', color: '#fff' }}>
              <tr>
                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Inicio</th>
                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Fin</th>
                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Días Tomados</th>
              </tr>
            </thead>
            <tbody>
              {vacacionesSimuladas.map((vacacion, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                  <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{vacacion.inicio}</td>
                  <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{vacacion.fin}</td>
                  <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{vacacion.diasTomados} días</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Vacaciones;
