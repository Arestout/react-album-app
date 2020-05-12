import { takeEvery } from 'redux-saga/effects';

import * as types from './photos.types';
import { updatePhotos } from './photos.actions';

import { makeRequestWithSpinner } from '../app/app.saga';

export function* fetchPhotosSaga() {
  yield takeEvery(types.FETCH_PHOTOS, sagaWorker);
}

export function* sagaWorker({ payload: albumId }) {
  const options = {
    update: updatePhotos,
    fetcherParam: `albums/${albumId}/photos`,
  };

  yield makeRequestWithSpinner(options);
}
