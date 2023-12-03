import * as React from 'react';
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, styled } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { FixedCostsData } from '@/core/models/FixedCosts.model';
import MuiInput from '@mui/material/Input';
import { redirect } from 'next/navigation';

export function Row({
  row,
  rowIndex,
  updateFixedCostsData,
}: {
  row: FixedCostsData;
  rowIndex: number;
  updateFixedCostsData: (newValue: number, CostsTypeIndex: number, DataIndex?: number, DataItemIndex?: number) => void;
}) {
  const [open, setOpen] = React.useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    rowIndex: number,
    historyRowIndex?: number,
    colIndex?: number
  ) => {
    updateFixedCostsData(+event.target.value, rowIndex, historyRowIndex, colIndex);
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
            onChange={(event) => handleInputChange(event, rowIndex)}
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
                  {row.data.map((historyRow, historyRowIndex) => (
                    <TableRow key={historyRowIndex}>
                      {row.columnNames.map((columnName, colIndex) => (
                        <TableCell align="left" key={colIndex}>
                          {typeof historyRow[colIndex] === 'string' ||
                          (columnName === 'Сума грн.' && row.columnNames.length > 3) ? (
                            historyRow[colIndex]
                          ) : (
                            <Input
                              sx={{ width: '120px' }}
                              value={deleteZeros(historyRow[colIndex])}
                              size="small"
                              onChange={(event) => handleInputChange(event, rowIndex, historyRowIndex, colIndex)}
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
