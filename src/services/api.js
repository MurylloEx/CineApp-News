import axios from 'axios';

export const ResizedImageUrl = 'https://image.tmdb.org/t/p/w500';
export const ImageUrl = 'https://image.tmdb.org/t/p/original';
export const BaseUrl = 'https://api.themoviedb.org/3';

export const Client = axios.create({
  baseURL: BaseUrl,
  params: {
    language: 'pt-BR',
    page: 1,
    api_key: 'af778c04d89b8a8bf9e0d0737af7130a'
  }
});
