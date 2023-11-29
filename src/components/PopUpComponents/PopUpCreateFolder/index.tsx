'use client';
import * as React from 'react';
import { ListItem, ListItemText, styled, IconButton, TextField } from '@mui/material';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DoneIcon from '@mui/icons-material/Done';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcFolders } from '@/core/hooks/useCalcFolders';

interface PopUpCreateFolderProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PopUpCreateFolder({ setActive }: PopUpCreateFolderProps) {
  const [isAcceptActive, setIsAcceptActive] = React.useState(false);
  const [folderName, setFolderName] = React.useState('');
  const { token } = useAuth();
  const { createFolder } = useCalcFolders(token);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0) {
      setIsAcceptActive(true);
      setFolderName(event.target.value);
    }
  };

  const handleClickCreateFolder = () => {
    createFolder(folderName);
    setActive(false);
  };

  return (
    <ListItem>
      <CreateNewFolderIcon color="primary" sx={{ mr: '10px' }} />
      <StyledListItemText>
        <TextField onChange={handleInputChange} sx={{ input: { color: 'text.secondary' } }} variant="standard" />{' '}
        <IconButton onClick={handleClickCreateFolder} disabled={!isAcceptActive} color="primary">
          <DoneIcon />
        </IconButton>
      </StyledListItemText>
    </ListItem>
  );
}
const StyledListItemText = styled(ListItemText)`
  margin: 5px 40px 0px 5px;
`;
