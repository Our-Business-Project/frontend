import { Divider, FormHelperText, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import * as React from 'react';
import PopupLayout from '@/components/PopUpComponents/PopupLayout';

export default function CalcInput({
  measure,
  label,
  switcher,
}: {
  measure: string;
  label: string;
  switcher?: boolean | false;
}) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormControl sx={{ m: 1, maxWidth: '260px', margin: '20px' }} variant="outlined" onClick={handleClickOpen}>
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
      {switcher && <PopupLayout handleClose={handleClose} open={open} />}
    </FormControl>
  );
}
