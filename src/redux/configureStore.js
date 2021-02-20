import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import { feedbackInitialState } from './forms';
import { createForms } from 'react-redux-form';

export const ConfigureStore = () => {
  const middlewares = [thunkMiddleware, logger];
  const store = createStore(
    combineReducers({
      campsites: Campsites,
      comments: Comments,
      partners: Partners,
      promotions: Promotions,
      ...createForms({
        feedbackForm: feedbackInitialState,
      }),
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
};

//It looks like this '...createForms is an abstraction of action creator, reducer process to put form values into the store like this. Don't forget to put in "model="feedbackForm"(or whatever the key name I use here in the passed-in object. These pieces complete such process. See react-redux form library docs)
