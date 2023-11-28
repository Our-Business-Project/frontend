import { Box, Button, Menu, styled } from '@mui/material';
import { useState } from 'react';
import MyMenuItem from '../MenuItem';

export default function MainMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menu = [
    { name: 'Головна', url: '/' },
    { name: 'Калькулятор', url: '/#calculatorTabs' },
  ];

  return (
    <MenuBox>
      <MenuButton aria-controls="main-menu" aria-haspopup="true" onClick={handleClick}>
        Головна стрінка
      </MenuButton>
      <Menu id="main-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {menu.map((item, index) => (
          <MyMenuItem item={item} handleClose={handleClose} key={index} />
        ))}
      </Menu>
    </MenuBox>
  );
}

const MenuBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const MenuButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
}));
