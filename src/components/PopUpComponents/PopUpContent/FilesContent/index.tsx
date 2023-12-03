'use client';
import * as React from 'react';
import { ListItem, ListItemText, Box, styled, IconButton, Typography, DialogContentText } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { CalcFoldersUnit } from '@/core/models/CalcFolders.model';
import { PopUpCreateItem } from '../../PopUpCreateItem';
import CancelIcon from '@mui/icons-material/Cancel';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcData } from '@/core/hooks/useCalcData';
import { CalculatorDataIncome } from '@/core/models/СalcData.model';
import DeleteIcon from '@mui/icons-material/Delete';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PopupLayoutWithActions from '@/components/ui/PopUpLayout/PopupLayoutWithActions';
import { useCalculations } from '@/core/hooks/useCalculations';

interface FilesContentProps {
  calcFoldersData: CalculatorDataIncome | null;
}

export default function FilesContent({ calcFoldersData }: FilesContentProps) {
  const [creatingNewFile, setCreatingNewFile] = React.useState(false);
  const [deletingFile, setDeletingFile] = React.useState<CalcFoldersUnit | null>(null);
  const [isDeletingingFile, setIsDeletingFile] = React.useState(false);
  const listItemClass = 'mui-1q896iv-MuiButtonBase-root-MuiButton-root';

  const { token } = useAuth();
  const { deleteData, createData } = useCalcData(token);
  const { calcData, fixedCostsData } = useCalculations(token);

  const handleClickedDeleteData = (data: CalcFoldersUnit) => {
    setIsDeletingFile(true);
    setDeletingFile(data);
  };

  const DeleteFileAction = () => {
    deletingFile && calcFoldersData && deleteData(calcFoldersData.id, deletingFile.id);
    setIsDeletingFile(false);
  };

  const handleCloseDeletingPopUp = () => {
    setIsDeletingFile(false);
  };

  const createFileFunction = React.useCallback(
    (name: string) => {
      if (calcFoldersData && fixedCostsData && typeof calcFoldersData.id === 'string')
        createData(calcFoldersData.id, name, calcData, fixedCostsData);
    },
    [calcData, calcFoldersData, createData, fixedCostsData]
  );

  return (
    <>
      <Box sx={{ minHeight: '300px' }}>
        {creatingNewFile && (
          <PopUpCreateItem
            setActive={setCreatingNewFile}
            createItemFunction={createFileFunction}
            icon={<NoteAddIcon color="primary" sx={{ mr: '10px' }} />}
          />
        )}
        {calcFoldersData && Array.isArray(calcFoldersData.data) && calcFoldersData.data.length > 0
          ? calcFoldersData.data.map((file: CalcFoldersUnit, index: number) => (
              <StyledListItem key={index} className={listItemClass}>
                <InsertDriveFileIcon color="primary" sx={{ mr: '10px' }} />
                <StyledListItemText primary={file.name} color={'text.secondary'} />
                <IconButton onClick={() => handleClickedDeleteData(file)}>
                  <DeleteIcon fontSize="medium" color="error" />
                </IconButton>
              </StyledListItem>
            ))
          : !creatingNewFile && <Typography color="text.secondary">У вас ще немає збережених файлів(</Typography>}
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

      <PopupLayoutWithActions
        handleClose={handleCloseDeletingPopUp}
        open={isDeletingingFile}
        title="Видалення файлу"
        agreeBtnText="Видалити"
        agreeBtnAction={DeleteFileAction}
      >
        <DialogContentText id="alert-dialog-description">
          Ви впевнені, що хочете видалити файл "{deletingFile?.name}"?
        </DialogContentText>
      </PopupLayoutWithActions>
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
  text-transform: none;
`;

const StyledListItem = styled(ListItem)`
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
