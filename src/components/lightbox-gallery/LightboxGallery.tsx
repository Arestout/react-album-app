import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Lightbox from 'react-image-lightbox';

import {
  closeGalleryModal,
  updatePhotoIndexOnNext,
  updatePhotoIndexOnPrev,
} from '../../redux/photos/photos.actions';
import { PhotosState } from '../../redux/photos/photos.reducers';
import { RootState } from '../../redux/rootReducer';

import 'react-image-lightbox/style.css';

export const LightboxGallery = () => {
  const { photosList, photoIndex } = useSelector<RootState, PhotosState>(
    (state: RootState) => state.photos
  );
  const dispatch = useDispatch();

  return (
    <Lightbox
      mainSrc={photosList[photoIndex].url}
      nextSrc={photosList[(photoIndex + 1) % photosList.length].url}
      prevSrc={
        photosList[(photoIndex + photosList.length - 1) % photosList.length].url
      }
      onCloseRequest={() => dispatch(closeGalleryModal())}
      onMovePrevRequest={() => dispatch(updatePhotoIndexOnPrev())}
      onMoveNextRequest={() => dispatch(updatePhotoIndexOnNext())}
    />
  );
};
