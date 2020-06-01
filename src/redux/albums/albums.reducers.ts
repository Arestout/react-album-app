import * as types from './albums.types';

export type AlbumsState = {
  albumsList: types.Albums,
  photosForCount: types.PhotosForCount,
};

const initialState: AlbumsState = {
  albumsList: [],
  photosForCount: [],
};

const neverReached = (_never: never) => {};

export const albumsReducers = (
  state = initialState,
  action: types.AlbumsActionTypes
): AlbumsState => {
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
      neverReached(action);
  }
  return state;
};
