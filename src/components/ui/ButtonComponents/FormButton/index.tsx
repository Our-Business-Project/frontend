import { Button, ButtonProps, styled } from '@mui/material';

export default function FormButton({ children, ...props }: ButtonProps) {
  return <CustomButton {...props}>{children}</CustomButton>;
}

const CustomButton = styled(Button)(({ theme }) => ({
  margin: '25px auto 0',
  borderRadius: '15px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  fontSize: '24px',
  fontWeight: 300,
  width: 200,
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
}));
