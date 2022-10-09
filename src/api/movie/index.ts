import axios from 'axios';

export const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'f67e2b5279b2cd1b47514445ab436b4e',
    language: 'es-ES',
  },
});
