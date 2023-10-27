import { Divider, FormHelperText, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

export default function CalcInput({ measure, label }: { measure: string; label: string }) {
  return (
    <FormControl sx={{ m: 1, maxWidth: '260px', margin: '40px' }} variant="outlined">
      <FormHelperText sx={{ color: 'text.secondary', fontSize: '18px', m: '0' }} id="outlined-weight-helper-text">
        {label}
      </FormHelperText>
      <OutlinedInput
        sx={{ bgcolor: 'primary.main', borderColor: 'text.primary' }}
        endAdornment={
          <InputAdornment position="end">
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{
                height: 'calc(1.4375em + 17px)',
                margin: '0 17px',
                padding: '0',
                borderColor: 'text.primary',
                borderWidth: '1px',
              }}
            />
            {measure}
          </InputAdornment>
        }
        aria-describedby="outlined-weight-helper-text"
      />
    </FormControl>
  );
}
