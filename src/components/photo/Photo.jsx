import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { openGalleryModal } from '../../redux/photos/photos.actions';

const PhotoContainer = styled.li`
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 5px;
  background: #1c1d22;
  cursor: pointer;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
`;

const Photo = ({ photo, openGalleryModal }) => (
  <PhotoContainer>
    <Image
      src={photo.thumbnailUrl}
      alt={photo.title}
      onClick={() => openGalleryModal(photo.id)}
    />
  </PhotoContainer>
);

const mapDispatchToProps = (dispatch) => ({
  openGalleryModal: (photoId) => dispatch(openGalleryModal(photoId)),
});

export default connect(null, mapDispatchToProps)(Photo);
