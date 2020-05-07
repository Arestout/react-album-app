import * as actions from '../albums.actions';
import { albumsReducers } from '../albums.reducers';

const initialState = {
  albumsList: [],
  photosForCount: [],
};

const albums = [
  { id: 1, title: 'image1' },
  { id: 2, title: 'image2' },
];

const photos = [
  { id: 1, title: 'image1' },
  { id: 2, title: 'image2' },
];

describe('albums reducers:', () => {
  test('should return initial state by default', () => {
    expect(albumsReducers(void 0, {})).toEqual(initialState);
  });

  test('should return initial state after fetch request', () => {
    expect(albumsReducers(void 0, actions.fetchAlbums())).toEqual(initialState);
  });

  test('should update the albumsList', () => {
    expect(albumsReducers(void 0, actions.updateAlbums(albums))).toEqual({
      ...initialState,
      albumsList: albums,
    });
  });

  test('should return initial state after photosForCount fetch request', () => {
    expect(albumsReducers(void 0, actions.fetchPhotosForCount())).toEqual(
      initialState
    );
  });

  test('should update the photosForCount', () => {
    expect(
      albumsReducers(void 0, actions.updatePhotosForCount(photos))
    ).toEqual({
      ...initialState,
      photosForCount: photos,
    });
  });
});
