import {
  Divider,
  FormHelperText,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Badge,
  Tooltip,
  Typography,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import * as React from 'react';
import PopupLayout from '@/components/PopUpComponents/PopupLayout';

export default function CalcInput({
  measure,
  label,
  helper,
}: {
  measure: string;
  label: string;
  helper?: boolean | false;
}) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [openAllowed, setOpenAllowed] = React.useState<boolean>(true);

  const handleClickOpenOnce = () => {
    if (openAllowed) {
      setOpen(true);
      setOpenAllowed(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormControl sx={{ m: 1, maxWidth: '260px', margin: '20px' }} variant="outlined">
      <FormHelperText sx={{ color: 'text.secondary', fontSize: '18px', m: '0' }} id="outlined-weight-helper-text">
        {helper ? (
          <Badge
            badgeContent={
              <Tooltip title={<Typography fontSize={10}> Потібна допомога? </Typography>} placement="right-start">
                <InfoIcon
                  onClick={handleClickOpen}
                  fontSize="small"
                  sx={{
                    ml: '20px',
                    color: 'primary.light',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                />
              </Tooltip>
            }
          >
            {label}
          </Badge>
        ) : (
          label
        )}
      </FormHelperText>

      <OutlinedInput
        required
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
        onClick={handleClickOpenOnce}
      />
      {helper && (
        <PopupLayout
          handleClose={handleClose}
          open={open}
          title="Потрібна допомога з розрахунком?"
          successBtnText="Розрахувати"
          checkbox={true}
        />
      )}
    </FormControl>
  );
}
