import * as actions from '../photos.actions';
import * as types from '../photos.types';

const testId = '1';
const photos = [
  { id: 1, title: 'image1' },
  { id: 2, title: 'image2' },
];

describe('photos actions:', () => {
  test('fetch photos', () => {
    expect(actions.fetchPhotos(testId)).toEqual({
      type: types.FETCH_PHOTOS,
      payload: testId,
    });
  });

  test('update photos', () => {
    expect(actions.updatePhotos(photos)).toEqual({
      type: types.UPDATE_PHOTOS,
      payload: photos,
    });
  });

  test('open gallery modal', () => {
    expect(actions.openGalleryModal(testId)).toEqual({
      type: types.OPEN_GALLERY_MODAL,
      payload: testId,
    });
  });

  test('close gallery modal', () => {
    expect(actions.closeGalleryModal()).toEqual({
      type: types.CLOSE_GALLERY_MODAL,
    });
  });

  test('update photo index on next', () => {
    expect(actions.updatePhotoIndexOnNext()).toEqual({
      type: types.UPDATE_PHOTO_INDEX_NEXT,
    });
  });

  test('update photo index on prev', () => {
    expect(actions.updatePhotoIndexOnPrev()).toEqual({
      type: types.UPDATE_PHOTO_INDEX_PREV,
    });
  });
});
