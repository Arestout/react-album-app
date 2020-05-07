import * as types from './albums.types';

export function fetchAlbums(userId) {
  return {
    type: types.FETCH_ALBUMS,
    payload: userId,
  };
}

export function updateAlbums(albums) {
  return {
    type: types.UPDATE_ALBUMS,
    payload: albums,
  };
}

export function fetchPhotosForCount(albums) {
  return {
    type: types.FETCH_PHOTOS_FOR_COUNT,
    payload: albums,
  };
}

export function updatePhotosForCount(photos) {
  return {
    type: types.UPDATE_PHOTOS_FOR_COUNT,
    payload: photos,
  };
}
