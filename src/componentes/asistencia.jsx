import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Asistencia = () => {
  const { usuario } = useAuth();
  const [mesSeleccionado, setMesSeleccionado] = useState('abril');
  const [asistencias, setAsistencias] = useState([]);
  const [fecha, setFecha] = useState('');
  const [entrada, setEntrada] = useState('08:00');
  const [salida, setSalida] = useState('17:00');

  // Cargar asistencias cuando el usuario esté disponible
  useEffect(() => {
    if (usuario?.correo) {
      const data = localStorage.getItem(`asistencias_${usuario.correo}`);
      setAsistencias(data ? JSON.parse(data) : []);
    }
  }, [usuario]);

  // Guardar asistencias en localStorage al actualizar
  useEffect(() => {
    if (usuario?.correo) {
      localStorage.setItem(`asistencias_${usuario.correo}`, JSON.stringify(asistencias));
    }
  }, [asistencias, usuario]);

  const agregarAsistencia = () => {
    if (!fecha) {
      alert('Por favor, selecciona una fecha.');
      return;
    }

    const nueva = {
      fecha,
      entrada,
      salida,
    };

    setAsistencias((prev) => [...prev, nueva]);
    // Limpiar campos después de agregar
    setFecha('');
    setEntrada('08:00');
    setSalida('17:00');
  };

  const borrarAsistencia = (index) => {
    const nuevasAsistencias = asistencias.filter((_, i) => i !== index);
    setAsistencias(nuevasAsistencias);
  };

  const calcularHoras = (entrada, salida) => {
    const [entradaH, entradaM] = entrada.split(':').map(Number);
    const [salidaH, salidaM] = salida.split(':').map(Number);

    const entradaDate = new Date();
    entradaDate.setHours(entradaH, entradaM, 0, 0);

    const salidaDate = new Date();
    salidaDate.setHours(salidaH, salidaM, 0, 0);

    const diff = (salidaDate - entradaDate) / (1000 * 60 * 60); // horas
    return diff.toFixed(2);
  };

  if (!usuario) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>No estás logueado.</p>;
  }

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
          </select>
        </div>

        {/* Formulario para agregar nueva asistencia */}
        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="fecha" style={{ marginRight: '1rem', fontWeight: 'bold' }}>Fecha:</label>
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="entrada" style={{ marginRight: '1rem', fontWeight: 'bold' }}>Hora de Entrada:</label>
          <input
            type="time"
            id="entrada"
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="salida" style={{ marginRight: '1rem', fontWeight: 'bold' }}>Hora de Salida:</label>
          <input
            type="time"
            id="salida"
            value={salida}
            onChange={(e) => setSalida(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Botón para agregar asistencia */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <button
            onClick={agregarAsistencia}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3f51b5',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Agregar asistencia de hoy
          </button>
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
                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Acción</th>
              </tr>
            </thead>
            <tbody>
              {asistencias.map((asistencia, index) => {
                const horas = calcularHoras(asistencia.entrada, asistencia.salida);

                return (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{asistencia.fecha}</td>
                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{asistencia.entrada}</td>
                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{asistencia.salida}</td>
                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{horas} hrs</td>
                    <td style={{ padding: '1rem', border: '1px solid #ddd' }}>
                      <button
                        onClick={() => borrarAsistencia(index)}
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#f44336',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '1rem'
                        }}
                      >
                        Borrar
                      </button>
                    </td>
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
