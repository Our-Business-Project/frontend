import * as React from 'react';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { FixedCostsContext } from '@/core/contexts/FixedCosts.context';
import { FixedCostsData } from '@/core/models/FixedCosts.model';
import MuiInput from '@mui/material/Input';
import { useContext } from 'react';
import { redirect } from 'next/navigation';

export function Row(props: { row: FixedCostsData }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const fixedCostsContext = useContext(FixedCostsContext);

  if (!fixedCostsContext) {
     redirect('/404');
  }

  const { updateContext } = fixedCostsContext;

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: number,
    element?: string
  ) => {
    element ? updateContext(id, +event.target.value, element) : updateContext(id, +event.target.value);
  };

  const deleteZeros = (value: number | string) => {
    return value !== 0 ? ('' + value).replace(/^0+/, '') : value;
  };

  return (
    <>
      <TableRow>
        <TableCell component="th" scope="row">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {row.name}
        </TableCell>
        <TableCell sx={{ width: '120px' }} component="th" align="right">
          <Input
            value={deleteZeros(row.value)}
            size="small"
            onChange={(event) => handleInputChange(event, row.id)}
            aria-label="Always visible"
            type="number"
            id="standard-basic"
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={2} sx={{ borderBottom: 'none', margin: 0, padding: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: '15px 0 15px 60px' }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {row.columnNames.map((columnName, index) => (
                      <TableCellHead align="left" sx={{ paddingLeft: '15px' }} key={index}>
                        {columnName}
                      </TableCellHead>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.data.map((historyRow, index) => (
                    <TableRow key={index}>
                      {row.columnNames.map((columnName, colIndex) => (
                        <TableCell align="left" key={colIndex}>
                          {typeof historyRow[columnName] === 'string' ||
                          (columnName === 'Сума грн.' && row.columnNames.length > 3) ? (
                            historyRow[columnName]
                          ) : (
                            <Input
                              sx={{ width: '120px' }}
                              value={deleteZeros(historyRow[columnName])}
                              size="small"
                              onChange={(event) => handleInputChange(event, historyRow.id, columnName)}
                              aria-label="Always visible"
                              type="number"
                              id="standard-basic"
                            />
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const TableCellHead = styled(TableCell)`
  border-bottom: 14px;
  opacity: 50%;
`;

const Input = styled(MuiInput)`
  font-size: 14px;
  text-align: center;
  padding-left: 10px;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &.MuiInput-root::before {
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    color: unset !important;
  }

  &.MuiInput-root::after {
    border-bottom: 2px solid white;
  }
`;
