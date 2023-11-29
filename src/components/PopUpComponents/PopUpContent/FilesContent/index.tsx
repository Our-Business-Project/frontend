'use client';
import * as React from 'react';
import { ListItem, ListItemText, Box, styled, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { CalcFolders, CalcFoldersUnit } from '@/core/models/CalcFolders.model';
import { PopUpCreateItem } from '../../PopUpCreateItem';
import CancelIcon from '@mui/icons-material/Cancel';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcData } from '@/core/hooks/useCalcData';
import { CalculatorDataIncome } from '@/core/models/СalcData.model';
import DeleteIcon from '@mui/icons-material/Delete';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { errorNotify } from '@/core/helpers/notifications';
import { CalcContext } from '@/core/contexts/Calc.context';
import { redirect } from 'next/navigation';

interface FilesContentProps {
  //   handleClickdOpenFolder: (id: string) => void;
  calcFoldersData: CalcFolders | CalculatorDataIncome | null;
}

export default function FilesContent({ calcFoldersData }: FilesContentProps) {
  const [creatingNewFile, setCreatingNewFile] = React.useState(false);
  const calcContext = React.useContext(CalcContext);
  if (!calcContext) {
    redirect('/404');
  }

  const { data } = calcContext;
  const { token } = useAuth();
  const { deleteData, createData } = useCalcData(token);

  const handleClickedDeleteData = (dataId: string) => {
    if (calcFoldersData) {
      const folderId = calcFoldersData.id;
      if (typeof folderId === 'string') {
        deleteData(folderId, dataId);
      } else {
        errorNotify('щось пішло не так');
      }
    } else {
      errorNotify('щось пішло не так');
    }
  };

  const createFileFunction = (name: string) => {
    console.log(data)
    if (calcFoldersData && typeof calcFoldersData.id === 'string') createData(calcFoldersData.id, name, data);
  };
  return (
    <>
      <Box sx={{ minHeight: '350px' }}>
        {creatingNewFile && <PopUpCreateItem setActive={setCreatingNewFile} createItemFunction={createFileFunction} />}
        {calcFoldersData && Array.isArray(calcFoldersData.data) && calcFoldersData.data.length > 0
          ? calcFoldersData.data.map((file: CalcFoldersUnit, index: number) => (
              <StyledListItem
                // onClick={() => handleClickedDeleteData(folder.id)}
                key={index}
                className="mui-1q896iv-MuiButtonBase-root-MuiButton-root"
              >
                <InsertDriveFileIcon color="primary" sx={{ mr: '10px' }} />
                <StyledListItemText primary={file.name} />
                <IconButton onClick={() => handleClickedDeleteData(file.id)}>
                  <DeleteIcon fontSize="medium" color="error" />
                </IconButton>
              </StyledListItem>
            ))
          : !creatingNewFile && <Box>У вас ще немає збережених файлів(</Box>}
      </Box>

      <AbsoluteBox>
        <IconButton onClick={() => setCreatingNewFile((prev) => !prev)}>
          {creatingNewFile ? (
            <CancelIcon fontSize="large" color="primary" />
          ) : (
            <AddCircleIcon fontSize="large" color="primary" />
          )}
        </IconButton>
      </AbsoluteBox>
    </>
  );
}

const AbsoluteBox = styled(Box)`
  position: sticky;
  bottom: 0;
  right: 0;
  margin-left: 90%;
`;

const StyledListItemText = styled(ListItemText)`
  margin: 5px 45px 0px 5px;
`;

const StyledListItem = styled(ListItem)`
  text-transform: none;
  button {
    opacity: 0;
  }
  &:hover {
    button {
      opacity: 0.3;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
