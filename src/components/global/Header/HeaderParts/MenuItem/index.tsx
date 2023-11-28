import { Button, MenuItem, styled } from '@mui/material';
import Link from 'next/link';
import { Props } from './props';

export default function MyMenuItem({ item, handleClose }: Props) {
  return (
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
}

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
