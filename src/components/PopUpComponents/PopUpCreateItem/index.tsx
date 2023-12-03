'use client';
import * as React from 'react';
import { ListItem, ListItemText, styled, IconButton, TextField } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

interface PopUpCreateItemProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  createItemFunction: (name: string) => void;
  icon: React.ReactElement;
}

export function PopUpCreateItem({ setActive, createItemFunction, icon }: PopUpCreateItemProps) {
  const [isAcceptActive, setIsAcceptActive] = React.useState(false);
  const [itemName, setItemName] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0) {
      setIsAcceptActive(true);
      setItemName(event.target.value);
    }
  };

  const handleClickCreateItem = () => {
    createItemFunction(itemName);
    setActive(false);
  };

  return (
    <ListItem>
      {icon}
      {/* <CreateNewFolderIcon color="primary" sx={{ mr: '10px' }} /> */}
      <StyledListItemText>
        <TextField
          autoFocus
          onChange={handleInputChange}
          sx={{ input: { color: 'text.secondary' } }}
          variant="standard"
        />{' '}
        <IconButton onClick={handleClickCreateItem} disabled={!isAcceptActive} color="primary">
          <DoneIcon />
        </IconButton>
      </StyledListItemText>
    </ListItem>
  );
}
const StyledListItemText = styled(ListItemText)`
  margin: 5px 40px 0px 5px;
`;
