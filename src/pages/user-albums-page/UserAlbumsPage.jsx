import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  fetchAlbums,
  fetchPhotosForCount,
} from '../../redux/albums/albums.actions';
import {
  selectAlbumsList,
  selectPhotosForCount,
} from '../../redux/albums/albums.selectors';
import { selectIsLoading } from '../../redux/app/app.selectors';

import { Loader } from '../../components/loader/Loader';
import Album from '../../components/album/Album';

const UserAlbumsContainer = styled.div`
  min-height: 300px;
  margin: 0 0 0 100px;
`;

const PageTitle = styled.h1`
  font-size: 1.9em;
  font-weight: 400;
  line-height: 1.3;
  margin: 0.25em 3em 0.25em;
`;

const MenuLink = styled(Link)`
  margin: 0.25em 5.5em 0;
  color: #61dbfb;

  &:hover {
    color: #cecece;
  }
`;

const AlbumsList = styled.ul`
  margin: 0;
  padding: 2em;
  text-align: center;
`;

class UserAlbumsPage extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.fetchAlbums(userId);
  }

  render() {
    const { albums, isLoading } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <UserAlbumsContainer>
        <PageTitle> Albums</PageTitle>
        <MenuLink to="/">Back to Users</MenuLink>
        <AlbumsList>
          {albums.map((album) => (
            <Album
              key={album.id}
              album={album}
              photosForCount={this.props.photosForCount}
            />
          ))}
        </AlbumsList>
      </UserAlbumsContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: (userId) => dispatch(fetchAlbums(userId)),
  fetchPhotosForCount: (albums) => dispatch(fetchPhotosForCount(albums)),
});

const mapStateToProps = createStructuredSelector({
  albums: selectAlbumsList,
  photosForCount: selectPhotosForCount,
  isLoading: selectIsLoading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserAlbumsPage));
