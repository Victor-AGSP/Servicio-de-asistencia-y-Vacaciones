import React, { useState } from 'react';

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
  const [vacacionesEditadas, setVacacionesEditadas] = useState([]);

  const handleSeleccion = (e) => {
    const nombre = e.target.value;
    setEmpleadoSeleccionado(nombre);

    const vacacionesGuardadas = localStorage.getItem(`vacaciones_${nombre}`);
    const vacaciones = vacacionesGuardadas
      ? JSON.parse(vacacionesGuardadas)
      : empleadosConVacaciones[nombre] || [];

    setVacacionesEditadas(vacaciones);
  };

  const handleChangeVacacion = (index, campo, valor) => {
    const nuevasVacaciones = [...vacacionesEditadas];
    nuevasVacaciones[index][campo] = campo === 'diasTomados' ? parseInt(valor) || 0 : valor;
    setVacacionesEditadas(nuevasVacaciones);
  };

  const handleAgregarVacacion = () => {
    setVacacionesEditadas([
      ...vacacionesEditadas,
      { inicio: '', fin: '', diasTomados: 0 },
    ]);
  };

  const handleGuardarCambios = () => {
    localStorage.setItem(`vacaciones_${empleadoSeleccionado}`, JSON.stringify(vacacionesEditadas));
    alert('Vacaciones guardadas en localStorage');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7fa', minHeight: '100vh', padding: '2rem' }}>
      <section style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '1000px', margin: '2rem auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>🌴 Vacaciones de Empleados</h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: '300' }}>
          Selecciona un empleado para ver y editar sus vacaciones.
        </p>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <label htmlFor="empleado" style={{ marginRight: '1rem', fontWeight: 'bold' }}>Empleado:</label>
          <select
            id="empleado"
            value={empleadoSeleccionado}
            onChange={handleSeleccion}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">-- Selecciona un empleado --</option>
            {Object.keys(empleadosConVacaciones).map((nombre) => (
              <option key={nombre} value={nombre}>{nombre}</option>
            ))}
          </select>
        </div>

        {empleadoSeleccionado && (
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
                  {vacacionesEditadas.map((vacacion, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                      <td style={{ padding: '1rem', border: '1px solid #ddd' }}>
                        <input
                          type="date"
                          value={vacacion.inicio}
                          onChange={(e) => handleChangeVacacion(index, 'inicio', e.target.value)}
                          style={{ padding: '0.5rem', width: '100%' }}
                        />
                      </td>
                      <td style={{ padding: '1rem', border: '1px solid #ddd' }}>
                        <input
                          type="date"
                          value={vacacion.fin}
                          onChange={(e) => handleChangeVacacion(index, 'fin', e.target.value)}
                          style={{ padding: '0.5rem', width: '100%' }}
                        />
                      </td>
                      <td style={{ padding: '1rem', border: '1px solid #ddd' }}>
                        {(() => {
                          const inicio = new Date(vacacion.inicio);
                          const fin = new Date(vacacion.fin);
                          const diferenciaMs = fin - inicio;
                          const dias = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24)) + 1; // +1 para incluir ambos días
                          return `${dias} días`;
                        })()}
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button
                onClick={handleAgregarVacacion}
                style={{ padding: '0.75rem 1.5rem', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                ➕ Agregar Vacación
              </button>
              <button
                onClick={handleGuardarCambios}
                style={{ padding: '0.75rem 1.5rem', backgroundColor: '#2196f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                💾 Guardar Cambios
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default VacacionesAdmin;
