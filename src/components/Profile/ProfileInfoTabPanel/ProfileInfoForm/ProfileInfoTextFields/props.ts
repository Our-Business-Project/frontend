import { TextFieldProps } from '@mui/material';
import { Control, FieldValues } from 'react-hook-form';

export type Props = {
  control: Control<FieldValues>;
} & TextFieldProps;
