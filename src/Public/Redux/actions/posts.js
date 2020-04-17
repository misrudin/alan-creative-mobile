import axios from 'axios';
const URL = 'https://alan.co.id/wp-json/wp/v2/';

export const getNewPost = () => {
  return {
    type: 'GET_NEW_POSTS',
    payload: axios.get(URL + 'posts?per_page=4&orderby=date&status=publish'),
  };
};
export const getMedia = () => {
  return {
    type: 'GET_MEDIA',
    payload: axios.get(URL + 'media'),
  };
};
