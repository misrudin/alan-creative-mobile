import axios from 'axios';
const URL = 'https://alan.co.id/wp-json/wp/v2/';

export const getMedia = () => {
  return {
    type: 'MEDIA',
    payload: axios.get(URL + `media`),
  };
};
export const getMediaCarousel = () => {
  return {
    type: 'MEDIA_CAROUSEL',
    payload: axios.get(URL + `media?per_page=3`),
  };
};
