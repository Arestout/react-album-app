import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/header/Header';

import { UsersPage } from './pages/users-page/UsersPage';
import { AlbumsPage } from './pages/albums-page/AlbumsPage';
import { PhotosPage } from './pages/photos-page/PhotosPage';
import { ErrorMessage } from './components/error-message/ErrorMessage';

export const App: FC = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={UsersPage} />
      <Route exact path="/users/:userId/albums" component={AlbumsPage} />
      <Route path="/users/:userId/albums/:albumId" component={PhotosPage} />
      <Route>
        <ErrorMessage errorMessage="404. Page not found" />
      </Route>
    </Switch>
  </div>
);
