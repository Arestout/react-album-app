import * as types from './albums.types';

const initialState = {
  albumsList: [],
  photosForCount: [],
};

export const albumsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALBUMS:
      return {
        ...state,
      };
    case types.UPDATE_ALBUMS:
      return {
        ...state,
        albumsList: action.payload,
      };
    case types.FETCH_PHOTOS_FOR_COUNT:
      return {
        ...state,
      };
    case types.UPDATE_PHOTOS_FOR_COUNT:
      return {
        ...state,
        photosForCount: action.payload,
      };
    default:
      return state;
  }
};
