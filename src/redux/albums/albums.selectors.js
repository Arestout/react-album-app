import { createSelector } from 'reselect';

const selectAlbums = (state) => state.albums;

export const selectAlbumsList = createSelector(
  [selectAlbums],
  (albums) => albums.albumsList
);

export const selectPhotosForCount = createSelector(
  [selectAlbums],
  (albums) => albums.photosForCount
);
