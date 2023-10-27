import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import DefaultInput from '../../ui/InputComponents/DefaultInput';

interface IFormInput {
  firstName: string;
  lastName: string;
}

export default function SignInForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  } as FieldValues);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
      <DefaultInput name={'firstName'} control={control} label={"Ім'я"} />
      <DefaultInput name={'lastName'} control={control} label={'Фамілія'} />
      <input type="submit" />
    </form>
  );
}
