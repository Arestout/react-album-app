import { combineReducers } from 'redux';

import { appReducers } from './app/app.reducers';
import { usersReducers } from './users/users.reducers';
import { albumsReducers } from './albums/albums.reducers';
import { photosReducers } from './photos/photos.reducers';

export const rootReducer = combineReducers({
  app: appReducers,
  users: usersReducers,
  albums: albumsReducers,
  photos: photosReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
