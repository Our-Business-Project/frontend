import { Ref, forwardRef, useCallback, useMemo, useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Props } from './props';
import PhoneInput from '../PhoneInput';
import InputWithController from '../global/CustomInputWithController';

function MyEmailOrPhoneInput({ name, label, label1, control, callback, ...props }: Props, ref: Ref<HTMLInputElement>) {
  const [showPhoneField, setShowPhoneField] = useState(false);

  const handleClickShowEmailOrPhone = useCallback(() => {
    setShowPhoneField((show) => !show);
    callback && callback();
  }, [callback]);

  const handleMouseDownShowEmailOrPhone = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const inpProps = useMemo(
    () => ({
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowEmailOrPhone}
            onMouseDown={handleMouseDownShowEmailOrPhone}
            edge="end"
          >
            {showPhoneField ? <EmailIcon /> : <PhoneIcon />}
          </IconButton>
        </InputAdornment>
      ),
    }),
    [handleClickShowEmailOrPhone, showPhoneField]
  );

  return showPhoneField ? (
    <PhoneInput name={name} control={control} label={label} InputProps={inpProps} {...props} ref={ref} />
  ) : (
    <InputWithController name={name} control={control} label={label1} InputProps={inpProps} {...props} ref={ref} />
  );
}

const EmailOrPhoneInput = forwardRef(MyEmailOrPhoneInput);

export default EmailOrPhoneInput;
