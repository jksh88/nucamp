import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// const { JSON_SERVER } = process.env;

//Q: What happens if no return again?
//CAMPSITES
export const fetchCampsites = () => (dispatch) => {
  dispatch(campsitesLoading());
  return fetch(`${baseUrl}campsites`)
    .then((res) => res.json())
    .then((campsites) => dispatch(addCampsites(campsites)))
    .catch((err) => console.log(err));
};
//Q: where is this 'dispatch' coming from? A: It is used to 'dispatch' data into Redux store
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

//COMMENTS
export const fetchComments = () => (dispatch) => {
  return fetch(`${baseUrl}comments`)
    .then((res) => res.json())
    .then((comments) => dispatch(addComments(comments)));
};

//Q: is the campsites at 44 the outer campsites that contain isLoading and errorMessage? Or it it inner(campsites.campsites). Looks like inner. Look at campsites reducer.
//Q: Plural? Just add all four at once? We are not adding any additional campsite here. We are only adding comments and feedback in this app.
export const commentsFailed = (errorMessage) => ({
  type: ActionTypes.CAMPSITES_FAILED,
  payload: errorMessage,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});
//Remember, addComments is not to add individual comment from feedback into store. Singluar addComment together with the 'model=....' attribute in React-Redux-Form. There's no action creator or receiver for that.
//addCommentS here is adding comments to store, like addCampsites is for adding campsites to store.
export const addComment = (campsiteId, rating, author, text) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: { campsiteId, rating, author, text },
});

//PROMOTIONS
export const fetchPromotions = () => (dispatch) => {
  dispatch(promotionsLoading());
  return fetch(`${baseUrl}promotions`)
    .then((res) => res.json())
    .then((promotions) => dispatch(addPromotions(promotions)));
};

export const promotionsLoading = () => ({
  type: ActionTypes.PROMOTIONS_LOADING,
});

export const promotionsFailed = (errorMessage) => ({
  type: ActionTypes.PROMOTIONS_FAILED,
  payload: errorMessage,
});

export const addPromotions = (promotions) => ({
  type: ActionTypes.ADD_PROMOTIONS,
  payload: promotions,
});
