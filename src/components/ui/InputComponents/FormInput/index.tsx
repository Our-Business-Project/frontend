import { Ref, forwardRef } from 'react';
import { Controller } from 'react-hook-form';
import { styled } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Props } from './props';

function MyFormInput({ name, control, label, ...props }: Props & TextFieldProps, ref: Ref<any>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <CustomTextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          fullWidth
          label={label}
          variant="standard"
          {...props}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          inputRef={ref}
        />
      )}
    />
  );
}

const FormInput = forwardRef(MyFormInput);
export default FormInput;

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
