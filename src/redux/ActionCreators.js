import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// const { JSON_SERVER } = process.env;

//Q: What happens if no return again?
//CAMPSITES
//Q: Why is this never invoked?
// https://developer.mozilla.org/en-US/docs/Web/API/Response
//Response.ok Read only: A boolean indicating whether the response was successful (status in the range 200–299) or not.
//Response.status Read only: The status code of the response. (This will be 200 for a success).
// Response.statusText Read only: The status message corresponding to the status code. (e.g., OK for 200).
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
//create new error object off of Error constructor
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message
export const fetchCampsites = () => (dispatch) => {
  console.log('INSIDE fetchCampsites!!');
  dispatch(campsitesLoading());
  return fetch(`${baseUrl}campsites`)
    .then(
      (response) => {
        if (response.ok) {
          console.log('RESPONSE: ', response);
          return response;
        } else {
          const error = new Error(
            `${response.status} when fetching campsites: ${response.statusText}`
          );
          console.log(error);
          throw error;
        }
      },
      //Below is for if there was no response at all, good or bad. This is a second callback method. First callback is for resolve and option second callback is for reject(hence in this case error). Note the comma.
      //Error.prototype.message: This property contains a brief description of the error if one is available or has been set. By default, the message property is an empty string, but this behavior can be overridden for an instance by specifying a message as the first argument to the Error constructor.

      (error) => {
        const errorMessage = new Error(error.message);
        throw errorMessage;
      }
    )
    .then((res) => res.json())
    .then((campsites) => {
      console.log(
        `fetched campsites at actionCreator: ${baseUrl}campsites`,
        campsites
      );
      dispatch(addCampsites(campsites));
    })
    .catch((errorMessage) => dispatch(campsiteFailed(errorMessage)));
  //This catch method will grab any errors thrown above(first error, second error whatever I named them above, or any other error not provided for above?)
  //Do NOT forget to wrap it in dispatch so it can be dispatched to the storeg!
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `${response.status} when fetching comments: ${response.statusText} `
          );
          throw error;
        }
      },
      (error) => {
        const errorMessage = new Error(error.message);
        throw errorMessage;
      }
    )
    .then((res) => res.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((errorMessage) => dispatch(commentsFailed(errorMessage)));
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
export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

//JSON Server automatically create HTTP endpoints based on db.json file provided. Per the db.json file structue here, the following endpoints have been created.
//GET /comments, GET /comments/{id} PUT /comments, POST /comments, PUT /comments/{id}, PATCH /comments PATCH /comments/{id} DELETE /comments/{id}
//https://www.npmjs.com/package/json-server
export const postComment = (campsiteId, rating, author, text) => (dispatch) => {
  const newComment = { campsiteId, rating, author, text };
  newComment.date = new Date().toISOString();
  return fetch(`${baseUrl}comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newComment),
  })
    .then(
      (response) => {
        if (response.ok) {
          console.log(
            'RESPONSE from JSON SERVER for postComment request: ',
            response
          );
          return response;
        } else {
          throw new Error(
            `${response.status} from JSON-SERVER for postComment request ${response.statusText}`
          );
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((res) => res.json())
    .then((comment) => dispatch(addComment(comment)))
    .catch((error) => {
      console.log(error.message);
      alert(`Your comment could not be posted. Error: ${error.message}`);
    });
};

//PROMOTIONS
export const fetchPromotions = () => (dispatch) => {
  dispatch(promotionsLoading());
  return fetch(`${baseUrl}promotions`)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `${error.status} when fetching promotions: ${error.statusText}`
          );
          throw error;
        }
      },
      (error) => {
        throw new Error(error.message);
      }
    )
    .then((res) => res.json())
    .then((promotions) => dispatch(addPromotions(promotions)))
    .catch((errorMessage) => dispatch(promotionsFailed(errorMessage)));
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
