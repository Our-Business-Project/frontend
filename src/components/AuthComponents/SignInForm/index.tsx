import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Box, BoxProps, Button, useTheme } from '@mui/material';
import { useContext, useRef } from 'react';
import FormInput from '../../ui/InputComponents/FormInput';
import { AuthContext } from '@/core/contexts/Auth.context';
import { signInSchema } from '@/core/validation/signIn.validation';

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

  const theme = useTheme();
  const authContext = useContext(AuthContext);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    authContext?.login(data);
    console.log(data);
  };

  return (
    <Box {...props}>
      {authContext?.auth.data?.user.firstName}
      <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <Box display="flex" flexDirection="column" rowGap="75px">
          <FormInput control={control} label="Пошта" {...register('email')} />
          <FormInput control={control} label="Пароль" {...register('password')} type="password" />
          <Button
            sx={{
              margin: '25px auto 0',
              borderRadius: '15px',
              bgcolor: theme.palette.background.paper,
              boxShadow: theme.shadows[1],
              fontSize: '24px',
              fontWeight: 300,
              width: 200,
              color: theme.palette.common.black,
              textTransform: 'capitalize',
              border: 1,
              borderColor: theme.palette.background.paper,
              ':hover': {
                bgcolor: theme.palette.background.paper,
                color: theme.palette.primary.light,
                boxShadow: 'none',
                border: 1,
                borderColor: theme.palette.primary.light,
              },
            }}
            type="submit"
          >
            Увійти
          </Button>
        </Box>
      </form>
    </Box>
  );
}
