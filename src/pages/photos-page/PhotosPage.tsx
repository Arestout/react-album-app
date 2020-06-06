import React, { FC } from 'react';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import * as types from '../../redux/photos/photos.types';

import { Loader } from '../../components/loader/Loader';
import { Photo } from '../../components/photo/Photo';
import { LightboxGallery } from '../../components/lightbox-gallery/LightboxGallery';
import { ErrorMessage } from '../../components/error-message/ErrorMessage';

import { useFetchPhotos } from '../../hooks/useFetchPhotos';

// Styles
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

// Utils
const getBackButtonUrl = (url: string): string =>
  url.slice(0, url.lastIndexOf('/'));

// Component
export const PhotosPage: FC = () => {
  const { albumId } = useParams();
  const history = useHistory();
  const { url } = useRouteMatch();
  const { photosList, isLoading, errorMessage, galleryIsOpen } = useFetchPhotos(
    albumId
  );
  const backButtonUrl = getBackButtonUrl(url);

  const photos =
    isLoading ||
    errorMessage ||
    photosList.map((photo: types.Photo) => (
      <Photo key={photo.id} photo={photo} />
    ));

  if (errorMessage) {
    return <ErrorMessage errorMessage={errorMessage} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (galleryIsOpen) {
    return <LightboxGallery />;
  }

  return (
    <PhotosContainer>
      <PageTitle>Photos</PageTitle>
      <MenuLink href="#" onClick={() => history.push(`${backButtonUrl}`)}>
        Back to Albums
      </MenuLink>
      <PhotosList>{photos}</PhotosList>
    </PhotosContainer>
  );
};
