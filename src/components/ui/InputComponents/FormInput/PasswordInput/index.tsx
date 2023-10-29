import { Ref, forwardRef, useMemo, useState } from 'react';
import { Controller } from 'react-hook-form';
import { TextFieldProps } from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { Props } from '../global/CustomTextField/props';
import CustomTextField from '../global/CustomTextField';

function MyPasswordInput({ name, control, label, ...props }: Props & TextFieldProps, ref: Ref<HTMLInputElement>) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const inpProps = useMemo(
    () => ({
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      ),
    }),
    [showPassword]
  );

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
          type={showPassword ? 'text' : 'password'}
          InputProps={inpProps}
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

const PasswordInput = forwardRef(MyPasswordInput);
export default PasswordInput;
