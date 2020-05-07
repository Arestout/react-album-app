import { all, call } from 'redux-saga/effects';

import { fetchUsersSaga } from './users/users.sagas';
import { fetchAlbumsSaga } from './albums/albums.sagas';
import { fetchPhotosSaga } from './photos/photos.sagas';

export function* rootSaga() {
  yield all([
    call(fetchUsersSaga),
    call(fetchAlbumsSaga),
    call(fetchPhotosSaga),
  ]);
}
