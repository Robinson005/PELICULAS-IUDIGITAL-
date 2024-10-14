import axios from 'axios';

const mediaService = {
  getMedias: () => {
    return axios.get('http://localhost:3000/medias');
  },
  createMedia: (media) => {
    return axios.post('http://localhost:3000/medias', media);
  }
};

export default mediaService;