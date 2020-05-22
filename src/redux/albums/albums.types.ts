export type Album = {
  userId: number,
  id: number,
  title: string,
};

export type AlbumForCount = {
  id: number,
  count: number,
};

export type Albums = Album[];

export type PhotosForCount = AlbumForCount[];

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
type FetchAlbumsAction = {
  type: typeof FETCH_ALBUMS,
  payload: string,
};

export const UPDATE_ALBUMS = 'UPDATE_ALBUMS';
export type UpdateAlbumsAction = {
  type: typeof UPDATE_ALBUMS,
  payload: Albums,
};

export const FETCH_PHOTOS_FOR_COUNT = 'FETCH_PHOTOS_FOR_COUNT';
export type FetchPhotosForCountAction = {
  type: typeof FETCH_PHOTOS_FOR_COUNT,
  payload: Albums,
};

export const UPDATE_PHOTOS_FOR_COUNT = 'UPDATE_PHOTOS_FOR_COUNT';
export type UpdatePhotosForCountAction = {
  type: typeof UPDATE_PHOTOS_FOR_COUNT,
  payload: PhotosForCount,
};

export type AlbumsActionTypes =
  | FetchAlbumsAction
  | UpdateAlbumsAction
  | FetchPhotosForCountAction
  | UpdatePhotosForCountAction;
