import { Link as MUILink, LinkProps, styled } from '@mui/material';
import Link from 'next/link';

export default function DefaultLink({ href, children, ...props }: { href: string } & LinkProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <CustomLink {...props}>{children}</CustomLink>
    </Link>
  );
}

const CustomLink = styled(MUILink)(({ theme }) => ({
  textDecoration: 'underline',
  color: theme.palette.text.primary,
  fontSize: '1rem',
}));
