import { Ref } from 'react';
import { TextFieldProps } from '@mui/material';
import { Control, FieldValues } from 'react-hook-form';

export type Props = {
  name: string;
  control: Control<FieldValues> | undefined;
} & TextFieldProps;
export type InputRef = Ref<HTMLInputElement>;
