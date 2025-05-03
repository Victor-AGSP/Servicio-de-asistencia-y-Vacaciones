import React, { useState } from 'react';

// Simulamos empleados con sus vacaciones
const empleadosConVacaciones = {
  'Juan Pérez': [
    { inicio: '2025-03-01', fin: '2025-03-10', diasTomados: 10 },
    { inicio: '2025-07-15', fin: '2025-07-20', diasTomados: 6 },
  ],
  'María López': [
    { inicio: '2025-04-05', fin: '2025-04-12', diasTomados: 8 },
  ],
  'Carlos García': [
    { inicio: '2025-01-20', fin: '2025-01-30', diasTomados: 11 },
    { inicio: '2025-10-01', fin: '2025-10-05', diasTomados: 5 },
  ]
};

const VacacionesAdmin = () => {
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState('');
  const vacaciones = empleadosConVacaciones[empleadoSeleccionado] || [];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7fa', minHeight: '100vh', padding: '2rem' }}>
      <section style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '1000px', margin: '2rem auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>📋 Vacaciones de Empleados</h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: '300' }}>
          Selecciona un empleado para ver sus vacaciones registradas.
        </p>

        {/* Selector de empleado */}
        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <label htmlFor="empleado" style={{ marginRight: '1rem', fontWeight: 'bold' }}>Empleado:</label>
          <select
            id="empleado"
            value={empleadoSeleccionado}
            onChange={(e) => setEmpleadoSeleccionado(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">-- Selecciona un empleado --</option>
            {Object.keys(empleadosConVacaciones).map((nombre) => (
              <option key={nombre} value={nombre}>{nombre}</option>
            ))}
          </select>
        </div>

        {/* Mostrar tabla si hay vacaciones */}
        {empleadoSeleccionado && vacaciones.length > 0 ? (
          <>
            <h2 style={{ marginBottom: '1rem' }}>Vacaciones de <strong>{empleadoSeleccionado}</strong></h2>
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
                  {vacaciones.map((vacacion, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                      <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{vacacion.inicio}</td>
                      <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{vacacion.fin}</td>
                      <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{vacacion.diasTomados} días</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : empleadoSeleccionado ? (
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>No hay vacaciones registradas para {empleadoSeleccionado}.</p>
        ) : null}
      </section>
    </div>
  );
};

export default VacacionesAdmin;
