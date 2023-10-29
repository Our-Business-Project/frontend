import { Ref, forwardRef } from 'react';
import { Controller } from 'react-hook-form';
import { TextFieldProps } from '@mui/material/TextField';
import { Props } from '../global/CustomTextField/props';
import CustomTextField from '../global/CustomTextField';

function MyTextInput({ name, control, label, ...props }: Props & TextFieldProps, ref: Ref<HTMLInputElement>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <CustomTextField
          helperText={error ? error.message : ' '}
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

const TextInput = forwardRef(MyTextInput);
export default TextInput;
