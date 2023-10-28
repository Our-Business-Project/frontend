import { Controller } from 'react-hook-form';
import { styled } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Props } from './props';

export default function DefaultInput({ name, control, label, ...props }: Props & TextFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <CustomTextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="standard"
          {...props}
        />
      )}
    />
  );
}

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& label': {
    color: theme.palette.text.primary,
  },

  '& .MuiInput-root:before': {
    borderBottom: '1px solid',
    borderColor: theme.palette.text.primary,
  },
  '& .MuiInput-root:after': {
    borderColor: theme.palette.text.primary,
    transform: 'scaleX(0)',
  },

  '& label.Mui-focused': {
    color: theme.palette.text.primary,
  },

  '& .MuiInput-root.Mui-focused:before': {
    borderColor: theme.palette.text.primary,
  },
  '& .MuiInput-root.Mui-focused:after': {
    borderColor: theme.palette.text.primary,
  },
}));
