import { takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import * as types from './photos.types';
import { updatePhotos } from './photos.actions';
import { hideLoader, showError, showLoader } from '../app/app.actions';
import { makeRequestWithSpinner } from '../app/app.saga';

export function* fetchPhotosSaga(): SagaIterator {
  yield takeEvery(types.FETCH_PHOTOS, sagaWorker);
}

export function* sagaWorker({
  payload: albumId,
}: types.FetchPhotosAction): Generator {
  const options = {
    update: updatePhotos,
    fetcherParam: `albums/${albumId}/photos`,
    showError,
    showLoader,
    hideLoader,
  };

  yield makeRequestWithSpinner(options);
}
