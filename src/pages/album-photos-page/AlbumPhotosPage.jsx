import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { fetchPhotos } from '../../redux/photos/photos.actions';
import {
  selectPhotosList,
  galleryIsOpen,
} from '../../redux/photos/photos.selectors';
import { selectIsLoading } from '../../redux/app/app.selectors';

import { Loader } from '../../components/loader/Loader';
import Photo from '../../components/photo/Photo';
import LightboxGallery from '../../components/lightbox-gallery/LightboxGallery';

const PhotosContainer = styled.div`
  min-height: 300px;
  margin: 0 0 0 100px;
`;

const PageTitle = styled.h1`
  font-size: 1.9em;
  font-weight: 400;
  line-height: 1.3;
  margin: 0.25em 3em 0.25em;
`;

const MenuLink = styled.a`
  margin: 0.25em 5.5em 0;
  color: #61dbfb;

  &:hover {
    color: #cecece;
  }
`;

const PhotosList = styled.ul`
  margin: 0;
  padding: 2em;
  text-align: center;
`;

class AlbumsPhotoPage extends React.Component {
  componentDidMount() {
    const albumId = this.props.match.params.id;
    this.props.fetchPhotos(albumId);
  }

  render() {
    const { photos, isLoading, galleryIsOpen } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    if (galleryIsOpen) {
      return <LightboxGallery />;
    }

    return (
      <PhotosContainer>
        <PageTitle>Photos</PageTitle>
        <MenuLink href="#" onClick={() => this.props.history.goBack()}>
          Back to Albums
        </MenuLink>
        <PhotosList>
          {photos.map((photo) => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </PhotosList>
      </PhotosContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: (albumId) => dispatch(fetchPhotos(albumId)),
});

const mapStateToProps = createStructuredSelector({
  photos: selectPhotosList,
  isLoading: selectIsLoading,
  galleryIsOpen: galleryIsOpen,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AlbumsPhotoPage));
