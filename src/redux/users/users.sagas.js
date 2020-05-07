import { takeEvery, put, call } from 'redux-saga/effects';

import * as types from './users.types';
import { hideLoader, showError, showLoader } from '../app/app.actions';
import { updateUsers } from './users.actions';

export function* fetchUsersSaga() {
  yield takeEvery(types.FETCH_USERS, sagaWorker);
}

export function* sagaWorker() {
  try {
    yield put(showLoader());
    const response = yield call(fetchUsers);
    yield put(updateUsers(response));
    yield put(hideLoader());
  } catch (err) {
    yield put(showError('Something went wrong.'));
    yield put(hideLoader());
  }
}

export async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json();
}
