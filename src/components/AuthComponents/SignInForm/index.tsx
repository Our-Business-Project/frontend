import { useContext } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Box, BoxProps, Typography, styled } from '@mui/material';
import { AuthContext } from '@/core/contexts/Auth.context';
import { signInSchema } from '@/core/validation/signIn.validation';
import FormButton from '@/components/ui/ButtonComponents/FormButton';
import DefaultLink from '@/components/ui/LinkComponents/DefaultLink';
import PasswordInput from '@/components/ui/InputComponents/FormInput/PasswordInput';
import EmailOrPhoneInput from '@/components/ui/InputComponents/FormInput/EmailOrPhoneInput';

interface IFormInput {
  emailOrPhone: string;
  password: string;
}

const defaultValues = {
  emailOrPhone: '',
  password: '',
};

export default function SignInForm(props: BoxProps) {
  const { control, register, handleSubmit, resetField } = useForm({
    defaultValues,
    resolver: joiResolver(signInSchema),
    mode: 'onChange',
  } as FieldValues);

  const authContext = useContext(AuthContext);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    data.emailOrPhone = !data.emailOrPhone.includes('@') ? data.emailOrPhone.replace(/\D/g, '') : data.emailOrPhone;
    authContext?.login(data);
  };

  return (
    <Box {...props}>
      {authContext?.auth.data?.user.firstName}
      <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <FormContainer>
          <EmailOrPhoneInput
            control={control}
            label="Телефон"
            label1="Пошта"
            callback={() => resetField('emailOrPhone')}
            {...register('emailOrPhone')}
          />
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

