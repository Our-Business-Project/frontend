import { Checkbox, FormControlLabel, Typography, styled } from '@mui/material';
import Link from 'next/link';

export default function PrivacyPolicyCheckbox() {
  return (
    <StyledFormControlLabel
      control={<Checkbox size="small" required />}
      label={
        <Typography fontSize="0.75rem">
          Я згоден з <Link href="#">політикою конфіденціальності</Link>
        </Typography>
      }
    />
  );
}

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1rem',

  '& span.MuiFormControlLabel-asterisk': {
    display: 'none',
  },
}));
