import * as types from './photos.types';

export function fetchPhotos(albumId: string): types.PhotosActionTypes {
  return {
    type: types.FETCH_PHOTOS,
    payload: albumId,
  };
}

export function updatePhotos(photos: types.Photos): types.PhotosActionTypes {
  return {
    type: types.UPDATE_PHOTOS,
    payload: photos,
  };
}

export function openGalleryModal(photoId: string): types.PhotosActionTypes {
  return {
    type: types.OPEN_GALLERY_MODAL,
    payload: photoId,
  };
}

export function closeGalleryModal(): types.PhotosActionTypes {
  return {
    type: types.CLOSE_GALLERY_MODAL,
  };
}

export function updatePhotoIndexOnNext(): types.PhotosActionTypes {
  return {
    type: types.UPDATE_PHOTO_INDEX_NEXT,
  };
}

export function updatePhotoIndexOnPrev(): types.PhotosActionTypes {
  return {
    type: types.UPDATE_PHOTO_INDEX_PREV,
  };
}
