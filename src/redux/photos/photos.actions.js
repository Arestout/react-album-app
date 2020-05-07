import * as types from './photos.types';

export function fetchPhotos(albumId) {
  return {
    type: types.FETCH_PHOTOS,
    payload: albumId,
  };
}

export function updatePhotos(photos) {
  return {
    type: types.UPDATE_PHOTOS,
    payload: photos,
  };
}

export function openGalleryModal(photoId) {
  return {
    type: types.OPEN_GALLERY_MODAL,
    payload: photoId,
  };
}

export function closeGalleryModal() {
  return {
    type: types.CLOSE_GALLERY_MODAL,
  };
}

export function updatePhotoIndexOnNext() {
  return {
    type: types.UPDATE_PHOTO_INDEX_NEXT,
  };
}

export function updatePhotoIndexOnPrev() {
  return {
    type: types.UPDATE_PHOTO_INDEX_PREV,
  };
}
