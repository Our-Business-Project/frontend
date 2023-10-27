'use client';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Box } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        position: 'absolute',
        width: '100%',
        p: 6,
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography gutterBottom>About Us</Typography>
            <Typography>We are XYZ company, dedicated to providing the best service to our customers.</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography gutterBottom>Contact Us</Typography>
            <Typography>123 Main Street, Anytown, USA</Typography>
            <Typography>Email: info@example.com</Typography>
            <Typography>Phone: +1 234 567 8901</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography gutterBottom>Follow Us</Typography>
            <Box>
              <Link href="https://www.facebook.com/">
                <Facebook />
              </Link>
              <Link href="https://www.instagram.com/" sx={{ pl: 1, pr: 1 }}>
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/">
                <Twitter />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography align="center">
            {'Copyright © '}
            <Link href="https://your-website.com/">Your Website</Link> {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
