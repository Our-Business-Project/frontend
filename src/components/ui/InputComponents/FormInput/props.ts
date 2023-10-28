import { ReactNode } from 'react';
import { Control, FieldValues } from 'react-hook-form';

export declare interface Props {
  name: string;
  control: Control<FieldValues> | undefined;
  label: ReactNode;
}
export type Ref = HTMLInputElement;
