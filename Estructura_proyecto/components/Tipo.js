import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tipo = () => {
  const [tipos, setTipos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [estado, setEstado] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/tipos')
      .then(response => {
        setTipos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/tipos', {
      nombre,
      estado
    })
      .then(response => {
        setTipos([...tipos, response.data]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Tipos</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        <br />
        <label>Estado:</label>
        <select value={estado} onChange={(event) => setEstado(event.target.value)}>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>
        <br />
        <button type="submit">Guardar</button>
      </form>
      <ul>
        {tipos.map((tipo) => (
          <li key={tipo.id}>{tipo.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tipo;