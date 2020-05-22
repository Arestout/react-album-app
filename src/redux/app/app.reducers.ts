import * as types from './app.types';

export type AppState = {
  isLoading: boolean,
  errorMessage: string,
};

const initialState: AppState = {
  isLoading: false,
  errorMessage: '',
};

export const appReducers = (
  state = initialState,
  action: types.AppActionTypes
): AppState => {
  switch (action.type) {
    case types.SHOW_LOADER:
      return { ...state, isLoading: true };
    case types.HIDE_LOADER:
      return { ...state, isLoading: false };
    case types.SHOW_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
