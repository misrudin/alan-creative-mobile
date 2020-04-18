import axios from 'axios';
const URL = 'https://alan.co.id/wp-json/wp/v2/';

export const getMedia = id => {
  return {
    type: 'MEDIA',
    payload: axios.get(URL + `media/${id}`),
  };
};
export const getMediaCarousel = () => {
  return {
    type: 'MEDIA_CAROUSEL',
    payload: axios.get(URL + `media?per_page=3`),
  };
};
export const getDetailMedia = id => {
  return {
    type: 'MEDIA_DETAIL',
    payload: axios.get(URL + `media/${id}`),
  };
};
export const getDetailMediaNews = id => {
  return {
    type: 'N_DETAIL',
    payload: axios.get(URL + `media/${id}`),
  };
};
