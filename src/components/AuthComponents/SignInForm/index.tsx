import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Box, BoxProps, Typography, styled } from '@mui/material';
import { useContext } from 'react';
import TextInput from '../../ui/InputComponents/FormInput/TextInput';
import { AuthContext } from '@/core/contexts/Auth.context';
import { signInSchema } from '@/core/validation/signIn.validation';
import FormButton from '@/components/ui/ButtonComponents/FormButton';
import DefaultLink from '@/components/ui/LinkComponents/DefaultLink';
import PasswordInput from '@/components/ui/InputComponents/FormInput/PasswordInput';

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
  };

  return (
    <Box {...props}>
      {authContext?.auth.data?.user.firstName}
      <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <FormContainer>
          <TextInput control={control} label="Пошта" {...register('email')} />
          <PasswordInput control={control} label="Пароль" {...register('password')} />
          <FormButton type="submit">Увійти</FormButton>
        </FormContainer>
      </form>
      <TextContainer>
        <Typography fontSize="1rem">Ще не маєш акаунт?</Typography>
        <DefaultLink href="sign-up">Зареєструватись</DefaultLink>
      </TextContainer>
    </Box>
  );
}

const FormContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '3.25rem',
}));

const TextContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '1.875rem',
}));
