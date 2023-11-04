'use client';

import { AxiosError } from 'axios';
import { AuthResponse } from '@/core/models/AuthResponse.model';
import { ErrorResponse } from '@/core/models/ErrorResponse.model';
import { guestPost } from '../../helpers/apiRequests';
import { signInUrl } from '../config';

export type SignInUserProps = {
  emailOrPhone: string;
  password: string;
};

export const signInApiRequest = async (payload: SignInUserProps): Promise<AuthResponse> => {
  try {
    const response = await guestPost(signInUrl, payload);

    return response.data as AuthResponse;
  } catch (error) {
    const err = error as unknown as AxiosError;
    const data = err.response?.data as ErrorResponse;
    console.log(data);
    if (data.error === 'No such user exists') {
      throw new Error('Користувач не існує');
    } else if (data.error === 'Invalid email/password') {
      throw new Error('Не вірна пошта або пароль');
    } else if (data.error === 'Invalid phone/password') {
      throw new Error('Не вірний телефон або пароль');
    } else {
      throw new Error('Не вдалося увійти');
    }
  }
};
