import { COMMENTS } from '../shared/comments.js';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      const comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      return state.concat(comment);
    default:
      return state;
  }
};
//Cannot use push because push mutates original array whereas concat doesn't. Push allows us to push elements to the end of an array.
//This method does not return a new copy, rather mutates the original array by adding a new element and returns the new length property of the object upon which the method was called.
//Never mutate that state!
