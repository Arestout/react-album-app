import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import * as types from '../../redux/albums/albums.types';

import { Loader } from '../../components/loader/Loader';
import { Album } from '../../components/album/Album';

import { useFetchAlbums } from '../../hooks/useFetchAlbums';

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

export const UserAlbumsPage: FC = () => {
  const { id } = useParams();

  const { albumsList, isLoading, photosForCount } = useFetchAlbums(id);

  const albums =
    isLoading ||
    albumsList.map((album: types.Album) => (
      <Album key={album.id} album={album} photosForCount={photosForCount} />
    ));

  if (isLoading) {
    return <Loader />;
  }

  return (
    <UserAlbumsContainer>
      <PageTitle> Albums</PageTitle>
      <MenuLink to="/">Back to Users</MenuLink>
      <AlbumsList>{albums}</AlbumsList>
    </UserAlbumsContainer>
  );
};
