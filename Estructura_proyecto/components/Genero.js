import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Genero = () => {
  const [generos, setGeneros] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [estado, setEstado] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/generos')
      .then(response => {
        setGeneros(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/generos', {
      nombre,
      descripcion,
      estado
    })
      .then(response => {
        setGeneros([...generos, response.data]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Generos</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        <br />
        <label>Descripción:</label>
        <textarea value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
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
        {generos.map((genero) => (
          <li key={genero.id}>{genero.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Genero;