import { put, call } from 'redux-saga/effects';

import { hideLoader, showError, showLoader } from './app.actions';

import { api } from '../../api/api';

export function* makeRequestWithSpinner(options) {
  const { fetcherParam, update } = options;

  try {
    yield put(showLoader());
    const result = yield call(api.get, fetcherParam);
    yield put(update(result));
  } catch (error) {
    yield put(showError(error.message));
  } finally {
    yield put(hideLoader());
  }
}
