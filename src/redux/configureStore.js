import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';

export const ConfigureStore = () => {
  const middlewares = [thunkMiddleware, logger];
  const store = createStore(
    combineReducers({
      campsites: Campsites,
      comments: Comments,
      partners: Partners,
      promotions: Promotions,
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
};
