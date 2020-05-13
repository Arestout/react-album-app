import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPhotos } from '../redux/photos/photos.actions';

export const useFetchPhotos = (albumId) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.app);
  const { photosList, galleryIsOpen } = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos(albumId));
  }, [dispatch, albumId]);

  return {
    isLoading,
    photosList,
    galleryIsOpen,
  };
};
