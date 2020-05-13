import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAlbums } from '../redux/albums/albums.actions';

export const useFetchAlbums = (userId) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.app);
  const { albumsList, photosForCount } = useSelector((state) => state.albums);

  useEffect(() => {
    dispatch(fetchAlbums(userId));
  }, [dispatch, userId]);

  return {
    isLoading,
    albumsList,
    photosForCount,
  };
};
