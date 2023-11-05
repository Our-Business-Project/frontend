import { forwardRef } from 'react';
import InputMask from 'react-input-mask';
import { InputRef } from '../CustomTextField/props';
import { Props } from './props';
import CustomTextField from '../CustomTextField';
import { phoneMask } from '@/core/validation/constants/masks';
import { withController } from '../CustomInputWithController';

export function withMask(Component: React.ComponentType<any>) {
  return forwardRef(({ onBlur, onChange, value, sx, error, ...props }: Props, ref: InputRef) => (
    <InputMask mask={phoneMask} maskChar="_" onBlur={onBlur} onChange={onChange} value={value}>
      {
        (() => (
          <Component helperText={error ? error.message : ' '} error={!!error} inputRef={ref} {...props} />
        )) as unknown as React.ReactNode
      }
    </InputMask>
  ));
}

const MaskInput = withController(withMask(CustomTextField));
export default MaskInput;
