import axios from 'axios';

const productoraService = {
  getProductoras: () => {
    return axios.get('http://localhost:3000/productoras');
  },
  createProductora: (productora) => {
    return axios.post('http://localhost:3000/productoras', productora);
  }
};

export default productoraService;