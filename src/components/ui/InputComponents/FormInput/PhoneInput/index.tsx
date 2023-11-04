import { forwardRef } from 'react';
import { Props } from '../global/CustomInputWithMask/props';
import CustomTextField from '../global/CustomTextField';
import { withMask } from '../global/CustomInputWithMask';
import { InputRef } from '../global/CustomTextField/props';
import { withController } from '../global/CustomInputWithController';

function MyPhoneInput(props: Props, ref: InputRef) {
  return <CustomTextField {...props} ref={ref} />;
}

const PhoneInput = withController(withMask(forwardRef(MyPhoneInput)));
export default PhoneInput;
