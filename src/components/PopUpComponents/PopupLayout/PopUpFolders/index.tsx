'use client';
import * as React from 'react';
import { List, ListItem, ListItemText, Box, styled, IconButton, TextField } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoneIcon from '@mui/icons-material/Done';
import { CalcFoldersUnit } from '@/core/models/CalcFolders.model';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcFolders } from '@/core/hooks/useCalcFolders';

export default function PopUpFolders() {
  const [creatingNewFolder, setCreatingNewFolder] = React.useState(false);
  const { isAuthenticated, token } = useAuth();
  const { calcFolders, loadCalcFolders } = useCalcFolders(token);

  useEffect(() => {
    if (!isAuthenticated) {
      redirect('/sign-in');
    } else {
      loadCalcFolders();
    }
  }, [isAuthenticated, loadCalcFolders]);

  return (
    <Box position="relative">
      <List>
        {creatingNewFolder && (
          <ListItem>
            <CreateNewFolderIcon color="primary" sx={{ mr: '10px' }} />
            <StyledListItemText>
              <TextField sx={{ input: { color: 'text.secondary' } }} variant="standard" />{' '}
              <IconButton disabled color="primary">
                <DoneIcon />
              </IconButton>
            </StyledListItemText>
          </ListItem>
        )}
        {Array.isArray(calcFolders.data) &&
          calcFolders.data.map((folder: CalcFoldersUnit, index: number) => (
            <ListItem key={index}>
              <FolderIcon color="primary" sx={{ mr: '10px' }} />
              <StyledListItemText primary={folder.name || 'Unnamed Folder'} />
            </ListItem>
          ))}

        <AbsoluteBox>
          <IconButton onClick={() => setCreatingNewFolder(true)}>
            <AddCircleIcon fontSize="large" color="primary" />
          </IconButton>
        </AbsoluteBox>
      </List>
    </Box>
  );
}

const AbsoluteBox = styled(Box)`
  position: absolute;
  bottom: -10px;
  right: -10px;
`;

const StyledListItemText = styled(ListItemText)`
  margin: 5px 40px 0px 5px;
`;
