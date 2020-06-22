import { takeEvery, put, call, all } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import * as types from './albums.types';
import { hideLoader, showError, showLoader } from '../app/app.actions';
import { updateAlbums, updatePhotosForCount } from './albums.actions';

import { api } from '../../api/api';

export function* fetchAlbumsSaga(): SagaIterator {
  yield takeEvery(types.FETCH_ALBUMS, fetchAlbumsSagaWorker);
}

export function* fetchAlbumsSagaWorker({
  payload: userId,
}: types.FetchAlbumsAction): SagaIterator {
  try {
    yield put(showLoader());
    const albums: types.Albums = yield call(api.get, `users/${userId}/albums`);
    yield put(updateAlbums(albums));
    const albumsPhotosCount: types.PhotosForCount = yield call(
      getAlbumPhotos,
      albums
    );
    yield put(updatePhotosForCount(albumsPhotosCount));
    yield put(hideLoader());
  } catch (error) {
    yield put(showError(error.message));
    yield put(hideLoader());
  }
}

export function* getAlbumPhotos(albums: types.Albums) {
  const albumsPhotosCount: types.PhotosForCount = [];
  yield all(
    albums.map((album: types.Album) =>
      call(getPhotosLength, [album.id, albumsPhotosCount])
    )
  );
  return albumsPhotosCount;
}

export function* getPhotosLength([albumId, albumsPhotosCount]: [
  number,
  types.PhotosForCount
]) {
  const oneAlbumPhotos = yield call(api.get, `albums/${albumId}/photos`);
  albumsPhotosCount.push({
    id: albumId,
    count: oneAlbumPhotos.length,
  });
}
