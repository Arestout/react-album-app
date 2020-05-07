import * as types from './photos.types';

const initialState = {
  photosList: [],
  galleryIsOpen: false,
  photoIndex: null,
};

export const photosReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PHOTOS:
      return {
        ...state,
      };
    case types.UPDATE_PHOTOS:
      return {
        ...state,
        photosList: action.payload,
      };
    case types.OPEN_GALLERY_MODAL:
      return {
        ...state,
        galleryIsOpen: true,
        photoIndex: state.photosList.findIndex(
          (photo) => photo.id === action.payload
        ),
      };
    case types.CLOSE_GALLERY_MODAL:
      return {
        ...state,
        galleryIsOpen: false,
      };
    case types.UPDATE_PHOTO_INDEX_NEXT:
      return {
        ...state,
        photoIndex: (state.photoIndex + 1) % state.photosList.length,
      };
    case types.UPDATE_PHOTO_INDEX_PREV:
      return {
        ...state,
        photoIndex:
          (state.photoIndex + state.photosList.length - 1) %
          state.photosList.length,
      };
    default:
      return state;
  }
};
