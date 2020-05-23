import React, { FC } from 'react';
import { useRouteMatch, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import * as types from '../../redux/albums/albums.types';

// Styles
const AlbumContainer = styled.li`
  display: inline-block;
  width: 200px;
  height: 300px;
  margin: 10px;
  border-radius: 5px;
  background: #1c1d22;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 15px rgba(97, 219, 251);
  }
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 10px;
`;

const AlbumTitle = styled.p`
  text-transform: capitalize;
`;

const PhotosCount = styled.p`
  text-transform: capitalize;
`;

const AlbumPoster = styled.img`
  border-radius: 5px;
`;

// Types
type AlbumTypes = {
  album: types.Album,
  photosForCount: types.PhotosForCount,
};

// Utils
const getPhotosCount = (
  photosForCount: types.PhotosForCount,
  albumId: number
) =>
  photosForCount
    .filter((items) => items.id === albumId)
    .map((item) => item.count);

// Component
export const Album: FC<AlbumTypes> = ({
  album,
  photosForCount,
}: AlbumTypes) => {
  const photosCount = getPhotosCount(photosForCount, album.id);
  const location = useLocation();
  const match = useRouteMatch();

  return (
    <Link
      to={{
        pathname: `${match.url}/${album.id}`,
        state: { from: location },
      }}
    >
      <AlbumContainer>
        <ContentBlock>
          <AlbumPoster src="https://picsum.photos/150" />
          <AlbumTitle>{album.title}</AlbumTitle>
          <PhotosCount>Photos: {photosCount} </PhotosCount>
        </ContentBlock>
      </AlbumContainer>
    </Link>
  );
};
