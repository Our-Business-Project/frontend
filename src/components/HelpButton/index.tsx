import * as React from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import PopupLayoutWithoutActions from '../ui/PopUpLayout/PopupLayoutWithoutActions';
import FormButton from '../ui/ButtonComponents/FormButton';
import GreenCustomButton from '../ui/GreenCustomButton';

export function HelpButton() {
  const [isPopUpOpen, setIsPopUpOpen] = React.useState(false);

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <>
      <IconButton onClick={() => setIsPopUpOpen(true)}>
        <HelpIcon color="primary" />
      </IconButton>
      <PopupLayoutWithoutActions
        handleClose={handleClosePopUp}
        open={isPopUpOpen}
        title="Потрібна допомога?"
        isPending={false}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography sx={{ margin: '10px 0' }} color="text.secondary" variant="body1" textAlign="center">
            Ви можете переглянути коротку інструкцію по користуванню сайтом, а потім потренуватись на даних з відео
            самостійно
          </Typography>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/0LOpjYHV02c?si=GNYgoSYRoxVAxFym&amp;start=10"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <GreenCustomButton buttonText=" Завантажити тренувальні дані" handleClick={() => console.log('clicked')}></GreenCustomButton>
        </Box>
      </PopupLayoutWithoutActions>
    </>
  );
}
