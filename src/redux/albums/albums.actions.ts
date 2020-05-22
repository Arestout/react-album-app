import * as types from './albums.types';

export function fetchAlbums(userId: string): types.AlbumsActionTypes {
  return {
    type: types.FETCH_ALBUMS,
    payload: userId,
  };
}

export function updateAlbums(albums: types.Albums): types.AlbumsActionTypes {
  return {
    type: types.UPDATE_ALBUMS,
    payload: albums,
  };
}

export function fetchPhotosForCount(
  albums: types.Albums
): types.AlbumsActionTypes {
  return {
    type: types.FETCH_PHOTOS_FOR_COUNT,
    payload: albums,
  };
}

export function updatePhotosForCount(
  photosCount: types.PhotosForCount
): types.AlbumsActionTypes {
  return {
    type: types.UPDATE_PHOTOS_FOR_COUNT,
    payload: photosCount,
  };
}
