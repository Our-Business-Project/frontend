import { ChangeEvent } from 'react';
import { Control, FieldValues } from 'react-hook-form';

export type Props = {
  readOnly: boolean;
  control: Control<FieldValues>;
};
