import { Ref, forwardRef, useContext } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Box, BoxProps, Grid, Typography, styled } from '@mui/material';
import TextInput from '../../ui/InputComponents/FormInput/TextInput';
import { Props as TextInputProps } from '../../ui/InputComponents/FormInput/global/CustomTextField/props';
import { Props as PhoneInputProps } from '@/components/ui/InputComponents/FormInput/PhoneInput/props';
import PasswordInput from '@/components/ui/InputComponents/FormInput/PasswordInput';
import { AuthContext } from '@/core/contexts/Auth.context';
import { signUpSchema } from '@/core/validation/signUp.validation';
import FormButton from '@/components/ui/ButtonComponents/FormButton';
import DefaultLink from '@/components/ui/LinkComponents/DefaultLink';
import PhoneInput from '@/components/ui/InputComponents/FormInput/PhoneInput';
import { phoneMask } from '@/core/validation/constants/masks';

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  repeatPassword: string;
}

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  repeatPassword: '',
};

const GridItemText = forwardRef(({ ...props }: TextInputProps, ref: Ref<HTMLInputElement>) => (
  <Grid item sm={5}>
    <TextInput ref={ref} {...props} />
  </Grid>
));
const GridItemPhone = forwardRef(({ ...props }: PhoneInputProps, ref: Ref<HTMLInputElement>) => (
  <Grid item sm={5}>
    <PhoneInput ref={ref} {...props} />
  </Grid>
));
const GridItemPasswd = forwardRef(({ ...props }: TextInputProps, ref: Ref<HTMLInputElement>) => (
  <Grid item sm={5}>
    <PasswordInput ref={ref} {...props} />
  </Grid>
));

export default function SignUpForm(props: BoxProps) {
  const { control, register, handleSubmit } = useForm({
    defaultValues,
    resolver: joiResolver(signUpSchema),
    mode: 'onChange',
  } as FieldValues);

  const authContext = useContext(AuthContext);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    authContext?.login(data);
  };

  return (
    <Box {...props}>
      {authContext?.auth.data?.user.firstName}
      <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <Grid container rowGap="3.25rem" columnGap="6.25rem" columns={12}>
          <GridItemText control={control} label="Ім'я" {...register('firstName')} />
          <GridItemText control={control} label="Прізвище" {...register('lastName')} />
          <GridItemText control={control} label="Пошта" {...register('email')} />
          <GridItemPhone control={control} label="Номер телефону" mask={phoneMask} {...register('phone')} />
          <GridItemPasswd control={control} label="Пароль" {...register('password')} />
          <GridItemPasswd control={control} label="Підтвердити Пароль" {...register('repeatPassword')} />
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
