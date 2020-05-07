import { combineReducers, createStore } from 'redux';

import { appReducers } from './app/app.reducers';
import { usersReducers } from './users/users.reducers';
import { albumsReducers } from './albums/albums.reducers';
import { photosReducers } from './photos/photos.reducers';

import { store } from './store';

const referenceRootReducer = combineReducers({
  app: appReducers,
  users: usersReducers,
  albums: albumsReducers,
  photos: photosReducers,
});

const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
  test('should have valid state shape', () => {
    expect(store.getState()).toEqual(referenceStore.getState());
  });
});
