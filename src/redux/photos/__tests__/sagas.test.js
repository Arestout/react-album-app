import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import * as actions from '../photos.actions';
import { hideLoader, showError, showLoader } from '../../app/app.actions';
import { sagaWorker, fetchPhotos } from '../photos.sagas';

const albumId = '1';
const photos = [
  { id: 1, title: 'image1' },
  { id: 2, title: 'image2' },
];

describe('photos saga', () => {
  test('should fetch and update photos', async () => {
    await expectSaga(sagaWorker)
      .put(showLoader())
      .provide([[call(fetchPhotos, albumId)]])
      .put(actions.updatePhotos(photos))
      .put(hideLoader());
  });

  test('handle errors', async () => {
    const error = new Error('error');
    await expectSaga(sagaWorker)
      .put(showLoader())
      .provide([[call(fetchPhotos, throwError(error))]])
      .put(showError(error))
      .put(hideLoader());
  });
});
