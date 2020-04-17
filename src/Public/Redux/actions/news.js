import axios from 'axios';
const URL = 'https://alan.co.id/wp-json/wp/v2/';

export const getNewNews = () => {
  return {
    type: 'GET_NEW_NEWS',
    payload: axios.get(URL + 'berita?per_page=2&orderby=date'),
  };
};
export const getAllNews = () => {
  return {
    type: 'GET_ALL_NEWS',
    payload: axios.get(URL + 'berita?page=1'),
  };
};
export const getDetailNews = id => {
  return {
    type: 'GET_DETAIL_NEWS',
    payload: axios.get(URL + `berita/${id}`),
  };
};
