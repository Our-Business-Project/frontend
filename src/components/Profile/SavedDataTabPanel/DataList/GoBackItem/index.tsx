import { ListItemText, styled } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Props } from './props';

export default function GoBackItem({ primary, fontSize }: Props) {
  return (
    <>
      <StyledKeyboardReturnIcon fontSize={fontSize} />
      <ListItemText primary={primary} />
    </>
  );
}

const StyledKeyboardReturnIcon = styled(KeyboardReturnIcon)(() => ({
  color: 'inherit',
}));
