import { useAuth } from '@/core/hooks/useAuth';
import { Box, IconButton, Menu, styled } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import MyMenuItem from '../MenuItem';

export default function RightMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { isAuthenticated, logout } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutOnClick = useCallback(() => {
    logout();
  }, [logout]);

  const menu = useMemo(
    () => [
      { name: 'Профіль', url: '/profile' },
      { name: 'Вихід', onClick: logoutOnClick },
    ],
    [logoutOnClick]
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
}

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
