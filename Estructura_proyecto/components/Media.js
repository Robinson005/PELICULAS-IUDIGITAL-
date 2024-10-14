import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Media = () => {
  const [medias, setMedias] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [genero, setGenero] = useState('');
  const [director, setDirector] = useState('');
  const [productora, setProductora] = useState('');
  const [tipo, setTipo] = useState('');
  const [estado, setEstado] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/medias')
      .then(response => {
        setMedias(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/medias', {
      titulo,
      descripcion,
      genero,
      director,
      productora,
      tipo,
      estado
    })
      .then(response => {
        setMedias([...medias, response.data]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Medias</h1>
      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input type="text" value={titulo} onChange={(event) => setTitulo (event.target.value)} />
        <br />
        <label>Descripción:</label>
        <textarea value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
        <br />
        <label>Género:</label>
        <select value={genero} onChange={(event) => setGenero(event.target.value)}>
          <option value="">Seleccione un género</option>
          {generos.map((genero) => (
            <option value={genero.id}>{genero.nombre}</option>
          ))}
        </select>
        <br />
        <label>Director:</label>
        <select value={director} onChange={(event) => setDirector(event.target.value)}>
          <option value="">Seleccione un director</option>
          {directores.map((director) => (
            <option value={director.id}>{director.nombres}</option>
          ))}
        </select>
        <br />
        <label>Productora:</label>
        <select value={productora} onChange={(event) => setProductora(event.target.value)}>
          <option value="">Seleccione una productora</option>
          {productoras.map((productora) => (
            <option value={productora.id}>{productora.nombre}</option>
          ))}
        </select>
        <br />
        <label>Tipo:</label>
        <select value={tipo} onChange={(event) => setTipo(event.target.value)}>
          <option value="">Seleccione un tipo</option>
          {tipos.map((tipo) => (
            <option value={tipo.id}>{tipo.nombre}</option>
          ))}
        </select>
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
        {medias.map((media) => (
          <li key={media.id}>{media.titulo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Media;