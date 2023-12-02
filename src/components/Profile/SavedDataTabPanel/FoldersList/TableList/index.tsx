import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from '@mui/material';
import { Folder, ListProps } from '../list.props';
import Item from '../Item';

export default function TableList({ items, onClick }: ListProps) {
  return (
    <>
      <TableContainer>
        <Table>
          <HeadTable />
          <BodyTable items={items} onClick={onClick} />
        </Table>
      </TableContainer>
    </>
  );
}

const HeadTable = () => (
  <TableHead>
    <StyledHeadTableRow>
      <StyledTableCell>Ім'я</StyledTableCell>
      <StyledTableCell align="right">Кіл. Файлів</StyledTableCell>
    </StyledHeadTableRow>
  </TableHead>
);

const BodyTable = ({ items, onClick }: ListProps) => (
  <TableBody>
    {items.map(({ name }, index) => (
      <StyledBodyTableRow key={index} onClick={() => onClick('' + index)}>
        <StyledTableCell>
          <Item primary={name} fontSize="small" />
        </StyledTableCell>
        <StyledTableCell align="right">{222}</StyledTableCell>
      </StyledBodyTableRow>
    ))}
  </TableBody>
);

const StyledHeadTableRow = styled(TableRow)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 50%)',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.default,
}));

const StyledBodyTableRow = styled(StyledHeadTableRow)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

const StyledTableCell = styled(TableCell)(() => ({
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
}));
