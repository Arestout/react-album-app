import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Loader } from '../../components/loader/Loader';
import Photo from '../../components/photo/Photo';
import LightboxGallery from '../../components/lightbox-gallery/LightboxGallery';

import { useFetchPhotos } from '../../hooks/useFetchPhotos';

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

const AlbumPhotosPage = (props) => {
  const albumId = props.match.params.id;
  const { photosList, isLoading, galleryIsOpen } = useFetchPhotos(albumId);

  const photos =
    isLoading ||
    photosList.map((photo) => <Photo key={photo.id} photo={photo} />);

  if (isLoading) {
    return <Loader />;
  }

  if (galleryIsOpen) {
    return <LightboxGallery />;
  }

  return (
    <PhotosContainer>
      <PageTitle>Photos</PageTitle>
      <MenuLink href="#" onClick={() => props.history.goBack()}>
        Back to Albums
      </MenuLink>
      <PhotosList>{photos}</PhotosList>
    </PhotosContainer>
  );
};

export default withRouter(AlbumPhotosPage);
