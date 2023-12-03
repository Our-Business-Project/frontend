import { ListItemText, styled } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import { Props } from './props';

export default function Item({ primary, fontSize, type }: Props) {
  return (
    <>
      {type === 'folders' ? <StyledFolderIcon fontSize={fontSize} /> : <StyledFileIcon fontSize={fontSize} />}
      <StyledListItemText primary={primary} />
    </>
  );
}

const StyledFolderIcon = styled(FolderIcon)(() => ({
  color: 'inherit',
}));

const StyledFileIcon = styled(DescriptionIcon)(() => ({
  color: 'inherit',
}));

const StyledListItemText = styled(ListItemText)(() => ({
  '& .MuiTypography-root': {
    textOverflow: 'ellipsis',
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));
