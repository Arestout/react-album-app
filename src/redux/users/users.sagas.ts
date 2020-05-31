import { takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import * as types from './users.types';
import { updateUsers } from './users.actions';
import { hideLoader, showError, showLoader } from '../app/app.actions';
import { makeRequestWithSpinner } from '../app/app.saga';

export function* fetchUsersSaga(): SagaIterator {
  yield takeEvery(types.FETCH_USERS, sagaWorker);
}

export function* sagaWorker(): Generator {
  const options = {
    update: updateUsers,
    fetcherParam: 'users',
    showError,
    showLoader,
    hideLoader,
  };

  yield makeRequestWithSpinner(options);
}
