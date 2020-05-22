import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPhotos } from '../redux/photos/photos.actions';
import * as types from '../redux/photos/photos.types';
import { RootState } from '../redux/rootReducer';
import { PhotosState } from '../redux/photos/photos.reducers';

type FetchPhotosState = {
  isLoading: boolean,
  photosList: types.Photos,
  galleryIsOpen: boolean,
};

export const useFetchPhotos = (albumId: string): FetchPhotosState => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.app);
  const { photosList, galleryIsOpen } = useSelector<RootState, PhotosState>(
    (state: RootState) => state.photos
  );

  useEffect(() => {
    dispatch(fetchPhotos(albumId));
  }, [dispatch, albumId]);

  return {
    isLoading,
    photosList,
    galleryIsOpen,
  };
};
