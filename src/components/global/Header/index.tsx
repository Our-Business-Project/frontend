'use client';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <AppBar position="fixed" sx={{ top: 0, padding: '0!important' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SiteName />
          <MainMenu />
          {isClient && <RightMenu />}
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
      display: 'flex',
      fontWeight: 800,
      letterSpacing: '.3rem',
      textDecoration: 'none',
      color: 'text.primary',
    }}
  >
    <Image src="/images/logo.svg" width={40} height={40} alt="YBA Logo" />
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
};

const RightMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { isAuthenticated, logout } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menu = useMemo(
    () => [
      { name: 'Профіль', url: '/profile' },
      { name: 'Вихід', onClick: logout },
    ],
    [logout]
  );

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
  <MenuItemLi onClick={handleClose}>
    {item.url ? (
      <MenuItemLink href={item.url} scroll={true}>
        {item.name}
      </MenuItemLink>
    ) : (
      <MenuItemButton onClick={item.onClick}>{item.name}</MenuItemButton>
    )}
  </MenuItemLi>
);

const MenuBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.up('md')]: {
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

const MenuItemLi = styled(MenuItem)(() => ({
  padding: 0,
}));

const MenuItemLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  padding: '6px 16px',
  width: '100%',
}));

const MenuItemButton = styled(Button)(({ theme }) => ({
  fontWeight: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  color: theme.palette.primary.main,
  textTransform: 'none',
  width: '100%',
  justifyContent: 'left',
  padding: '6px 16px',
}));
