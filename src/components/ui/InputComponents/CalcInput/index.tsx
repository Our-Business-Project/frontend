import { Divider, FormControl, Typography, Box, styled, Slider } from '@mui/material';
import MuiInput from '@mui/material/Input';
import * as React from 'react';

export default function CalcInput({
  label,
  helper,
  borderRadius = '15px',
  disabled = true,
  slider = false,
  maxValue = 10000,
}: {
  label: string;
  helper?: boolean | false;
  borderRadius?: string;
  disabled?: boolean;
  slider?: boolean;
  maxValue?: number;
}) {
  const [value, setValue] = React.useState(7000);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > maxValue) {
      setValue(maxValue);
    }
  };

  return (
    <TotalWrapper>
      <InputWrapper
        sx={{
          borderRadius: borderRadius,
          bgcolor: 'secondary.main',
        }}
      >
        <Typography textAlign="center" mb="8px" variant="body2">
          {label}
        </Typography>
        <Divider sx={{ borderColor: 'text.primary' }} />
        <FormControl sx={{ m: '8px auto 0 auto', width: '100px' }} fullWidth variant="filled">
          <Input
            onBlur={handleBlur}
            value={value}
            size="small"
            onChange={handleInputChange}
            id="standard-basic"
            disabled={disabled}
          />
        </FormControl>
      </InputWrapper>
      {slider && (
        <Slider
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          step={500}
          min={0}
          max={maxValue}
          size="small"
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      )}
    </TotalWrapper>
  );
}

const InputWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  width: 250px;
`;

const TotalWrapper = styled(Box)`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
`;

const Input = styled(MuiInput)`
  font-size: 14px;
  text-align: center;
  padding-left: 30px;
`;
