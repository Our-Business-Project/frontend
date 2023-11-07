import { Box, BoxProps, styled } from '@mui/material';

export default function Main({ children, ...props }: BoxProps) {
  return (
    <StyledBox component={'main'} {...props}>
      {children}
    </StyledBox>
  );
}

const StyledBox = styled(Box)(() => ({ flex: '1' }));
