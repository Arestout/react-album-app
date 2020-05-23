import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { openGalleryModal } from '../../redux/photos/photos.actions';
import { Photo as PhotoType } from '../../redux/photos/photos.types';

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

// Types
type PhotoTypes = {
  photo: PhotoType,
};

export const Photo: FC<PhotoTypes> = ({ photo }: PhotoTypes) => {
  const dispatch = useDispatch();

  return (
    <PhotoContainer>
      <Image
        src={photo.thumbnailUrl}
        alt={photo.title}
        onClick={() => dispatch(openGalleryModal(photo.id))}
      />
    </PhotoContainer>
  );
};
