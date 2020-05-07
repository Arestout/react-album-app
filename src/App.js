import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/header/Header';

import UsersOverviewPage from './pages/users-overview-page/UsersOverviewPage';
import UserAlbumsPage from './pages/user-albums-page/UserAlbumsPage';
import AlbumPhotosPage from './pages/album-photos-page/AlbumPhotosPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={UsersOverviewPage} />
        <Route exact path="/users/:id/albums" component={UserAlbumsPage} />
        <Route path="/users/:id/albums/:id" component={AlbumPhotosPage} />
      </Switch>
    </div>
  );
}

export default App;
