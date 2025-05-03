import React from 'react';

const empleados = [
  { id: 1, nombre: 'Juan Pérez', cargo: 'Desarrollador Frontend', email: 'juan.perez@empresa.com' },
  { id: 2, nombre: 'María López', cargo: 'Diseñadora UX/UI', email: 'maria.lopez@empresa.com' },
  { id: 3, nombre: 'Carlos Ramírez', cargo: 'Desarrollador Backend', email: 'carlos.ramirez@empresa.com' },
  { id: 4, nombre: 'Ana Torres', cargo: 'Recursos Humanos', email: 'ana.torres@empresa.com' },
  { id: 5, nombre: 'Luis Gómez', cargo: 'Administrador de Sistemas', email: 'luis.gomez@empresa.com' },
];

const ListaEmpleados = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>📋 Lista de Empleados</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <thead>
          <tr style={{ backgroundColor: '#333', color: '#fff' }}>
            <th style={{ padding: '0.75rem', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '0.75rem', textAlign: 'left' }}>Nombre</th>
            <th style={{ padding: '0.75rem', textAlign: 'left' }}>Cargo</th>
            <th style={{ padding: '0.75rem', textAlign: 'left' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((emp, index) => (
            <tr key={emp.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
              <td style={{ padding: '0.75rem' }}>{emp.id}</td>
              <td style={{ padding: '0.75rem' }}>{emp.nombre}</td>
              <td style={{ padding: '0.75rem' }}>{emp.cargo}</td>
              <td style={{ padding: '0.75rem' }}>{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaEmpleados;
