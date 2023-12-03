import { Box, Typography, styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function LeftPart() {
  return (
    <LeftPartContainer>
      <StyledLink href="/">
        <StyledImage src="/images/logo.svg" width={100} height={100} alt="YBA Logo" />
        <SiteName as="span">Your Business Adviser</SiteName>
      </StyledLink>
    </LeftPartContainer>
  );
}

const LeftPartContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  borderRight: '1px solid',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    borderRight: 'none',
    borderBottom: '1px solid',
    padding: '0.9375rem',
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  gap: '1rem',

  [theme.breakpoints.up('md')]: {
    gap: '3.125rem',
    margin: '0 5.25rem 0 0',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const StyledImage = styled(Image)(({ theme }) => ({
  width: '3.125rem',
  height: '3.125rem',

  [theme.breakpoints.up('md')]: {
    width: '6.25rem',
    height: '6.25rem',
  },
}));

const SiteName = styled(Typography)(({ theme }) => ({
  width: '7.25rem',
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: 'normal',

  [theme.breakpoints.up('md')]: {
    width: '11.25rem',
    fontSize: '2.25rem',
  },

  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    left: 0,
  },

  [theme.breakpoints.down('mi')]: {
    position: 'inherit',
    textAlign: 'right',
  },
}));
