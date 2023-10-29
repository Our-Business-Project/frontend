import { Ref, forwardRef } from 'react';
import InputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';
import { TextFieldProps } from '@mui/material/TextField';
import { Props } from '../global/CustomTextField/props';
import CustomTextField from '../global/CustomTextField';
import { phoneMask } from '@/core/validation/constants/masks';

function MyPhoneInput({ name, control, label, ...props }: Props & TextFieldProps, ref: Ref<HTMLInputElement>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <InputMask mask={phoneMask} maskChar="_" onBlur={onBlur} onChange={onChange} value={value}>
          {
            (() => (
              <CustomTextField
                helperText={error ? error.message : ' '}
                size="small"
                error={!!error}
                fullWidth
                label={label}
                variant="standard"
                inputRef={ref}
              />
            )) as unknown as React.ReactNode
          }
        </InputMask>
      )}
    />
  );
}

const PhoneInput = forwardRef(MyPhoneInput);
export default PhoneInput;
