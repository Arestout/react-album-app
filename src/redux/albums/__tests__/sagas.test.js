import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import * as actions from '../albums.actions';
import { hideLoader, showError, showLoader } from '../../app/app.actions';
import { fetchAlbumsSagaWorker } from '../albums.sagas';

import { api } from '../../../api/api';

const userId = '1';
const albums = [
  { id: 1, title: 'image1' },
  { id: 2, title: 'image2' },
];

describe('albums saga', () => {
  test('should fetch and update albums', async () => {
    await expectSaga(fetchAlbumsSagaWorker)
      .put(showLoader())
      .provide([[call(api.get, `users/${userId}/albums`)]])
      .put(actions.updateAlbums(albums))
      .put(hideLoader());
  });

  test('handle errors', async () => {
    const error = new Error('error');
    await expectSaga(fetchAlbumsSagaWorker)
      .put(showLoader())
      .provide([[call(api.get, throwError(error))]])
      .put(showError(error))
      .put(hideLoader());
  });
});
