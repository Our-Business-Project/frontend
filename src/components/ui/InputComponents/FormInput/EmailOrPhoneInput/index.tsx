import { Ref, forwardRef, useMemo, useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Props } from '../global/CustomInputWithMask/props';
import PhoneInput from '../PhoneInput';
import InputWithController from '../global/CustomInputWithController';

const MyPhoneInput = PhoneInput;
const MyEmailInput = InputWithController;

function MyEmailOrPhoneInput({ name, control, label, ...props }: Props, ref: Ref<HTMLInputElement>) {
  const [showPhoneField, setShowPhoneField] = useState(false);

  const handleClickShowEmailOrPhone = () => setShowPhoneField((show) => !show);

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
    [showPhoneField]
  );

  return showPhoneField ? (
    <MyPhoneInput name={name} control={control} label={label} InputProps={inpProps} {...props} ref={ref} />
  ) : (
    <MyEmailInput name={name} control={control} label={label} InputProps={inpProps} {...props} ref={ref} />
  );
}

const EmailOrPhoneInput = forwardRef(MyEmailOrPhoneInput);

export default EmailOrPhoneInput;
