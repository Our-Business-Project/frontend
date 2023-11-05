import { forwardRef } from 'react';
import { InputRef, Props } from '../global/CustomTextField/props';
import CustomTextField from '../global/CustomTextField';
import { withController } from '../global/CustomInputWithController';

function MyTextInput(props: Props, ref: InputRef) {
  return <CustomTextField {...props} ref={ref} />;
}

const TextInput = withController(forwardRef(MyTextInput));
export default TextInput;
