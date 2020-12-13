import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'en-US'
  }
});

export const movieApi = {
  getNowPlaying: () => api.get('/movie/now_playing'),
  getUpcoming: () => api.get('/movie/upcoming'),
  getPopular: () => api.get('/movie/popular'),
  getMovieDetail: id => api.get(`/movie/${id}`, { params: { append_to_response: 'videos' } }),
  searchByTerm: term => api.get('/search/movie', { params: { query: encodeURIComponent(term) } }),

};

export const tvApi = {
  getTopRated: () => api.get('/tv/top_rated'),
  getPopular: () => api.get('/tv/popular'),
  getAiringToday: () => api.get('/tv/airing_today'),
  getShowDetail: id => api.get(`/tv/${id}`, { params: { append_to_response: 'videos' } }),
  searchByTerm: term => api.get(`/search/tv`, { params: { query: encodeURIComponent(term) } }),
};
