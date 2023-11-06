import { Divider, FormControl, Typography, Box, styled, Slider } from '@mui/material';
import MuiInput from '@mui/material/Input';
import * as React from 'react';
import { CalculatorDataUnit } from '@/core/models/СalculatorData.model';
import { CalcContext } from '@/core/contexts/Calc.context';

export default function CalcInput({
  name,
  label,
  value,
  borderRadius = '15px',
  disabled = true,
  slider = false,
  maxValue = 100000,
}: CalculatorDataUnit) {
  const calcContext = React.useContext(CalcContext);

  if (!calcContext) {
    return <Typography title="Щось пішло не так..." />;
  }
  const { updateContext, data } = calcContext;

  React.useEffect(() => {}, [value]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const updatedValue = Array.isArray(newValue) ? newValue[0] : newValue;
    updateContext(`${name}`, updatedValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value === '' ? 0 : Number(event.target.value);
    updateContext(`${name}`, newValue);
  };

  const handleBlur = () => {
    if (value < 0) {
      updateContext(`${name}`, 0);
    } else if (value > maxValue) {
      updateContext(`${name}`, maxValue);
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
            aria-label="Always visible"
            type="number"
            id="standard-basic"
            inputProps={{
              step: 1000,
              min: 0,
              max: maxValue,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </FormControl>
      </InputWrapper>
      {slider && (
        <Slider
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          step={maxValue/100}
          min={0}
          max={maxValue}
          size="small"
          aria-label="Always visible"
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
  padding-left: 10px;
`;
