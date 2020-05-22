export type Photo = {
  id: string,
  title: string,
  url: string,
  thumbnailUrl: string,
};

export type Photos = Photo[];

export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export type FetchPhotosAction = {
  type: typeof FETCH_PHOTOS,
  payload: string,
};

export const UPDATE_PHOTOS = 'UPDATE_PHOTOS';
export type UpdatePhotosAction = {
  type: typeof UPDATE_PHOTOS,
  payload: Photos,
};

export const OPEN_GALLERY_MODAL = 'OPEN_GALLERY_MODAL';
export type OpenGalleryModalAction = {
  type: typeof OPEN_GALLERY_MODAL,
  payload: string,
};

export const CLOSE_GALLERY_MODAL = 'CLOSE_GALLERY_MODAL';
export type CloseGalleryModalAction = {
  type: typeof CLOSE_GALLERY_MODAL,
};

export const GET_PHOTO_INDEX = 'GET_PHOTO_INDEX';
export type GetPhotoIndexAction = {
  type: typeof GET_PHOTO_INDEX,
};

export const UPDATE_PHOTO_INDEX_NEXT = 'UPDATE_PHOTO_INDEX_NEXT';
export type UpdatePhotoIndexNextAction = {
  type: typeof UPDATE_PHOTO_INDEX_NEXT,
};

export const UPDATE_PHOTO_INDEX_PREV = 'UPDATE_PHOTO_INDEX_PREV';
export type UpdatePhotoIndexPrevAction = {
  type: typeof UPDATE_PHOTO_INDEX_PREV,
};

export type PhotosActionTypes =
  | FetchPhotosAction
  | UpdatePhotosAction
  | OpenGalleryModalAction
  | CloseGalleryModalAction
  | GetPhotoIndexAction
  | UpdatePhotoIndexNextAction
  | UpdatePhotoIndexPrevAction;
