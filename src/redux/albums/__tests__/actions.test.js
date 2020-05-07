import * as actions from '../albums.actions';
import * as types from '../albums.types';

const testId = '123';
const albums = [
  { id: 1, title: 'image1' },
  { id: 2, title: 'image2' },
];

describe('albums actions:', () => {
  test('fetch albums', () => {
    expect(actions.fetchAlbums(testId)).toEqual({
      type: types.FETCH_ALBUMS,
      payload: testId,
    });
  });

  test('update albums', () => {
    expect(actions.updateAlbums(albums)).toEqual({
      type: types.UPDATE_ALBUMS,
      payload: albums,
    });
  });
});
