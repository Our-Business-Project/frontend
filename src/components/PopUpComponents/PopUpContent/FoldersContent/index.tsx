'use client';
import * as React from 'react';
import { List, ListItem, ListItemText, Box, styled, IconButton } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { CalcFolders, CalcFoldersUnit } from '@/core/models/CalcFolders.model';
import { PopUpCreateItem } from '../../PopUpCreateItem';
import CancelIcon from '@mui/icons-material/Cancel';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcFolders } from '@/core/hooks/useCalcFolders';
import { useProfile } from '@/core/hooks/useProfile';
import DeleteIcon from '@mui/icons-material/Delete';
import { CalculatorDataIncome } from '@/core/models/СalcData.model';

interface FolderContentProps {
  handleClickdOpenFolder: (id: string) => void;
  calcFoldersData: CalcFolders | CalculatorDataIncome | null;
}

export default function FolderContent({ handleClickdOpenFolder, calcFoldersData }: FolderContentProps) {
  const [creatingNewFolder, setCreatingNewFolder] = React.useState(false);
  const { token } = useAuth();
  const { profile } = useProfile(token);
  const { deleteFolder, createFolder } = useCalcFolders(token);

  const handleClickedDeleteFolder = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();
    deleteFolder(id);
  };

  const createFolderFunction = (name: string) => {
    createFolder(name);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <List sx={{ height: '400px', scrollBehavior: 'auto', position: 'static' }}>
        {creatingNewFolder && (
          <PopUpCreateItem setActive={setCreatingNewFolder} createItemFunction={createFolderFunction} />
        )}
        {Array.isArray(calcFoldersData) &&
          calcFoldersData.map((folder: CalcFoldersUnit, index: number) => (
            <StyledListItem
              onClick={(e) => handleClickdOpenFolder(folder.id)}
              key={index}
              className="mui-1q896iv-MuiButtonBase-root-MuiButton-root"
            >
              <FolderIcon color="primary" sx={{ mr: '10px' }} />
              <StyledListItemText primary={folder.name || profile.data?.firstName} />
              <IconButton onClick={(e) => handleClickedDeleteFolder(e, folder.id)}>
                <DeleteIcon fontSize="medium" color="error" />
              </IconButton>
            </StyledListItem>
          ))}

        <AbsoluteBox >
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
  display: inline-block;
  position: sticky;
  bottom: 0;
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
