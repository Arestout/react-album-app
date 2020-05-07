import * as types from './app.types';

export function showLoader() {
  return {
    type: types.SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: types.HIDE_LOADER,
  };
}

export function showError(text) {
  return (dispatch) => {
    dispatch({
      type: types.SHOW_ERROR,
      payload: text,
    });

    setTimeout(() => {
      dispatch(hideError());
    }, 3000);
  };
}

export function hideError() {
  return {
    type: types.HIDE_ERROR,
  };
}
