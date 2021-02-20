import * as ActionTypes from './ActionTypes';

export const Campsites = (
  state = {
    isLoading: true,
    errorMessage: null,
    campsites: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.CAMPSITES_LOADING:
      return { ...state, isLoading: true, errorMessage: null, campsites: [] };
    case ActionTypes.CAMPSITES_FAILED:
      return { ...state, isLoading: false, errorMessage: action.payload }; //Don't return campsites:[]. If fetch failed, display error from server and keep the rest of the original state whatever it was
    case ActionTypes.ADD_CAMPSITES:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        campsites: action.payload,
      };
    default:
      return state;
  }
};
