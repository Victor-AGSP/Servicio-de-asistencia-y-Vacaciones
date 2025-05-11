import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // ajusta el path según tu estructura

const AsistenciaAdmin = () => {
  const { usuarios } = useAuth();
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);
  const [asistenciasEditadas, setAsistenciasEditadas] = useState([]);

  const handleSeleccion = (e) => {
    const id = parseInt(e.target.value);
    const empleado = usuarios.find((emp) => emp.id === id);
  
    const asistenciasGuardadas = localStorage.getItem(`asistencias_${id}`);
    const asistencias = asistenciasGuardadas
      ? JSON.parse(asistenciasGuardadas)
      : empleado?.asistencias || [];
  
    setEmpleadoSeleccionado(empleado);
    setAsistenciasEditadas(asistencias);
  };

  const handleChangeAsistencia = (index, campo, valor) => {
    const nuevasAsistencias = [...asistenciasEditadas];
    nuevasAsistencias[index][campo] = valor;
    setAsistenciasEditadas(nuevasAsistencias);
  };

  const handleAgregarAsistencia = () => {
    setAsistenciasEditadas([
      ...asistenciasEditadas,
      { fecha: '', estado: '' },
    ]);
  };

  const handleGuardarCambios = () => {
    localStorage.setItem(`asistencias_${empleadoSeleccionado.id}`, JSON.stringify(asistenciasEditadas));
    alert('Cambios guardados en localStorage');
  };  

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7fa', minHeight: '100vh', padding: '2rem' }}>
      <section style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '1000px', margin: '2rem auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>📋 Control de Asistencia</h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: '300' }}>
          Selecciona un empleado para ver y editar sus asistencias.
        </p>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <label htmlFor="empleado" style={{ marginRight: '1rem', fontWeight: 'bold' }}>Empleado:</label>
          <select
            id="empleado"
            onChange={handleSeleccion}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">-- Selecciona un empleado --</option>
            {usuarios.map((emp) => (
              <option key={emp.id} value={emp.id}>{emp.nombre}</option>
            ))}
          </select>
        </div>

        {empleadoSeleccionado && (
          <>
            <h2 style={{ marginBottom: '1rem' }}>Asistencias de <strong>{empleadoSeleccionado.nombre}</strong></h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#00acc1', color: '#fff' }}>
                  <tr>
                    <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Fecha</th>
                    <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {asistenciasEditadas.map((asistencia, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                      <td style={{ padding: '1rem', border: '1px solid #ddd' }}>
                        <input
                          type="date"
                          value={asistencia.fecha}
                          onChange={(e) => handleChangeAsistencia(index, 'fecha', e.target.value)}
                          style={{ padding: '0.5rem', width: '100%' }}
                        />
                      </td>
                      <td style={{ padding: '1rem', border: '1px solid #ddd' }}>
                        <select
                          value={asistencia.estado}
                          onChange={(e) => handleChangeAsistencia(index, 'estado', e.target.value)}
                          style={{ padding: '0.5rem', width: '100%' }}
                        >
                          <option value="">-- Selecciona --</option>
                          <option value="Presente">Presente</option>
                          <option value="Ausente">Ausente</option>
                          <option value="Tarde">Tarde</option>
                          <option value="Justificado">Justificado</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button
                onClick={handleAgregarAsistencia}
                style={{ padding: '0.75rem 1.5rem', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                ➕ Agregar Asistencia
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

export default AsistenciaAdmin;
