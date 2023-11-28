import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, styled } from '@mui/material';
import { Props } from './props';
import { Controller } from 'react-hook-form';

export default function ProfileRadioGroup({ control, readOnly }: Props) {
  return (
    <StyledFormControl>
      <StyledFormLabel id="taxation-label">Група оподаткування</StyledFormLabel>
      <Controller
        name="taxation"
        control={control}
        render={({ field }) => (
          <RadioGroup aria-labelledby="taxation-label" {...field}>
            <StyledFormControlLabel
              value="NaturalPerson"
              control={<Radio disabled={readOnly} />}
              label="Фізична особа"
            />
            <StyledFormControlLabel value="Yurosoba" control={<Radio disabled={readOnly} />} label="Юрособа" />
          </RadioGroup>
        )}
      />
    </StyledFormControl>
  );
}

const StyledFormControl = styled(FormControl)(() => ({
  marginTop: '-10px',
}));

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  '&.MuiFormLabel-root': {
    marginBottom: '6px',
    '&.Mui-focused': {
      color: 'rgba(0, 0, 0, 0.5)',
    },
  },
}));

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: theme.palette.common.black,
  },
}));
