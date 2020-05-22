import * as types from './app.types';

export function showLoader(): types.AppActionTypes {
  return {
    type: types.SHOW_LOADER,
  };
}

export function hideLoader(): types.AppActionTypes {
  return {
    type: types.HIDE_LOADER,
  };
}

export function showError(text: string): types.AppActionTypes {
  return {
    type: types.SHOW_ERROR,
    payload: text,
  };
}
