import React from 'react';
import { connect } from 'react-redux';
import Lightbox from 'react-image-lightbox';
import { createStructuredSelector } from 'reselect';

import {
  closeGalleryModal,
  updatePhotoIndexOnNext,
  updatePhotoIndexOnPrev,
} from '../../redux/photos/photos.actions';

import {
  selectPhotosList,
  galleryIsOpen,
  getPhotoIndex,
} from '../../redux/photos/photos.selectors';

import 'react-image-lightbox/style.css';

const LightboxGallery = (props) => {
  const {
    photos,
    closeGalleryModal,
    photoIndex,
    updatePhotoIndexOnNext,
    updatePhotoIndexOnPrev,
  } = props;

  return (
    <Lightbox
      mainSrc={photos[photoIndex].url}
      nextSrc={photos[(photoIndex + 1) % photos.length].url}
      prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].url}
      onCloseRequest={() => closeGalleryModal()}
      onMovePrevRequest={() => updatePhotoIndexOnPrev()}
      onMoveNextRequest={() => updatePhotoIndexOnNext()}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  photos: selectPhotosList,
  photoIndex: getPhotoIndex,
  galleryIsOpen: galleryIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  closeGalleryModal: () => dispatch(closeGalleryModal()),
  updatePhotoIndexOnNext: () => dispatch(updatePhotoIndexOnNext()),
  updatePhotoIndexOnPrev: () => dispatch(updatePhotoIndexOnPrev()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LightboxGallery);
