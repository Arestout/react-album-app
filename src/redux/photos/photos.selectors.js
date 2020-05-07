import { createSelector } from 'reselect';

const selectPhotos = (state) => state.photos;

export const selectPhotosList = createSelector(
  [selectPhotos],
  (state) => state.photosList
);

export const galleryIsOpen = createSelector(
  [selectPhotos],
  (state) => state.galleryIsOpen
);

export const getPhotoIndex = createSelector(
  [selectPhotos],
  (state) => state.photoIndex
);
