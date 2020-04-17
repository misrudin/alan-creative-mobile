import axios from 'axios';
const URL = 'https://alan.co.id/wp-json/wp/v2/';

export const getPortfolio = () => {
  return {
    type: 'PORTFOLIO',
    payload: axios.get(URL + `our_portfolio`),
  };
};
