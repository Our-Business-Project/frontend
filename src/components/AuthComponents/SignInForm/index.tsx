import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { Box, BoxProps, Button, useTheme } from '@mui/material';
import { useContext } from 'react';
import DefaultInput from '../../ui/InputComponents/DefaultInput';
import { AuthContext } from '@/core/contexts/Auth.context';

interface IFormInput {
  email: string;
  password: string;
}

export default function SignInForm(props: BoxProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
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
          <DefaultInput name={'email'} control={control} label={'Пошта'} />
          <DefaultInput name={'password'} control={control} label={'Пароль'} />
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
          >
            Увійти
          </Button>
        </Box>
      </form>
    </Box>
  );
}
