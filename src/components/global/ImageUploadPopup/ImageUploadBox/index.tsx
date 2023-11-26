import React, { useCallback, useRef, ChangeEvent } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Props } from './props';

const MAX_SIZE = 5 * 1024 * 1024; // 5MB in bytes
const IMAGE_MIME_TYPE = 'image/';
const maxSizeInfo = 'Файл завеликий. Оберіть файл менше 5MB.';

export default function ImageUploadBox({ onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileChange = useCallback(
    (selectedFile: File) => {
      if (selectedFile && selectedFile.type.startsWith(IMAGE_MIME_TYPE) && selectedFile.size <= MAX_SIZE) {
        onChange(selectedFile);
      } else {
        alert(maxSizeInfo);
      }
    },
    [onChange]
  );

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) onFileChange(selectedFile);
    },
    [onFileChange]
  );

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const droppedFiles = event.dataTransfer.files;

      if (droppedFiles.length > 0) {
        const droppedFile = droppedFiles[0];
        onFileChange(droppedFile);
      }
    },
    [onFileChange]
  );

  const handleInputClick = () => inputRef.current?.click();

  return (
    <>
      <StyledBox component="div" onDrop={handleDrop} onDragOver={handleDragOver} onClick={handleInputClick}>
        <input type="file" accept="image/*" onChange={handleFileChange} ref={inputRef} style={fileInputStyle} />
        <StyledTypography>Перетягніть зображення сюди або натисніть, щоб завантажити.</StyledTypography>
      </StyledBox>
    </>
  );
}

const StyledBox = styled(Box)(({ theme }) => ({
  background:
    'linear-gradient(90deg, #333 50%, transparent 0) repeat-x, linear-gradient(90deg, #333 50%, transparent 0) repeat-x, linear-gradient(0deg, #333 50%, transparent 0) repeat-y, linear-gradient(0deg, #333 50%, transparent 0) repeat-y',
  backgroundSize: '16px 1px, 16px 1px, 1px 16px, 1px 16px',
  backgroundPosition: '0 0, 0 100%, 0 0, 100% 0',
  width: '100%',
  height: '250px',
  textAlign: 'center',
  cursor: 'pointer',
  color: theme.palette.text.secondary,

  '&:hover': {
    animation: 'linearGradientMove .3s infinite linear',
  },

  '@keyframes linearGradientMove': {
    '100%': {
      backgroundPosition: '16px 0, -16px 100%, 0 -16px, 100% 16px',
    },
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
}));

const fileInputStyle = {
  cursor: 'pointer',
  display: 'none',
};
