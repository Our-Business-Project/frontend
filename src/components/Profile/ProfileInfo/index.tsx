import { Box, Typography, Grid, styled, useTheme, Theme, Button } from '@mui/material';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { profileUpdateSchema } from '@/core/validation/profileUpdate.validation';
import { formatPhone } from '@/core/validation/helpers/format.helpers';
import { StyledInputWithController, StyledPhoneInput } from '@/core/styles/ProfileInputStyle';

import { Props as InputFieldProps } from '@/components/ui/InputComponents/FormInput/global/CustomTextField/props';
import { Props } from './props';

export default function ProfileInfo({ profile }: Props) {
  const { _id, email, firstName, lastName, phone } = profile?.data ?? {};
  const theme = useTheme();

  const formattedPhone = formatPhone('' + phone);

  const defaultValues = {
    email,
    firstName,
    lastName,
    phone: formattedPhone,
  };

  const { control, handleSubmit, formState } = useForm({
    defaultValues,
    resolver: joiResolver(profileUpdateSchema),
    mode: 'onChange',
  } as FieldValues);

  const { isDirty } = formState;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <BoxStyled>
      <Typography variant="h4" gutterBottom>
        Мій профіль
      </Typography>
      <IdTypography gutterBottom>id: {_id}</IdTypography>
      <StyledGrid container columns={12}>
        <GridItem name={'firstName'} control={control} label={"Ім'я"} theme={theme} />
        <GridItem name={'lastName'} control={control} label={'Прізвище'} theme={theme} />
        <GridItem name={'email'} control={control} label={'Пошта'} theme={theme} />
        <PhoneGridItem name={'phone'} control={control} label={'Телефон'} theme={theme} />
      </StyledGrid>
      <StyledBoxButton>
        <Button type="button" onClick={handleSubmit(onSubmit)} disabled={!isDirty}>
          Оновити
        </Button>
      </StyledBoxButton>
    </BoxStyled>
  );
}

const GridItem = ({ name, control, label, theme }: InputFieldProps & { theme: Theme }) => (
  <StyledGridItem item sm={5}>
    <StyledInputWithController name={name} control={control} label={label} theme={theme} />
  </StyledGridItem>
);

const PhoneGridItem = ({ name, control, label, theme }: InputFieldProps & { theme: Theme }) => (
  <StyledGridItem item sm={5}>
    <StyledPhoneInput name={name} control={control} label={label} theme={theme} />
  </StyledGridItem>
);

const BoxStyled = styled(Box)(() => ({
  marginBottom: '50px',
}));

const IdTypography = styled(Typography)(() => ({
  color: '#DFDFDF',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '30px',
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3.25rem 6.25rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '1.25rem 3.25rem',
  },
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '350px',
  },
}));

const StyledBoxButton = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));
