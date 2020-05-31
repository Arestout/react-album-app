import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { ActionCreator, AnyAction } from 'redux';

import { hideLoader, showError, showLoader } from './app.actions';

import { api } from '../../api/api';

type FillActionType<T> = (
  payload: T
) => {
  type: string,
  payload: T,
};

type OptionsTypes<T> = {
  fetcherParam: string,
  update: FillActionType<T>,
  showError: ActionCreator<AnyAction>,
  showLoader: ActionCreator<AnyAction>,
  hideLoader: ActionCreator<AnyAction>,
};

export function* makeRequestWithSpinner<T>(
  options: OptionsTypes<T>
): SagaIterator {
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
