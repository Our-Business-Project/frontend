'use client';
import * as React from 'react';
import { List, ListItem, ListItemText, Box, styled, IconButton, TextField } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { CalcFoldersUnit } from '@/core/models/CalcFolders.model';
import { PopUpCreateFolder } from './PopUpCreateFolder';
import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcFolders } from '@/core/hooks/useCalcFolders';
import { useProfile } from '@/core/hooks/useProfile';
import DeleteIcon from '@mui/icons-material/Delete';

export default function PopUpFolders() {
  const [creatingNewFolder, setCreatingNewFolder] = React.useState(false);
  const { isAuthenticated, token, userId } = useAuth();
  const { profile, loadProfile } = useProfile(token);
  const { calcFolders, getAllCaclFolders, deleteFolder } = useCalcFolders(token);

  useEffect(() => {
    if (userId) {
      getAllCaclFolders();
      loadProfile(userId);
    } else {
      redirect('/sign-in');
    }
  }, [isAuthenticated, getAllCaclFolders]);

  const handleClickdDeleteFolder = (id: string) => {
    deleteFolder(id);
  };

  return (
    <Box position="relative">
      <List>
        {creatingNewFolder && <PopUpCreateFolder setActive={setCreatingNewFolder} />}
        {Array.isArray(calcFolders.data) &&
          calcFolders.data.map((folder: CalcFoldersUnit, index: number) => (
            <StyledListItem key={index}>
              <FolderIcon color="primary" sx={{ mr: '10px' }} />
              <StyledListItemText primary={folder.name || profile.data?.firstName} />
              <IconButton onClick={() => handleClickdDeleteFolder(folder.id)}>
                <DeleteIcon fontSize="medium" color="error" />
              </IconButton>
            </StyledListItem>
          ))}

        <AbsoluteBox>
          <IconButton onClick={() => setCreatingNewFolder((prev) => !prev)}>
            {creatingNewFolder ? (
              <CancelIcon fontSize="large" color="primary" />
            ) : (
              <AddCircleIcon fontSize="large" color="primary" />
            )}
          </IconButton>
        </AbsoluteBox>
      </List>
    </Box>
  );
}

const AbsoluteBox = styled(Box)`
  position: absolute;
  bottom: -15px;
  right: -15px;
`;

const StyledListItemText = styled(ListItemText)`
  margin: 5px 45px 0px 5px;
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
