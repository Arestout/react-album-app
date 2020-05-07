import { takeEvery, put, call } from 'redux-saga/effects';

import * as types from './photos.types';
import { hideLoader, showError, showLoader } from '../app/app.actions';
import { updatePhotos } from './photos.actions';

export function* fetchPhotosSaga() {
  yield takeEvery(types.FETCH_PHOTOS, sagaWorker);
}

function* sagaWorker({ payload: albumId }) {
  try {
    yield put(showLoader());
    const response = yield call(fetchPhotos, albumId);
    yield put(updatePhotos(response));
    yield put(hideLoader());
  } catch (error) {
    yield put(showError('Something went wrong.'));
    yield put(hideLoader());
  }
}

export async function fetchPhotos(albumId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
  );
  return await response.json();
}
