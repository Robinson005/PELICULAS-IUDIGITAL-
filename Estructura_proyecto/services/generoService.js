import axios from 'axios';

const generoService = {
  getGeneros: () => {
    return axios.get('http://localhost:3000/generos');
  },
  createGenero: (genero) => {
    return axios.post('http://localhost:3000/generos', genero);
  }
};

export default generoService;