'use client';
import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Divider, styled } from '@mui/material';
import { useAuth } from '@/core/hooks/useAuth';

export default function Header() {
  return (
    <AppBar position="fixed" sx={{ padding: '0!important' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SiteName />
          <MainMenu />
          <RightMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const SiteName = () => (
  <Typography
    variant="h6"
    noWrap
    component="a"
    href="/"
    sx={{
      display: { xs: 'none', md: 'flex' },
      fontWeight: 800,
      letterSpacing: '.3rem',
      textDecoration: 'none',
      color: 'text.primary',
    }}
  >
    YBS
    <Divider
      orientation="horizontal"
      variant="middle"
      sx={{
        color: 'text.primary',
        margin: '0 17px',
        padding: '0',
        borderColor: 'white',
        borderWidth: '1px',
      }}
    />
  </Typography>
);

const MainMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menu = [
    { name: 'Головна', url: '/' },
    { name: 'Калькулятор', url: '/calculator' },
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
};

const RightMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { isAuthenticated } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menu = [
    { name: 'Профіль', url: '/profile' },
    { name: 'Вихід', onClick: () => console.log('logout') },
  ];

  return (
    <Box sx={{ flexGrow: 0 }}>
      {!isAuthenticated ? (
        <MenuLink href="/sign-in">Вхід</MenuLink>
      ) : (
        <MenuBox>
          <IconButton aria-controls="profile-menu" aria-haspopup="true" onClick={handleClick} sx={{ p: 0 }}>
            <PersonOutlineIcon />
          </IconButton>
          <Menu id="profile-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            {menu.map((item, index) => (
              <MyMenuItem item={item} handleClose={handleClose} key={index} />
            ))}
          </Menu>
        </MenuBox>
      )}
    </Box>
  );
};

type ItemType = {
  name: string;
  url?: string;
  onClick?: () => void;
};
const MyMenuItem = ({ item, handleClose }: { item: ItemType; handleClose: () => void }) => (
  <MenuItem onClick={handleClose}>
    {item.url ? (
      <MenuItemLink href={item.url}>{item.name}</MenuItemLink>
    ) : (
      <MenuItemButton onClick={item.onClick}>{item.name}</MenuItemButton>
    )}
  </MenuItem>
);

const MenuBox = styled(Box)(() => ({
  flexGrow: 1,
  display: 'none',
  '@media(min-width: 900px)': {
    display: 'flex',
  },
}));

const MenuLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

const MenuButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const MenuItemLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
}));

const MenuItemButton = styled(Button)(({ theme }) => ({
  fontWeight: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  color: theme.palette.primary.main,
  textTransform: 'none',
}));
