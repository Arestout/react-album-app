import { takeEvery, put, call, all } from 'redux-saga/effects';

import * as types from './albums.types';
import { hideLoader, showError, showLoader } from '../app/app.actions';
import { updateAlbums, updatePhotosForCount } from './albums.actions';

import { api } from '../../api/api';

const albumsPhotosCount = [];

export function* fetchAlbumsSaga() {
  yield takeEvery(types.FETCH_ALBUMS, fetchAlbumsSagaWorker);
}

export function* fetchAlbumsSagaWorker({ payload: userId }) {
  try {
    yield put(showLoader());
    const albums = yield call(api.get, `users/${userId}/albums`);
    yield put(updateAlbums(albums));
    yield all(albums.map((album) => call(getPhotosLength, album.id)));
    yield put(updatePhotosForCount(albumsPhotosCount));
    yield put(hideLoader());
    yield (albumsPhotosCount.length = 0);
  } catch (error) {
    yield put(showError(error));
    yield put(hideLoader());
  }
}

export function* getPhotosLength(albumId) {
  const photos = yield call(api.get, `albums/${albumId}/photos`);
  albumsPhotosCount.push({ id: albumId, count: photos.length });
}
