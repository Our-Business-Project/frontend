import { useState } from 'react';
import { Box, styled } from '@mui/material';
import TableList from './TableList';

const folders = [
  { name: 'Folder 1' },
  { name: 'Folder 2' },
  { name: 'Folder 3' },
  { name: 'Folder 4' },
  { name: 'Folder 5' },
  { name: 'Folder 6' },
];

const files = [
  { folderId: '0', data: [{ name: 'File 1' }, { name: 'File 2' }, { name: 'File 3' }, { name: 'File 4' }] },
];

export default function FoldersList() {
  const [currentItems, setCurrentItems] = useState(folders);

  const itemOnClick = (index: string) => {
    console.log(index);
    setCurrentItems(files.find((item) => item.folderId === index)?.data ?? []);
  };

  return (
    <StyledBoxContainer>
      <TableList items={currentItems} onClick={itemOnClick} />
    </StyledBoxContainer>
  );
}

const StyledBoxContainer = styled(Box)(() => ({
  width: '100%',
}));
