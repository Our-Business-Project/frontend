import { forwardRef, useMemo, useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputRef, Props } from '../global/CustomTextField/props';
import InputWithController from '../global/CustomInputWithController';

function MyPasswordInput(props: Props, ref: InputRef) {
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

  return <InputWithController InputProps={inpProps} type={showPassword ? 'text' : 'password'} {...props} ref={ref} />;
}

const PasswordInput = forwardRef(MyPasswordInput);
export default PasswordInput;
