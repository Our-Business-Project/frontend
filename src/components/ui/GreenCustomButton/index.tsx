import { Box, Button, styled } from '@mui/material';
import React, { MouseEventHandler } from 'react';

interface GreenCustomButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  buttonText: string;
}

export default function GreenCustomButton({ handleClick, buttonText }: GreenCustomButtonProps) {
  return (
    <Box sx={{ m: '20px' }}>
      <CustomButton onClick={handleClick} variant="contained" color="success">
        {buttonText}
      </CustomButton>
    </Box>
  );
}

const CustomButton = styled(Button)`
  text-transform: none;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px #24af7a;
`;
