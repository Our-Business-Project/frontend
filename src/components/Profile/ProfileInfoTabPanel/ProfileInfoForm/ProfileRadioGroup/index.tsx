import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, styled } from '@mui/material';
import { Props } from './props';
import { Controller } from 'react-hook-form';

const radioList = [
  { label: 'ФОП', value: 'FOP' },
  { label: 'ТОВ', value: 'TOV' },
];

export default function ProfileRadioGroup({ control, readOnly }: Props) {
  return (
    <StyledFormControl>
      <StyledFormLabel id="taxation-label">Група оподаткування</StyledFormLabel>
      <Controller
        name="taxation"
        control={control}
        render={({ field }) => (
          <StyledRadioGroup aria-labelledby="taxation-label" {...field}>
            {radioList.map(({ label, value }) => (
              <StyledFormControlLabel key={value} label={label} value={value} control={<Radio disabled={readOnly} />} />
            ))}
          </StyledRadioGroup>
        )}
      />
    </StyledFormControl>
  );
}

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginTop: '-10px',

  [theme.breakpoints.down('smmd')]: {
    marginTop: 0,
  },
}));

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  '&.MuiFormLabel-root': {
    marginBottom: '6px',
    color: 'rgba(0, 0, 0, 0.5)',
  },
}));

const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
  [theme.breakpoints.down('smmd')]: {
    alignItems: 'center',
    marginRight: 0,
  },

  [theme.breakpoints.down('smmd')]: {
    '& .MuiFormControlLabel-root': {
      width: '100%',
      justifyContent: 'center',
      marginRight: 0,

      '& .MuiTypography-root': {
        width: '50px',
      },
    },
  },
}));

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: theme.palette.common.black,
  },
}));
