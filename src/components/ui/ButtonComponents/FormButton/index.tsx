import { Button, ButtonProps, styled } from '@mui/material';

export default function FormButton({ children, ...props }: ButtonProps) {
  return <CustomButton {...props}>{children}</CustomButton>;
}

const CustomButton = styled(Button)(({ theme }) => ({
  margin: '1.5625rem auto 0',
  padding: '0.75rem 3.125rem',
  borderRadius: '0.9375rem',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  fontSize: '1.5rem',
  minWidth: 200,
  fontWeight: 300,
  color: theme.palette.common.black,
  textTransform: 'capitalize',
  border: 1,
  borderColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.light,
    boxShadow: 'none',
    border: 1,
    borderColor: theme.palette.primary.light,
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0 auto',
    padding: '0.6875rem 1.25rem',
    fontSize: '1rem',
  },
}));
