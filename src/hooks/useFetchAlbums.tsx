import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAlbums } from '../redux/albums/albums.actions';
import * as types from '../redux/albums/albums.types';
import { RootState } from '../redux/rootReducer';
import { AlbumsState } from '../redux/albums/albums.reducers';

type FetchAlbumsState = {
  isLoading: boolean,
  errorMessage: string,
  albumsList: types.Albums,
  photosForCount: types.PhotosForCount,
};

export const useFetchAlbums = (userId: string): FetchAlbumsState => {
  const dispatch = useDispatch();
  const { isLoading, errorMessage } = useSelector(
    (state: RootState) => state.app
  );
  const { albumsList, photosForCount } = useSelector<RootState, AlbumsState>(
    (state: RootState) => state.albums
  );

  useEffect(() => {
    dispatch(fetchAlbums(userId));
  }, [dispatch, userId]);

  return {
    isLoading,
    errorMessage,
    albumsList,
    photosForCount,
  };
};
