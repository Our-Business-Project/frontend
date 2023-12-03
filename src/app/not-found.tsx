'use client';

import { Box, Link, Container, Typography, styled } from '@mui/material';
import Image from 'next/image';

const folder = '/images/404';

export default function Custom404() {
  return (
    <StyledContainer maxWidth="xl">
      <StyledBox>
        <StyledTypography variant="h3">404</StyledTypography>
        <StyledDescription variant="h5">Сторінка не знайдена :(</StyledDescription>
        <ButtonContainer>
          <StyledButton href="/">На головну</StyledButton>
        </ButtonContainer>
        <ManContainer>
          <StyledMan src={`${folder}/man.png`} width="800" height="800" alt="man" />
        </ManContainer>
        <ShadowContainer>
          <StyledShadow src={`${folder}/shadow.png`} width="1400" height="139" alt="shadow" />
        </ShadowContainer>
        <ArrowContainer>
          <StyledArrow src={`${folder}/arrow.png`} width="1100" height="600" alt="arrow" />
        </ArrowContainer>
      </StyledBox>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)(() => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  minHeight: '700px',
  overflow: 'hidden',
}));

const StyledBox = styled(Box)(() => ({
  position: 'relative',
  flex: 1,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  textAlign: 'center',
  color: theme.palette.error.main,
  fontFamily: 'Inter',
  fontSize: '30vh',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  bottom: '-60px',
}));
const StyledDescription = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  textAlign: 'center',
  color: theme.palette.error.main,
  fontFamily: 'Inter',
  fontSize: '6vh',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  bottom: '-100px',
}));

const ButtonContainer = styled(Box)(() => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  bottom: '-200px',
  zIndex: 3,
}));
const StyledButton = styled(Link)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.common.black,
  fontFamily: 'Inter',
  fontSize: '5vh',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  textTransform: 'none',
  textDecoration: 'none',
  padding: '0.625rem 1.25rem',
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const ManContainer = styled(Box)(() => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  bottom: '-320px',
  zIndex: 2,
}));
const StyledMan = styled(Image)(() => ({
  height: '100vh',
  width: '100vh',
  maxWidth: '600px',
  maxHeight: '600px',
  marginLeft: '-95vh',
}));

const ShadowContainer = styled(Box)(() => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  bottom: '-265px',
  zIndex: 1,
}));
const StyledShadow = styled(Image)(() => ({
  position: 'absolute',
  height: '10vh',
  width: '280vh',
  maxWidth: '1200px',
  maxHeight: '200px',
}));

const ArrowContainer = styled(Box)(() => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  bottom: '-220px',
  zIndex: 0,
}));
const StyledArrow = styled(Image)(() => ({
  height: '60vh',
  width: '120vh',
  maxWidth: '1000px',
  maxHeight: '500px',
}));
