import { ReactNode } from 'react';
import { Control, FieldValues } from 'react-hook-form';
import { Props as CustomTextInputProps } from '../global/CustomTextField/props';

export declare interface Props extends CustomTextInputProps {
  mask: string;
}
