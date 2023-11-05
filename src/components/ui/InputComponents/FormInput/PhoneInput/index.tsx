import { forwardRef } from 'react';
import MaskInput from '../global/MaskInput';
import { Props } from './props';
import CustomTextField from '../global/CustomTextField';
import { InputRef } from '../global/CustomTextField/props';
import { withController } from '../global/CustomInputWithController';

function MyPhoneInput({ InputProps, ...props }: Props, ref: InputRef) {
  return (
    <CustomTextField
      InputProps={{
        ...InputProps,
        inputComponent: MaskInput,
      }}
      {...props}
      ref={ref}
    />
  );
}

const PhoneInput = withController(forwardRef(MyPhoneInput));
export default PhoneInput;
