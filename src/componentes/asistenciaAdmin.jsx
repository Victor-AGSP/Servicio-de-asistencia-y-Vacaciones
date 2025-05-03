// src/pages/AsistenciaAdmin.jsx
import React, { useState } from 'react';

const empleadosSimulados = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    asistencias: [
      { fecha: '2025-04-01', estado: 'Asistió' },
      { fecha: '2025-04-02', estado: 'Faltó' },
      { fecha: '2025-04-03', estado: 'Asistió' },
    ],
  },
  {
    id: 2,
    nombre: 'María López',
    asistencias: [
      { fecha: '2025-04-01', estado: 'Asistió' },
      { fecha: '2025-04-02', estado: 'Asistió' },
      { fecha: '2025-04-03', estado: 'Asistió' },
    ],
  },
  {
    id: 3,
    nombre: 'Carlos García',
    asistencias: [
      { fecha: '2025-04-01', estado: 'Faltó' },
      { fecha: '2025-04-02', estado: 'Faltó' },
      { fecha: '2025-04-03', estado: 'Asistió' },
    ],
  },
];

const AsistenciaAdmin = () => {
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

  const handleSeleccion = (e) => {
    const id = parseInt(e.target.value);
    const empleado = empleadosSimulados.find((emp) => emp.id === id);
    setEmpleadoSeleccionado(empleado);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '2rem' }}>
      <section style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '900px', margin: '0 auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '1rem' }}>📋 Control de Asistencia</h1>

        {/* Selector de empleado */}
        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="empleado" style={{ fontWeight: 'bold', marginRight: '1rem' }}>Selecciona un empleado:</label>
          <select id="empleado" onChange={handleSeleccion} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}>
            <option value="">-- Elige un empleado --</option>
            {empleadosSimulados.map((emp) => (
              <option key={emp.id} value={emp.id}>{emp.nombre}</option>
            ))}
          </select>
        </div>

        {/* Tabla de asistencia */}
        {empleadoSeleccionado && (
          <>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🧑‍💼 Asistencia de {empleadoSeleccionado.nombre}</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#3949ab', color: '#fff' }}>
                  <tr>
                    <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Fecha</th>
                    <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {empleadoSeleccionado.asistencias.map((asistencia, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                      <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{asistencia.fecha}</td>
                      <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{asistencia.estado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default AsistenciaAdmin;
