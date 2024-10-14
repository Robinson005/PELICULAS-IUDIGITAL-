import axios from 'axios';

const tipoService = {
  getTipos: () => {
    return axios.get('http://localhost:3000/tipos');
  },
  createTipo: (tipo) => {
    return axios.post('http://localhost:3000/tipos', tipo);
  }
};

export default tipoService;