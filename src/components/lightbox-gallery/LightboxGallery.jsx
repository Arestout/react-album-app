import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Lightbox from 'react-image-lightbox';

import {
  closeGalleryModal,
  updatePhotoIndexOnNext,
  updatePhotoIndexOnPrev,
} from '../../redux/photos/photos.actions';

import 'react-image-lightbox/style.css';

export const LightboxGallery = () => {
  const { photosList, photoIndex } = useSelector((state) => state.photos);
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
