import { takeEvery, put, call, all } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import * as types from './albums.types';
import { hideLoader, showError, showLoader } from '../app/app.actions';
import { updateAlbums, updatePhotosForCount } from './albums.actions';

import { api } from '../../api/api';

const albumsPhotosCount: types.PhotosForCount = [];

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
    yield all(
      albums.map((album: types.Album) => call(getPhotosLength, album.id))
    );
    yield put(updatePhotosForCount(albumsPhotosCount));
    yield put(hideLoader());
    albumsPhotosCount.length = 0;
  } catch (error) {
    yield put(showError(error.message));
    yield put(hideLoader());
  }
}

export function* getPhotosLength(albumId: number) {
  const photos = yield call(api.get, `albums/${albumId}/photos`);
  albumsPhotosCount.push({ id: albumId, count: photos.length });
}
