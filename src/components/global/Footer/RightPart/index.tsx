import { Box, List, ListItem, Typography, styled } from '@mui/material';
import Link from 'next/link';
import { Props } from './props';

export default function RightPart({ menu }: Props) {
  return (
    <StyledBox>
      <StyledTypography as="p">Навігація:</StyledTypography>
      <List>
        {menu.map(({ name, href }, index) => (
          <StyledListItem key={index}>
            <StyledLink href={href}>{name}</StyledLink>
          </StyledListItem>
        ))}
      </List>
    </StyledBox>
  );
}

const StyledBox = styled(Box)(({ theme }) => ({
  marginLeft: '30px',
  paddingBlock: '1rem',

  [theme.breakpoints.up('md')]: {
    paddingBlock: '5.5rem',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 400,
  margin: 0,

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    fontSize: '1.5rem',
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:before': {
    content: '"⬤"',
    fontSize: '3px',
    color: theme.palette.common.white,
    marginInline: '1rem',
  },
  paddingBlock: 0,

  [theme.breakpoints.up('md')]: {
    paddingBlock: '0.4688rem',
  },

  [theme.breakpoints.down('sm')]: {
    '&:before': {
      content: 'none',
    },
    paddingBlock: '0.25rem',
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: '1rem',

  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
    fontSize: '1.25rem',
  },
}));
