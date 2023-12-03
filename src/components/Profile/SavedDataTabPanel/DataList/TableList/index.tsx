import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from '@mui/material';
import { useCallback, useContext, useMemo } from 'react';
import { DataListContext } from '@/core/contexts/DataList.context';
import { useProfile } from '@/core/hooks/useProfile';
import { useAuth } from '@/core/hooks/useAuth';
import GoBackItem from '../GoBackItem';
import Item from '../Item';

const columnNames = ["Ім'я", 'Дата створення', 'Дата модифікації', 'Кіл. Файлів'];

export default function TableList() {
  return (
    <>
      <TableContainer>
        <Table>
          <HeadTable />
          <BodyTable />
        </Table>
      </TableContainer>
    </>
  );
}

const HeadTable = () => (
  <TableHead>
    <StyledHeadTableRow>
      {columnNames.map((itemName, index) => (
        <StyledTableCell key={index}>{itemName}</StyledTableCell>
      ))}
    </StyledHeadTableRow>
  </TableHead>
);

const BodyTable = () => {
  const context = useContext(DataListContext);
  const { token } = useAuth();
  const { profile } = useProfile(token);

  const onClick = useCallback(
    (id: string) => {
      if (context?.type === 'folders') {
        context.folderOnClick(id);
      } else if (context?.type === 'files') {
        context.fileOnClick(id);
      }
    },
    [context]
  );

  const data = useMemo(
    () =>
      context &&
      Array.isArray(context?.items) && (
        <>
          {
            <StyledBodyTableRow onClick={context.goBack}>
              {context.type === 'files' && (
                <StyledTableCell>
                  <GoBackItem primary={'Назад'} fontSize="small" />
                </StyledTableCell>
              )}
            </StyledBodyTableRow>
          }
          {context.items.map(({ id, name, numberOfFiles, createdAt, modifiedAt }) => (
            <StyledBodyTableRow key={id} onClick={() => onClick(id)}>
              <StyledTableCell>
                <Item
                  primary={name || profile.data?.firstName || 'Мої документи'}
                  fontSize="small"
                  type={context.type}
                />
              </StyledTableCell>
              <StyledTableCell>{createdAt}</StyledTableCell>
              <StyledTableCell>{modifiedAt}</StyledTableCell>
              <StyledTableCell align="right">{numberOfFiles !== undefined ? numberOfFiles : '-'}</StyledTableCell>
            </StyledBodyTableRow>
          ))}
        </>
      ),
    [context, onClick, profile.data?.firstName]
  );

  return <TableBody>{data}</TableBody>;
};

const StyledHeadTableRow = styled(TableRow)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '2fr 2fr 2fr 1fr',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.default,
}));

const StyledBodyTableRow = styled(StyledHeadTableRow)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const StyledTableCell = styled(TableCell)(() => ({
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
}));
