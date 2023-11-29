'use client';
import * as React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Box,
  styled,
  IconButton,
  TextField,
  LinearProgress,
  Button,
  ButtonBase,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { CalcFolders, CalcFoldersUnit } from '@/core/models/CalcFolders.model';
import { PopUpCreateFolder } from '../PopUpCreateFolder';
import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcFolders } from '@/core/hooks/useCalcFolders';
import { useProfile } from '@/core/hooks/useProfile';
import DeleteIcon from '@mui/icons-material/Delete';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export default function PopUpFolders() {
  const [creatingNewFolder, setCreatingNewFolder] = React.useState(false);
  const [fileIcon, setFileIcon] = React.useState(<FolderIcon color="primary" sx={{ mr: '10px' }} />);
  const [calcFoldersData, setCalcFoldersData] = React.useState<CalcFolders | null>(null);
  const { isAuthenticated, token, userId } = useAuth();
  const { profile, loadProfile } = useProfile(token);
  const { calcFolders, getAllFolders, deleteFolder, getOneFolder } = useCalcFolders(token);

  useEffect(() => {
    if (userId) {
      getAllFolders();
      loadProfile(userId);
    } else {
      redirect('/sign-in');
    }
  }, [isAuthenticated, getAllFolders]);

  const handleClickedDeleteFolder = (id: string) => {
    deleteFolder(id);
  };

  const handleClickdOpenFolder = (id: string) => {
    getOneFolder(id);
    setFileIcon(<InsertDriveFileIcon color="primary" sx={{ mr: '10px' }} />);
  };

  useEffect(() => {
    if (calcFolders.data) {
      setCalcFoldersData(calcFolders.data);
    }
  }, [calcFolders]);

  console.log(calcFoldersData);

  return (
    <Box position="relative">
      <List>
        {creatingNewFolder && <PopUpCreateFolder setActive={setCreatingNewFolder} />}
        {Array.isArray(calcFoldersData) &&
          calcFoldersData.map((folder: CalcFoldersUnit, index: number) => (
            <StyledListItem
              onClick={() => handleClickdOpenFolder(folder.id)}
              key={index}
              className="mui-1q896iv-MuiButtonBase-root-MuiButton-root"
            >
              {fileIcon}
              <StyledListItemText primary={folder.name || profile.data?.firstName} />
              <IconButton onClick={() => handleClickedDeleteFolder(folder.id)}>
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
