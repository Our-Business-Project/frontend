'use client';
import * as React from 'react';
import { ListItem, ListItemText, Box, styled, IconButton, DialogContentText } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { CalcFolders, CalcFoldersUnit } from '@/core/models/CalcFolders.model';
import { PopUpCreateItem } from '../../PopUpCreateItem';
import CancelIcon from '@mui/icons-material/Cancel';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcFolders } from '@/core/hooks/useCalcFolders';
import { useProfile } from '@/core/hooks/useProfile';
import DeleteIcon from '@mui/icons-material/Delete';
import PopupLayoutWithActions from '@/components/ui/PopUpLayout/PopupLayoutWithActions';

interface FolderContentProps {
  handleClickdOpenFolder: (id: string) => void;
  calcFoldersData: CalcFolders | null;
}

export default function FolderContent({ handleClickdOpenFolder, calcFoldersData }: FolderContentProps) {
  const [creatingNewFolder, setCreatingNewFolder] = React.useState(false);
  const [deletingFolder, setDeletingFolder] = React.useState<CalcFoldersUnit | null>(null);
  const [isDeletingingFolder, setISDeletingFolder] = React.useState(false);
  const { token } = useAuth();
  const { profile } = useProfile(token);
  const { deleteFolder, createFolder } = useCalcFolders(token);

  const handleClickDeleteFolder = (e: React.MouseEvent<HTMLButtonElement>, folder: CalcFoldersUnit) => {
    e.stopPropagation();
    setISDeletingFolder(true);
    setDeletingFolder(folder);
  };

  const DeleteFolderAction = () => {
    deletingFolder && deleteFolder(deletingFolder.id);
    setISDeletingFolder(false);
  };

  const createFolderFunction = (name: string) => {
    createFolder(name);
  };

  const handleCloseDeletingPopUp = () => {
    setISDeletingFolder(false);
  };

  function getFileWord(numFiles: number | undefined) {
    if (numFiles) {
      if (numFiles % 10 === 1 && numFiles % 100 !== 11) {
        return `${numFiles} файл`;
      } else if (
        (numFiles % 10 === 2 || numFiles % 10 === 3 || numFiles % 10 === 4) &&
        (numFiles % 100 < 10 || numFiles % 100 >= 20)
      ) {
        return `${numFiles} файла`;
      } else {
        return `${numFiles} файлів`;
      }
    }
  }

  return (
    <>
      <Box sx={{ minHeight: '350px' }}>
        {creatingNewFolder && (
          <PopUpCreateItem setActive={setCreatingNewFolder} createItemFunction={createFolderFunction} />
        )}
        {Array.isArray(calcFoldersData) &&
          calcFoldersData.map((folder: CalcFoldersUnit, index: number) => (
            <StyledListItem
              onClick={(e) => handleClickdOpenFolder(folder.id)}
              key={index}
              className={'mui-1q896iv-MuiButtonBase-root-MuiButton-root'}
            >
              <FolderIcon color="primary" sx={{ mr: '10px' }} />
              <StyledListItemText primary={folder.name || profile.data?.firstName} />
              {folder.name && (
                <IconButton onClick={(e) => handleClickDeleteFolder(e, folder)}>
                  <DeleteIcon fontSize="medium" color="error" />
                </IconButton>
              )}
            </StyledListItem>
          ))}
      </Box>

      <AbsoluteBox>
        <IconButton onClick={() => setCreatingNewFolder((prev) => !prev)}>
          {creatingNewFolder ? (
            <CancelIcon fontSize="large" color="primary" />
          ) : (
            <AddCircleIcon fontSize="large" color="primary" />
          )}
        </IconButton>
      </AbsoluteBox>

      <PopupLayoutWithActions
        handleClose={handleCloseDeletingPopUp}
        open={isDeletingingFolder}
        title="Видалення папки"
        agreeBtnText="Видалити"
        agreeBtnAction={DeleteFolderAction}
      >
        <DialogContentText id="alert-dialog-description">
          Ви впевнені, що хочете видалити папку "{deletingFolder?.name}"? В ній знаходиться{' '}
          {getFileWord(deletingFolder?.numberOfFiles)}.
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
  margin: 5px 45px 0px 5px;
  li: {
    color: black;
  }
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
