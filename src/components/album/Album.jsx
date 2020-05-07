import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

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

const getPhotosCount = (photosForCount, albumId) =>
  photosForCount
    .filter((items) => items.id === albumId)
    .map((item) => item.count);

const Album = ({ album, history, match, photosForCount }) => {
  const photosCount = getPhotosCount(photosForCount, album.id);

  return (
    <AlbumContainer onClick={() => history.push(`${match.url}/${album.id}`)}>
      <ContentBlock>
        <AlbumPoster src="https://picsum.photos/150" />
        <AlbumTitle>{album.title}</AlbumTitle>
        <PhotosCount>Photos: {photosCount} </PhotosCount>
      </ContentBlock>
    </AlbumContainer>
  );
};

export default withRouter(Album);
