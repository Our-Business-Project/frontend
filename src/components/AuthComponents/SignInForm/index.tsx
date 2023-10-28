import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import DefaultInput from '../../ui/InputComponents/DefaultInput';
import { useContext } from 'react';
import { AuthContext } from '@/core/contexts/Auth.context';

interface IFormInput {
  email: string;
  password: string;
}

export default function SignInForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  } as FieldValues);

  const authContext = useContext(AuthContext);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    authContext?.login(data);
    console.log(data);
  };

  return (
    <>
      {authContext?.auth.data?.user.firstName}
      <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <DefaultInput name={'email'} control={control} label={'Пошта'} />
        <DefaultInput name={'password'} control={control} label={'Пароль'} />
        <input type="submit" />
      </form>
    </>
  );
}
