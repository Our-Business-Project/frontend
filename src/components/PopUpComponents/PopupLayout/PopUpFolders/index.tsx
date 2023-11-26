import * as React from 'react';
import { List, ListItem, ListItemText, Box, styled, IconButton, TextField } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoneIcon from '@mui/icons-material/Done';

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
export default function PopUpFolders() {
  const [creatingNewFolder, setCreatingNewFolder] = React.useState(false);

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
        {generate(
          <ListItem>
            <FolderIcon color="primary" sx={{ mr: '10px' }} />
            <StyledListItemText primary="Магазин постільної білизни" />
          </ListItem>
        )}
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
