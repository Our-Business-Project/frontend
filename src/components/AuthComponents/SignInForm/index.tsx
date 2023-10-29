import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Box, BoxProps, Typography } from '@mui/material';
import { useContext } from 'react';
import FormInput from '../../ui/InputComponents/FormInput';
import { AuthContext } from '@/core/contexts/Auth.context';
import { signInSchema } from '@/core/validation/signIn.validation';
import FormButton from '@/components/ui/ButtonComponents/FormButton';
import Link from 'next/link';
import DefaultLink from '@/components/ui/LinkComponents/DefaultLink';

interface IFormInput {
  email: string;
  password: string;
}

const defaultValues = {
  email: '',
  password: '',
};

export default function SignInForm(props: BoxProps) {
  const { control, register, handleSubmit } = useForm({
    defaultValues,
    resolver: joiResolver(signInSchema),
    mode: 'onChange',
  } as FieldValues);

  const authContext = useContext(AuthContext);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    authContext?.login(data);
    console.log(data);
  };

  return (
    <Box {...props}>
      {authContext?.auth.data?.user.firstName}
      <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <Box display="flex" flexDirection="column" rowGap="52px">
          <FormInput control={control} label="Пошта" {...register('email')} />
          <FormInput control={control} label="Пароль" {...register('password')} type="password" />
          <FormButton type="submit">Увійти</FormButton>
        </Box>
      </form>
      <Box display="flex" alignItems="center" justifyContent="space-between" pt="30px">
        <Typography fontSize="1rem">Ще не маєш акаунт?</Typography>
        <DefaultLink href="sign-up">Зареєструватись</DefaultLink>
      </Box>
    </Box>
  );
}
