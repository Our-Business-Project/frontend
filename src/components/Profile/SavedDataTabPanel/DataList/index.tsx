import { Box, styled } from '@mui/material';
import TableList from './TableList';

export default function DataList() {
  return (
    <StyledBoxContainer>
      <TableList />
    </StyledBoxContainer>
  );
}

const StyledBoxContainer = styled(Box)(() => ({
  width: '100%',
}));
