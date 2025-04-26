// src/pages/Asistencia.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Importamos el contexto

const Asistencia = () => {
  const { usuario } = useAuth(); // Sacamos el usuario del contexto
  const [mesSeleccionado, setMesSeleccionado] = useState('abril');

  if (!usuario) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>No estás logueado.</p>;
  }

  // Simulamos asistencias para el usuario (puedes luego traerlas de base de datos si quieres)
  const asistenciasSimuladas = [
    { fecha: '2025-04-01', entrada: '08:05', salida: '17:00' },
    { fecha: '2025-04-02', entrada: '08:00', salida: '17:10' },
    { fecha: '2025-04-03', entrada: '08:15', salida: '17:05' },
    { fecha: '2025-04-04', entrada: '08:02', salida: '16:55' },
    { fecha: '2025-04-05', entrada: '08:00', salida: '17:00' },
    // Más días si quieres
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7fa', minHeight: '100vh', padding: '2rem' }}>
      
      {/* Título */}
      <section style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '1000px', margin: '2rem auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>📋 Registro de Asistencia</h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: '300' }}>
          Consulta y gestiona tu asistencia de forma sencilla.
        </p>
      </section>

      {/* Resumen del Usuario */}
      <section style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '1000px', margin: '2rem auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>👤 Resumen de {usuario.nombre}</h2>
        <p><strong>Puesto:</strong> {usuario.puesto}</p>
        <p><strong>Departamento:</strong> {usuario.departamento}</p>
        <p><strong>Fecha de Ingreso:</strong> {usuario.fechaIngreso}</p>
        <p><strong>Mes seleccionado:</strong> {mesSeleccionado.charAt(0).toUpperCase() + mesSeleccionado.slice(1)}</p>

        {/* Selector de Mes */}
        <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
          <label htmlFor="mes" style={{ marginRight: '1rem', fontWeight: 'bold' }}>Selecciona mes:</label>
          <select
            id="mes"
            value={mesSeleccionado}
            onChange={(e) => setMesSeleccionado(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="enero">Enero</option>
            <option value="febrero">Febrero</option>
            <option value="marzo">Marzo</option>
            <option value="abril">Abril</option>
            <option value="mayo">Mayo</option>
            <option value="junio">Junio</option>
            {/* Agrega más si quieres */}
          </select>
        </div>

        {/* Tabla de Asistencias */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#3f51b5', color: '#fff' }}>
              <tr>
                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Fecha</th>
                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Hora de Entrada</th>
                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Hora de Salida</th>
                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Total Horas</th>
              </tr>
            </thead>
            <tbody>
              {asistenciasSimuladas.map((asistencia, index) => {
                const entrada = new Date(`2025-04-01T${asistencia.entrada}:00`);
                const salida = new Date(`2025-04-01T${asistencia.salida}:00`);
                const horasTrabajadas = ((salida - entrada) / (1000 * 60 * 60)).toFixed(2);

                return (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{asistencia.fecha}</td>
                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{asistencia.entrada}</td>
                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{asistencia.salida}</td>
                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{horasTrabajadas} hrs</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Asistencia;
