import Image from 'next/image';
import { Divider, Typography } from '@mui/material';

export default function SiteName() {
  return (
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
}
