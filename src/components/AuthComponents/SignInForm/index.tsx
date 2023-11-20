import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Box, Checkbox, FormControlLabel, Typography, styled } from '@mui/material';
import { signInSchema } from '@/core/validation/signIn.validation';
import FormButton from '@/components/ui/ButtonComponents/FormButton';
import DefaultLink from '@/components/ui/LinkComponents/DefaultLink';
import PasswordInput from '@/components/ui/InputComponents/FormInput/PasswordInput';
import EmailOrPhoneInput from '@/components/ui/InputComponents/FormInput/EmailOrPhoneInput';
import { Props } from './props';
import PrivacyPolicyCheckbox from '../global/PrivacyPolicyCheckbox';

interface IFormInput {
  emailOrPhone: string;
  password: string;
}

const defaultValues = {
  emailOrPhone: '',
  password: '',
};

export default function SignInForm({ login, ...props }: Props) {
  const { control, register, handleSubmit, resetField } = useForm({
    defaultValues,
    resolver: joiResolver(signInSchema),
    mode: 'onChange',
  } as FieldValues);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    data.emailOrPhone = !data.emailOrPhone.includes('@') ? data.emailOrPhone.replace(/\D/g, '') : data.emailOrPhone;
    login(data);
  };

  return (
    <Box {...props}>
      <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <FormContainer>
          <FieldsContainer>
            <EmailOrPhoneInput
              control={control}
              label="Телефон"
              label1="Пошта"
              callback={() => resetField('emailOrPhone')}
              {...register('emailOrPhone')}
            />
            <PasswordInput control={control} label="Пароль" {...register('password')} />
          </FieldsContainer>
          <PrivacyPolicyCheckbox />
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

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '0.25rem',
}));

const FieldsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '3.25rem',
  [theme.breakpoints.down('sm')]: {
    rowGap: '1.25rem',
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '1.875rem',
  gap: '1rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));
