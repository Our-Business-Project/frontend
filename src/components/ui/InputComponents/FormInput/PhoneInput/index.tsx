import { forwardRef } from 'react';
import InputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';
import { TextFieldProps } from '@mui/material/TextField';
import { Props } from '../global/CustomInputWithMask/props';
import CustomTextField from '../global/CustomTextField';
import { phoneMask } from '@/core/validation/constants/masks';
import { withMask } from '../global/CustomInputWithMask';
import { InputRef } from '../global/CustomTextField/props';

export function withPhoneAdornment(Component: React.ComponentType<TextFieldProps>) {
  return forwardRef(({ name, control, ...props }: Props, ref: InputRef) => (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <InputMask mask={phoneMask} maskChar="_" onBlur={onBlur} onChange={onChange} value={value}>
          <Component
            helperText={error ? error.message : ' '}
            size="small"
            fullWidth
            {...props}
            error={!!error}
            inputRef={ref}
          />
        </InputMask>
      )}
    />
  ));
}

function MyPhoneInput(props: Props, ref: InputRef) {
  return <CustomTextField {...props} ref={ref} />;
}

const PhoneInput = withMask(forwardRef(MyPhoneInput));
export default PhoneInput;
