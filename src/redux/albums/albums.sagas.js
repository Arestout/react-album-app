import { takeEvery, put, call, all } from 'redux-saga/effects';

import * as types from './albums.types';
import { hideLoader, showError, showLoader } from '../app/app.actions';
import { updateAlbums, updatePhotosForCount } from './albums.actions';

import { api } from '../../api/api';

const albumsPhotosCount = [];

export function* fetchAlbumsSaga() {
  yield takeEvery(types.FETCH_ALBUMS, fetchAlbumsSagaWorker);
}

export function* fetchAlbumsSagaWorker({ payload: userId }) {
  try {
    yield put(showLoader());
    const albums = yield call(api.get, `users/${userId}/albums`);
    yield put(updateAlbums(albums));
    yield fetchPhotosForCount(albums);
    yield put(hideLoader());
  } catch (error) {
    yield put(showError(error));
    yield put(hideLoader());
  }
}

// export async function fetchAlbums(userId) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}/albums`
//   );
//   return await response.json();
// }

export function* fetchPhotosForCount(albums) {
  yield put(showLoader());
  yield all(albums.map((album) => call(getPhotosByAlbum, album.id)));
  yield put(updatePhotosForCount(albumsPhotosCount));
  yield put(hideLoader());
  yield (albumsPhotosCount.length = 0);
}

export async function getPhotosByAlbum(albumId) {
  const photos = api.get(`albums/${albumId}/photos`);
  const length = photos.length;
  albumsPhotosCount.push({ id: albumId, count: length });
}

// export async function getPhotosByAlbum(albumId) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
//   );
//   const photos = await response.json();
//   const length = photos.length;
//   albumsPhotosCount.push({ id: albumId, count: length });
// }

// export async function fetchPhotos(albumId) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
//   );
//   const photos = await response.json();
//   return photos.length;
// }
