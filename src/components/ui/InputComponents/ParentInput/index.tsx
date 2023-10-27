import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { Props } from './props';

export default function ParentInput({ name, control, label }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
}
