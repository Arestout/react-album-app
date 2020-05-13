import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Loader } from '../../components/loader/Loader';
import Album from '../../components/album/Album';

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

const UserAlbumsPage = (props) => {
  const userId = props.match.params.id;
  const { albumsList, isLoading, photosForCount } = useFetchAlbums(userId);

  const albums =
    isLoading ||
    albumsList.map((album) => (
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

export default withRouter(UserAlbumsPage);
