import { SignInUserResponse } from '@/core/models/SignInUserResponse.model';
import { ErrorResponse } from '@/core/models/ErrorResponse.model';
import { guestPost } from '../../helpers/apiRequests';
import { signIn } from '../config';

type SignInUserProps = {
  email: string;
  password: string;
};

export const signInUser = async (payload: SignInUserProps): Promise<SignInUserResponse> => {
  const response = await guestPost(signIn, payload);
  const respData = (await response.json()) as SignInUserResponse | ErrorResponse;
  if (response.ok) {
    const data = respData as SignInUserResponse;
    return data;
  } else {
    const error = respData as ErrorResponse;
    throw new Error(error.message);
  }
};
