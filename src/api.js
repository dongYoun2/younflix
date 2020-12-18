import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'en-US'
  }
});

export const movieApi = {
  fetchNowPlaying: () => api.get('/movie/now_playing'),
  fetchUpcoming: () => api.get('/movie/upcoming'),
  fetchPopular: () => api.get('/movie/popular'),
  fetchMovieDetail: id => api.get(`/movie/${id}`, { params: { append_to_response: 'videos' } }),
  searchByTerm: term => api.get('/search/movie', { params: { query: encodeURIComponent(term) } }),

};

export const tvApi = {
  fetcTopRated: () => api.get('/tv/top_rated'),
  fetchPopular: () => api.get('/tv/popular'),
  fetchAiringToday: () => api.get('/tv/airing_today'),
  fetchShowDetail: id => api.get(`/tv/${id}`, { params: { append_to_response: 'videos' } }),
  searchByTerm: term => api.get(`/search/tv`, { params: { query: encodeURIComponent(term) } }),
};
