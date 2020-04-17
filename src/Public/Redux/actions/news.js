import axios from 'axios';
const URL = 'https://alan.co.id/wp-json/wp/v2/';

export const getNewNews = () => {
  return {
    type: 'GET_NEW_NEWS',
    payload: axios.get(URL + 'berita?per_page=2&orderby=date'),
  };
};
