import {combineReducers} from 'redux';
import postsReducer from './posts';
import newsReducer from './news';
import cartReducer from './cart';
import userReducer from './auth';

const reducers = combineReducers({
  posts: postsReducer,
  news: newsReducer,
  cart: cartReducer,
  auth: userReducer,
});

export default reducers;
