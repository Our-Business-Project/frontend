import { forwardRef } from 'react';
import { Controller } from 'react-hook-form';
import { TextFieldProps } from '@mui/material/TextField';
import { InputRef, Props } from '../CustomTextField/props';
import CustomTextField from '../CustomTextField';

export function withController(Component: React.ComponentType<any>) {
  return forwardRef(({ name, control, ...props }: Props, ref: InputRef) => {
    return (
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <Component
            {...props}
            helperText={error ? error.message : ' '}
            error={!!error}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            inputRef={ref}
          />
        )}
      />
    );
  });
}

function MyInputWithController(props: Props & TextFieldProps, ref: InputRef) {
  return <CustomTextField {...props} ref={ref} />;
}

const InputWithController = withController(forwardRef(MyInputWithController));
export default InputWithController;
