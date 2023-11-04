import { FieldError } from 'react-hook-form';
import { Props as CustomFieldProps } from '../CustomTextField/props';

export type Props = {
  value: string;
  error?: FieldError;
} & CustomFieldProps;
