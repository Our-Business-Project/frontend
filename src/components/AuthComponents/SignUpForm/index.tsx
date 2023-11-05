import { forwardRef } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Box, Grid, Typography, styled } from '@mui/material';
import TextInput from '../../ui/InputComponents/FormInput/TextInput';
import { Props as TextInputProps } from '../../ui/InputComponents/FormInput/global/CustomTextField/props';
import { InputRef } from '../../ui/InputComponents/FormInput/global/CustomTextField/props';
import PasswordInput from '@/components/ui/InputComponents/FormInput/PasswordInput';
import { signUpSchema } from '@/core/validation/signUp.validation';
import FormButton from '@/components/ui/ButtonComponents/FormButton';
import DefaultLink from '@/components/ui/LinkComponents/DefaultLink';
import PhoneInput from '@/components/ui/InputComponents/FormInput/PhoneInput';
import { Props } from './props';

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  repeatPassword: string | undefined;
}

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  repeatPassword: '',
};

const GridItemText = forwardRef(({ ...props }: TextInputProps, ref: InputRef) => (
  <Grid item sm={5}>
    <TextInput {...props} ref={ref} />
  </Grid>
));
const GridItemPhone = forwardRef(({ ...props }: TextInputProps, ref: InputRef) => (
  <Grid item sm={5}>
    <PhoneInput {...props} ref={ref} />
  </Grid>
));
const GridItemPasswd = forwardRef(({ ...props }: TextInputProps, ref: InputRef) => (
  <Grid item sm={5}>
    <PasswordInput {...props} ref={ref} />
  </Grid>
));

export default function SignUpForm({ register, ...props }: Props) {
  const {
    control,
    register: formRegister,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues,
    resolver: joiResolver(signUpSchema),
    mode: 'onChange',
  } as FieldValues);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    reset(defaultValues);
    data.phone = data.phone.replace(/\D/g, '');
    delete data.repeatPassword;
    register(data);
  };

  return (
    <Box {...props}>
      <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <Grid container rowGap="3.25rem" columnGap="6.25rem" columns={12}>
          <GridItemText control={control} label="Ім'я" {...formRegister('firstName')} />
          <GridItemText control={control} label="Прізвище" {...formRegister('lastName')} />
          <GridItemText control={control} label="Пошта" {...formRegister('email')} />
          <GridItemPhone control={control} label="Номер телефону" {...formRegister('phone')} />
          <GridItemPasswd control={control} label="Пароль" {...formRegister('password')} />
          <GridItemPasswd control={control} label="Підтвердити Пароль" {...formRegister('repeatPassword')} />
          <FormButton type="submit">Зареєструватись</FormButton>
        </Grid>
      </form>
      <TextContainer>
        <Typography fontSize="1rem">Вже маєш акаунт?</Typography>
        <DefaultLink href="sign-in">Вхід</DefaultLink>
      </TextContainer>
    </Box>
  );
}

const TextContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '1.875rem',
  width: '15.625rem',
  margin: 'auto',
}));
