import { takeEvery } from 'redux-saga/effects';

import * as types from './users.types';
import { updateUsers } from './users.actions';

import { makeRequestWithSpinner } from '../app/app.saga';

export function* fetchUsersSaga() {
  yield takeEvery(types.FETCH_USERS, sagaWorker);
}

export function* sagaWorker() {
  const options = {
    update: updateUsers,
    fetcherParam: 'users',
  };

  yield makeRequestWithSpinner(options);
}
