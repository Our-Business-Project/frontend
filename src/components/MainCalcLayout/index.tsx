import React from 'react'; // Добавьте этот импорт
import { Box, styled } from '@mui/material';

export default function MainCalcLayout({ children }: { children: React.ReactNode }) {
  const childrenArray = React.Children.toArray(children) as React.ReactNode[];

  return (
    <Box sx={{ borderRadius: '15px 100px 15px 100px', maxWidth: '1021px', margin: '0 auto', position: 'relative' }}>
      <DecorBox sx={{ top: '-16px', right: '-170px' }}>
        <img src="/images/mainCalc/bigSpot.svg" />
      </DecorBox>
      <DecorBox sx={{ bottom: '0px', right: '-170px' }}>
        <img src="/images/mainCalc/smallSpot.svg" />
      </DecorBox>
      <DecorBox sx={{ top: '45%', left: '-100px', transform: 'rotate(90deg)' }}>
        <img src="/images/mainCalc/smallSpot.svg" />
      </DecorBox>
      <TripleBox
        sx={{
          mb: '67px',
        }}
      >
        <DecorBox sx={{ top: '40px', left: '50%', transform: 'translate(-50%)' }}>
          <img src="/images/mainCalc/fourLine.svg" />
        </DecorBox>
        {childrenArray[0]}
        {childrenArray[1]}
        {childrenArray[2]}
      </TripleBox>
      <SingleBox>
        <DecorBox sx={{ top: '35px', left: '130px' }}>
          <img src="/images/mainCalc/leftLine.svg" />
        </DecorBox>
        <DecorBox sx={{ top: '35px', right: '130px' }}>
          <img src="/images/mainCalc/rightLine.svg" />
        </DecorBox>
        <Box sx={{ zIndex: '2' }}>{childrenArray[3]}</Box>
      </SingleBox>
      <TripleBox>
        {childrenArray[4]}
        {childrenArray[5]}
        {childrenArray[6]}
      </TripleBox>
      <SingleBox>{childrenArray[7]}</SingleBox>
      <SingleBox>{childrenArray[8]}</SingleBox>
      <SingleBox
        sx={{
          mt: '70px',
        }}
      >
        <DecorBox sx={{ top: '152px', left: '50%', transform: 'translate(-50%)' }}>
          <img src="/images/mainCalc/tripleLine.svg" />
        </DecorBox>
        {childrenArray[9]}
      </SingleBox>
      <TripleBox
        sx={{
          maxWidth: '900px',
          margin: '0 auto',
          mt: '148px',
        }}
      >
        <DecorBox sx={{ top: '45px', left: '270px', color: 'text.secondary' }}> або </DecorBox>
        <DecorBox sx={{ top: '45px', right: '270px', color: 'text.secondary' }}> або </DecorBox>
        {childrenArray[10]}
        {childrenArray[11]}
        {childrenArray[12]}
      </TripleBox>
    </Box>
  );
}

const DecorBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  [theme.breakpoints.down('md')]: {
    display: 'none',
    zIndex: 1,
  },
}));

const SingleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 0,
  },
}));

const TripleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 0,
  },
}));
