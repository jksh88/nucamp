import { actionTypes } from 'react-redux-form';
import * as ActionTypes from './ActionTypes';

export const Comments = (
  state = { errorMessage: null, comments: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errorMessage: null, comments: action.payload };
    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errorMessage: action.payload };
    case actionTypes.ADD_COMMENT:
      const comment = action.payload;
      comment.id = state.comments.length;
      comment.date = new Date().toISOString();
      return { ...state, comments: state.comments.concat(comment) };
    default:
      return state;
  }
};
//Cannot use push because push mutates original array whereas concat doesn't. Push allows us to push elements to the end of an array.
//This method does not return a new copy, rather mutates the original array by adding a new element and returns the new length property of the object upon which the method was called.
//Never mutate that state!
