'use client';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import SiteName from './HeaderParts/SiteName';
import RightMenu from './HeaderParts/RightMenu';
import MainMenu from './HeaderParts/MainMenu';

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
