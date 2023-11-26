import Image from 'next/image';
import { useState } from 'react';
import { Box, Typography, styled } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ImageUploadPopup from '@/components/global/ImageUploadPopup';
import { Props } from './props';

export default function ProfilePhotoUpload({ src }: Props) {
  const [isOpenUploadImage, setOpenUploadImage] = useState(false);

  const onClose = () => {
    setOpenUploadImage(false);
  };

  const openPopup = () => {
    setOpenUploadImage(true);
  };

  const onSave = (file: File) => {
    console.log(file);
  };

  return (
    <StyledContainer>
      <StyledBox onClick={openPopup}>
        <EditIcon className="edit-icon" />
        {src ? <Image src={src} alt="Фото профіля" /> : <StyledTypography>Фото</StyledTypography>}
      </StyledBox>
      <ImageUploadPopup open={isOpenUploadImage} onClose={onClose} onSave={onSave} />
    </StyledContainer>
  );
}

const StyledContainer = styled(Box)(() => ({
  margin: '-10px 115px 0 0',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '21.875rem',
  height: '21.875rem',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  borderRadius: '5px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  '& .edit-icon': {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    color: theme.palette.common.white,
    fontSize: 24,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover .edit-icon': {
    opacity: 1,
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.common.black,
}));
