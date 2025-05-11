import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Vacaciones = () => {
  const { usuario } = useAuth();
  const [vacaciones, setVacaciones] = useState([]);
  const [inicio, setInicio] = useState('');
  const [fin, setFin] = useState('');

  useEffect(() => {
    if (usuario?.correo) {
      const data = localStorage.getItem(`vacaciones_${usuario.correo}`);
      setVacaciones(data ? JSON.parse(data) : []);
    }
  }, [usuario]);

  useEffect(() => {
    if (usuario?.correo) {
      localStorage.setItem(`vacaciones_${usuario.correo}`, JSON.stringify(vacaciones));
    }
  }, [vacaciones, usuario]);

  const calcularDias = (inicioStr, finStr) => {
    const inicioDate = new Date(inicioStr);
    const finDate = new Date(finStr);
    const diff = (finDate - inicioDate) / (1000 * 60 * 60 * 24) + 1;
    return diff > 0 ? diff : 0;
  };

  const agregarVacaciones = () => {
    if (!inicio || !fin) {
      alert('Selecciona ambas fechas');
      return;
    }

    const diasTomados = calcularDias(inicio, fin);
    if (diasTomados <= 0) {
      alert('La fecha final debe ser posterior a la inicial');
      return;
    }

    const nueva = { inicio, fin, diasTomados };
    setVacaciones(prev => [...prev, nueva]);
    setInicio('');
    setFin('');
  };

  const borrarVacacion = (index) => {
    const nuevas = vacaciones.filter((_, i) => i !== index);
    setVacaciones(nuevas);
  };

  if (!usuario) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>No estás logueado.</p>;
  }

  const diasDisponibles = 20;
  const diasUsados = vacaciones.reduce((acc, v) => acc + v.diasTomados, 0);
  const diasRestantes = diasDisponibles - diasUsados;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7fa', minHeight: '100vh', padding: '2rem' }}>
      
      <section style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '1000px', margin: '2rem auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>🌴 Vacaciones</h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: '300' }}>
          Administra tus días de vacaciones.
        </p>
      </section>

      <section style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', maxWidth: '1000px', margin: '2rem auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        
        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="inicio" style={{ marginRight: '1rem', fontWeight: 'bold' }}>Inicio:</label>
          <input
            type="date"
            id="inicio"
            value={inicio}
            onChange={(e) => setInicio(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="fin" style={{ marginRight: '1rem', fontWeight: 'bold' }}>Fin:</label>
          <input
            type="date"
            id="fin"
            value={fin}
            onChange={(e) => setFin(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <button
            onClick={agregarVacaciones}
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
            Agregar vacaciones
          </button>
        </div>

        <div style={{ marginBottom: '1rem', textAlign: 'center', fontWeight: 'bold', fontSize: '1.1rem' }}>
          Días disponibles: {diasDisponibles} | Usados: {diasUsados} | Restantes: {diasRestantes}
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#3f51b5', color: '#fff' }}>
              <tr>
                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Inicio</th>
                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Fin</th>
                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Días Tomados</th>
                <th style={{ padding: '1rem', border: '1px solid #ddd' }}>Acción</th>
              </tr>
            </thead>
            <tbody>
              {vacaciones.map((v, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                  <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{v.inicio}</td>
                  <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{v.fin}</td>
                  <td style={{ padding: '1rem', border: '1px solid #ddd' }}>{v.diasTomados}</td>
                  <td style={{ padding: '1rem', border: '1px solid #ddd' }}>
                    <button
                      onClick={() => borrarVacacion(index)}
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
              ))}
            </tbody>
          </table>
        </div>

      </section>
    </div>
  );
};

export default Vacaciones;
