import { ListItemText, styled } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import { Props } from './props';

export default function Item({ primary, fontSize }: Props) {
  return (
    <>
      <StyledFolderIcon fontSize={fontSize} />
      <ListItemText primary={primary} />
    </>
  );
}

const StyledFolderIcon = styled(FolderIcon)(() => ({
  color: 'inherit',
}));
