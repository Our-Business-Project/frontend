import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import DefaultInput from '../../ui/InputComponents/DefaultInput';

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

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
      <DefaultInput name={'email'} control={control} label={'Пошта'} />
      <DefaultInput name={'password'} control={control} label={'Пароль'} />
      <input type="submit" />
    </form>
  );
}
