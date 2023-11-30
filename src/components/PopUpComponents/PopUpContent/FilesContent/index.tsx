'use client';
import * as React from 'react';
import { List, ListItem, ListItemText, Box, styled, IconButton } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { CalcFolders, CalcFoldersUnit } from '@/core/models/CalcFolders.model';
import { PopUpCreateItem } from '../../PopUpCreateItem';
import CancelIcon from '@mui/icons-material/Cancel';
import { useAuth } from '@/core/hooks/useAuth';
import { useCalcData } from '@/core/hooks/useCalcData';
import { useProfile } from '@/core/hooks/useProfile';
import { CalculatorDataIncome } from '@/core/models/СalcData.model';
import DeleteIcon from '@mui/icons-material/Delete';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { errorNotify } from '@/core/helpers/notifications';

interface FilesContentProps {
  //   handleClickdOpenFolder: (id: string) => void;
  calcFoldersData: CalcFolders | CalculatorDataIncome | null;
}

export default function FilesContent({ calcFoldersData }: FilesContentProps) {
  const [creatingNewFile, setCreatingNewFile] = React.useState(false);
  const { token } = useAuth();
  const { profile } = useProfile(token);
  const { deleteData } = useCalcData(token);

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

  // const createFileFunction = (name: string) => {
  //   createFolder(name);
  // };

  return (
    <List>
      {/* {creatingNewFile && <PopUpCreateItem setActive={setCreatingNewFile} />} */}
      {calcFoldersData &&
        Array.isArray(calcFoldersData.data) &&
        calcFoldersData.data.map((file: CalcFoldersUnit, index: number) => (
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
        ))}

      <AbsoluteBox>
        <IconButton onClick={() => setCreatingNewFile((prev) => !prev)}>
          {creatingNewFile ? (
            <CancelIcon fontSize="large" color="primary" />
          ) : (
            <AddCircleIcon fontSize="large" color="primary" />
          )}
        </IconButton>
      </AbsoluteBox>
    </List>
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
