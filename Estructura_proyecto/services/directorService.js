import axios from 'axios';

const directorService = {
  getDirectores: () => {
    return axios.get('http://localhost:3000/directores');
  },
  createDirector: (director) => {
    return axios.post('http://localhost:3000/directores', director);
  }
};

export default directorService;