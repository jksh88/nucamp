import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';

export const addComment = (campsiteId, rating, author, text) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    campsiteId,
    rating,
    author,
    text,
  },
});

// export const addCampsites = () => ({
//   type: ActionTypes.ADD_CAMPSITES,
//   payload: {
//     id,
//     name,
//     image,
//     elevation,
//     featured,
//     description,
//   },
// });

export const fetchCampsites = () => (dispatch) => {
  dispatch(campsitesLoading());
  setTimeout(() => dispatch(addCampsites(CAMPSITES)), 2000);
};

export const campsitesLoading = () => ({
  type: ActionTypes.CAMPSITES_LOADING,
});

//Q: What does CAMPSITES_LOADING action do? No payload either.

export const campsiteFailed = (errorMessage) => ({
  type: ActionTypes.CAMPSITES_FAILED,
  payload: errorMessage,
});

export const addCampsites = (campsites) => ({
  type: ActionTypes.ADD_CAMPSITES,
  payload: campsites, //The entire array of campsites
});
//Q: is the campsites at 44 the outer campsites that contain isLoading and errorMessage? Or it it inner(campsites.campsites). Looks like inner. Look at campsites reducer.
//Q: Plural? Just add all four at once? We are not adding any additional campsite here. We are only adding comments and feedback in this app.
