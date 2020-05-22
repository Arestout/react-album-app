import * as actions from '../photos.actions';
import { photosReducers } from '../photos.reducers';

const initialState = {
  photosList: [],
  galleryIsOpen: false,
  photoIndex: 0,
};

const photos = [
  { id: 1, title: 'image1' },
  { id: 2, title: 'image2' },
];

describe('photos reducers', () => {
  test('should return initial state by default', () => {
    expect(photosReducers(void 0, {})).toEqual(initialState);
  });

  test('should return initial state after fetch request', () => {
    expect(photosReducers(void 0, {})).toEqual(initialState);
  });

  test('should update the photosList', () => {
    expect(photosReducers(void 0, actions.updatePhotos(photos))).toEqual({
      ...initialState,
      photosList: photos,
    });
  });

  test('should set galleryIsOpen to true and update the photoIndex', () => {
    expect(
      photosReducers(void 0, actions.openGalleryModal(photos[1].id))
    ).toEqual({
      ...initialState,
      galleryIsOpen: true,
      photoIndex: initialState.photosList.findIndex(
        (photo) => photo.id === photos[1].id
      ),
    });
  });

  test('should set galleryIsOpen to false', () => {
    expect(photosReducers(void 0, actions.closeGalleryModal())).toEqual({
      ...initialState,
      galleryIsOpen: false,
    });
  });
});
