import { Divider, FormControl, Typography, Box, styled, Slider } from '@mui/material';
import MuiInput from '@mui/material/Input';
import * as React from 'react';
import { CalculatorDataUnit } from '@/core/models/СalculatorData.model';
import { CalcContext } from '@/core/contexts/Calc.context';
import { redirect } from 'next/navigation';

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
  const bgcolor = disabled ? 'secondary.main' : 'primary.dark';
  if (!calcContext) {
    redirect('/404');
  }
  const { updateContext } = calcContext;

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const updatedValue = Array.isArray(newValue) ? newValue[0] : newValue;
    updateContext(`${name}`, updatedValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value === '' ? 0 : Number(event.target.value);
    updateContext(`${name}`, newValue);
  };

  const deleteZeros = (value: number | string) => {
    return value !== 0 ? ('' + value).replace(/^0+/, '') : value;
  };

  return (
    <TotalWrapper>
      <InputWrapper
        sx={{
          borderRadius: borderRadius,
          bgcolor: `${bgcolor}`,
        }}
      >
        <Typography textAlign="center" mb="8px" variant="body2">
          {label}
        </Typography>
        <Divider sx={{ borderColor: 'text.primary' }} />
        <FormControl sx={{ m: '5px auto 0 auto', width: '130px' }} fullWidth variant="filled">
          <Input
            value={deleteZeros(value)}
            size="small"
            onChange={handleInputChange}
            aria-label="Always visible"
            type="number"
            id="standard-basic"
            disabled={disabled}
            sx={{
              '& .MuiInputBase-input.Mui-disabled': {
                WebkitTextFillColor: '#fff',
              },
            }}
          />
        </FormControl>
      </InputWrapper>
      {slider && (
        <Slider
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          step={maxValue / 100}
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
  z-index: 2;
`;

const TotalWrapper = styled(Box)`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

const Input = styled(MuiInput)`
  font-size: 13px;
  text-align: center;
  margin: 8px 0;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &.MuiInput-root::after {
    border-bottom: 2px solid ${(props) => props.theme.palette.primary.light};
  }
  &.MuiInputBase-input.Mui-disabled {
    color: #fff;
  }
`;
