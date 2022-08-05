import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '8b67a89c3b3cf87de76d1484537ca872';
axios.defaults.baseURL = URL;

export const fechTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fechQueryMovies = async query => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fechMovieDetails = async mivieId => {
  try {
    const response = await axios.get(
      `/movie/${mivieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fechMovieCredits = async mivieId => {
  try {
    const response = await axios.get(
      `/movie/${mivieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fechMovieReview = async mivieId => {
  try {
    const response = await axios.get(
      `/movie/${mivieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
