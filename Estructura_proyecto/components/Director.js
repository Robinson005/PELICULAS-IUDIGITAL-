import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Director = () => {
  const [directores, setDirectores] = useState([]);
  const [nombres, setNombres] = useState('');
  const [estado, setEstado] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/directores')
      .then(response => {
        setDirectores(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/directores', {
      nombres,
      estado
    })
      .then(response => {
        setDirectores([...directores, response.data]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Directores</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombres:</label>
        <input type="text" value={nombres} onChange={(event) => setNombres(event.target.value)} />
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
        {directores.map((director) => (
          <li key={director.id}>{director.nombres}</li>
        ))}
      </ul>
    </div>
  );
};

export default Director;