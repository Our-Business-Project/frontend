import { forwardRef } from 'react';
import { TextField, TextFieldProps, styled } from '@mui/material';
import { InputRef } from './props';

function CustomTextField(props: TextFieldProps, ref: InputRef) {
  return <MyCustomTextField size="small" fullWidth variant="standard" {...props} ref={ref} />;
}

const MyCustomTextField = styled(TextField)(({ theme }) => ({
  '& label': {
    color: theme.palette.text.primary,
  },

  '& .MuiInputBase-root.MuiInput-root:before': {
    borderBottom: '1px solid',
    borderColor: theme.palette.text.primary,
  },
  '& .MuiInputBase-root.MuiInput-root:hover:before': {
    borderBottom: '1px solid',
    borderColor: theme.palette.text.primary,
  },
  '& .MuiInput-root:after': {
    borderColor: theme.palette.text.primary,
  },
  '& .MuiInput-root:hover:after': {
    borderColor: theme.palette.text.primary,
    transform: 'scaleX(1)',
  },

  '& label.Mui-focused': {
    color: theme.palette.text.primary,
  },

  '& .MuiInput-root.Mui-error input': {
    color: theme.palette.error.main,
  },
  '& .MuiInput-root.Mui-error.Mui-focused input': {
    color: theme.palette.text.primary,
  },

  '& .MuiInput-root.Mui-focused:before': {
    borderColor: theme.palette.text.primary,
  },
  '& .MuiInput-root.Mui-focused:after': {
    borderColor: theme.palette.text.primary,
  },

  '& .MuiInputBase-root.MuiInput-root.Mui-error:before': {
    borderColor: theme.palette.error.main,
  },
  '& .MuiInputBase-root.MuiInput-root.Mui-error:after': {
    borderColor: theme.palette.error.main,
  },

  '& .MuiInputBase-root.MuiInput-root.Mui-error.Mui-focused:before': {
    borderColor: theme.palette.text.primary,
  },
  '& .MuiInputBase-root.MuiInput-root.Mui-error.Mui-focused:after': {
    borderColor: theme.palette.text.primary,
  },

  '& .MuiInput-root.Mui-error .MuiButtonBase-root': {
    color: theme.palette.error.main,
  },
  '& .MuiInput-root.Mui-error.Mui-focused .MuiButtonBase-root': {
    color: theme.palette.text.primary,
  },

  '& .MuiFormHelperText-root.Mui-error.Mui-focused': {
    opacity: 0,
  },
}));
export default forwardRef(CustomTextField);
