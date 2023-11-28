import { Grid, styled, useTheme, Theme } from '@mui/material';
import { StyledInputWithController, StyledPhoneInput } from '@/core/styles/ProfileInputStyle';

import { Props as InputFieldProps } from '@/components/ui/InputComponents/FormInput/global/CustomTextField/props';
import { Props } from './props';

const GridItem = ({ name, control, label, theme, InputProps }: InputFieldProps & { theme: Theme }) => (
  <StyledGridItem item sm={5}>
    <StyledInputWithController name={name} control={control} label={label} theme={theme} InputProps={InputProps} />
  </StyledGridItem>
);

const PhoneGridItem = ({ name, control, label, theme, InputProps }: InputFieldProps & { theme: Theme }) => (
  <StyledGridItem item sm={5}>
    <StyledPhoneInput name={name} control={control} label={label} theme={theme} InputProps={InputProps} />
  </StyledGridItem>
);

const gridItems = [
  { name: 'firstName', label: "Ім'я", component: GridItem },
  { name: 'lastName', label: 'Прізвище', component: GridItem },
  { name: 'email', label: 'Пошта', component: GridItem },
  { name: 'phone', label: 'Телефон', component: PhoneGridItem },
];

export default function ProfileInfoTextFields({ control, InputProps }: Props) {
  const theme = useTheme();

  const renderedGridItems = gridItems.map((item) => (
    <item.component
      key={item.name}
      name={item.name}
      control={control}
      label={item.label}
      theme={theme}
      InputProps={InputProps}
    />
  ));

  return <>{renderedGridItems}</>;
}

const StyledGridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '350px',
  },
}));
