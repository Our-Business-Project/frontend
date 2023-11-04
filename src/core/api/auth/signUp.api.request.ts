'use client';

import { AuthResponse } from '@/core/models/AuthResponse.model';
import { guestPost } from '../../helpers/apiRequests';
import { signUpUrl } from '../config';
import { AxiosError } from 'axios';

export type SignUpUserProps = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export const signUpApiRequest = async (payload: SignUpUserProps): Promise<AuthResponse> => {
  try {
    const response = await guestPost(signUpUrl, payload);

    return response.data as AuthResponse;
  } catch (error) {
    const err = error as unknown as AxiosError;
    if (err.response?.status === 409) {
      throw new Error('Така пошта/телефон вже зареєстровані');
    } else {
      throw new Error('Не вдалося зареєструватись');
    }
    throw error;
  }
};
