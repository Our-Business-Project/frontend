import { Box, BoxProps, styled } from '@mui/material';

export default function FormBox({ children, ...props }: BoxProps) {
  return <CustomBox {...props}>{children}</CustomBox>;
}

const CustomBox = styled(Box)(({ theme }) => ({
  margin: '2rem auto',
  padding: '3.75rem 3.125rem',
  backgroundColor: theme.palette.primary.light,
  borderRadius: '0.9375rem',
  boxShadow: theme.shadows[0],
  maxWidth: 1000,
  minWidth: 320,
}));
