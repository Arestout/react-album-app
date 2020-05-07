import * as types from './app.types';

const initialState = {
  isLoading: false,
  errorMessage: null,
};

export const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADER:
      return { ...state, isLoading: true };
    case types.HIDE_LOADER:
      return { ...state, isLoading: false };
    case types.SHOW_ERROR:
      return { ...state, errorMessage: action.payload };
    case types.HIDE_ERROR:
      return { ...state, errorMessage: null };
    default:
      return state;
  }
};
