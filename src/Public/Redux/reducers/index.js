import {combineReducers} from 'redux';
import postsReducer from './posts';
import newsReducer from './news';
import mediaReducer from './media';
import userReducer from './auth';
import portfolioReducer from './portfolio';

const reducers = combineReducers({
  posts: postsReducer,
  news: newsReducer,
  media: mediaReducer,
  auth: userReducer,
  portfolio: portfolioReducer,
});

export default reducers;
