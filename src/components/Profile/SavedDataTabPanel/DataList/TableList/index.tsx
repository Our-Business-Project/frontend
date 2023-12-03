import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DataListContext } from '@/core/contexts/DataList.context';
import { useProfile } from '@/core/hooks/useProfile';
import { useAuth } from '@/core/hooks/useAuth';
import DeleteIcon from '@mui/icons-material/Delete';
import GoBackItem from '../GoBackItem';
import Item from '../Item';
import { CalcFoldersUnit } from '@/core/models/CalcFolders.model';

const columnNames = ["Ім'я", 'Дата створення', 'Дата модифікації', 'Кіл. Файлів'];

export default function TableList() {
  const theme = useTheme();
  const smmd = useMediaQuery(theme.breakpoints.down('smmd'));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <TableContainer>
        <Table>
          <HeadTable sm={sm} smmd={smmd} />
          <BodyTable sm={sm} smmd={smmd} />
        </Table>
      </TableContainer>
    </>
  );
}

const HeadTable = ({ sm, smmd }: { sm: boolean; smmd: boolean }) => {
  const [colNames, setColNames] = useState<string[]>(columnNames);

  useEffect(() => {
    if (sm) {
      setColNames([...columnNames.slice(0, 1), ...columnNames.slice(3, 4)]);
    } else if (smmd) {
      setColNames([...columnNames.slice(0, 1), ...columnNames.slice(2, 4)]);
    } else {
      setColNames([...columnNames]);
    }
  }, [sm, smmd]);

  return (
    <TableHead>
      <StyledHeadTableRow>
        {colNames.map((itemName, index) => (
          <StyledTableCell key={index}>{itemName}</StyledTableCell>
        ))}
      </StyledHeadTableRow>
    </TableHead>
  );
};

const BodyTable = ({ sm, smmd }: { sm: boolean; smmd: boolean }) => {
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

  const handleDeleteFileOnClick = (e: React.MouseEvent<HTMLButtonElement>, item: CalcFoldersUnit) => {
    e.stopPropagation();
    context && context.fileDeleteOnClick(item);
  };

  const data = context && Array.isArray(context?.items) && (
    <>
      {
        <StyledBodyTableBackButtonRow onClick={context.goBack}>
          {context.type === 'files' && (
            <StyledTableCell>
              <GoBackItem primary={'Назад'} fontSize="small" />
            </StyledTableCell>
          )}
        </StyledBodyTableBackButtonRow>
      }
      {context.items.map(({ id, name, numberOfFiles, createdAt, modifiedAt }) => (
        <StyledBodyTableRow key={id} onClick={() => onClick(id)}>
          <StyledTableCell>
            <Item primary={name || profile.data?.firstName || 'Мої документи'} fontSize="small" type={context.type} />
          </StyledTableCell>
          {!smmd && <StyledTableCell>{createdAt}</StyledTableCell>}
          {!sm && <StyledTableCell>{modifiedAt || 'Не модіфікований'}</StyledTableCell>}
          {context.type === 'folders' && (
            <StyledTableCell align="right">{numberOfFiles !== undefined ? numberOfFiles : '-'}</StyledTableCell>
          )}

          {context.type === 'files' && (
            <StyledTableCell align="right">
              <IconButton
                className="delete-button"
                onClick={(e) => handleDeleteFileOnClick(e, { id, name, numberOfFiles, createdAt })}
              >
                <DeleteIcon fontSize="medium" color="error" />
              </IconButton>
            </StyledTableCell>
          )}
        </StyledBodyTableRow>
      ))}
    </>
  );

  return <TableBody>{data}</TableBody>;
};

const StyledHeadTableRow = styled(TableRow)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '3fr 2fr 2fr 1fr',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.default,
  whiteSpace: 'nowrap',

  [theme.breakpoints.up('md')]: {
    '&:nth-of-type(2),&:nth-of-type(3)': {
      minWidth: '155px',
    },
  },

  [theme.breakpoints.down('smmd')]: {
    gridTemplateColumns: '2fr 2fr 1fr',

    '&:nth-of-type(2)': {
      minWidth: '155px',
    },
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '3fr 1fr',

    '&:nth-of-type(1)': {
      minWidth: '165px',
    },
  },
}));

const StyledBodyTableRow = styled(StyledHeadTableRow)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },

  '& .delete-button': {
    opacity: 0,
  },

  '&:hover .delete-button': {
    opacity: 1,
  },
}));

const StyledBodyTableBackButtonRow = styled(StyledBodyTableRow)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  textOverflow: 'ellipsis',
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  [theme.breakpoints.up('md')]: {
    '&:nth-of-type(1)': {
      minWidth: '200px',
    },
    '&:nth-of-type(2),&:nth-of-type(3)': {
      minWidth: '155px',
    },
  },

  [theme.breakpoints.down('smmd')]: {
    gridTemplateColumns: '2fr 2fr 1fr',

    '&:nth-of-type(2)': {
      minWidth: '155px',
    },
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '3fr 1fr',

    '&:nth-of-type(1)': {
      minWidth: '165px',
    },
  },
}));
