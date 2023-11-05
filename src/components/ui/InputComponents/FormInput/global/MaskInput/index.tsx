import { forwardRef } from 'react';
import { InputMask, type InputMaskProps } from '@react-input/mask';
import { InputRef } from '../CustomTextField/props';
import { phoneMask } from '@/core/validation/constants/masks';

function MyMaskInput({ mask = phoneMask, ...props }: InputMaskProps, ref: InputRef) {
  return <InputMask mask={mask} replacement="_" {...props} ref={ref} />;
}

const MaskInput = forwardRef<HTMLInputElement, InputMaskProps>(MyMaskInput);
export default MaskInput;
