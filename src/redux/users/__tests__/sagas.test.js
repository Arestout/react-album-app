import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import * as actions from '../users.actions';
import { hideLoader, showError, showLoader } from '../../app/app.actions';
import { sagaWorker, fetchUsers } from '../users.sagas';

const users = [
  { id: 1, name: 'user1' },
  { id: 2, name: 'user2' },
];

describe('albums saga', () => {
  test('should fetch and update albums', async () => {
    await expectSaga(sagaWorker)
      .put(showLoader())
      .provide([[call(fetchUsers)]])
      .put(actions.updateUsers(users))
      .put(hideLoader());
  });

  test('handle errors', async () => {
    const error = new Error('error');
    await expectSaga(sagaWorker)
      .put(showLoader())
      .provide([[call(fetchUsers, throwError(error))]])
      .put(showError(error))
      .put(hideLoader());
  });
});
