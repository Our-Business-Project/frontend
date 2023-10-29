'use client';

import { AuthResponse } from '@/core/models/AuthResponse.model';
import { ErrorResponse } from '@/core/models/ErrorResponse.model';
import { guestPost } from '../../helpers/apiRequests';
import { signInUrl } from '../config';

type SignInUserProps = {
  email: string;
  password: string;
};

export const signInApiRequest = async (payload: SignInUserProps): Promise<AuthResponse> => {
  try {
    const response = await guestPost(signInUrl, payload);
    const respData = response.data as AuthResponse | ErrorResponse;

    if (response.status === 200) {
      return respData as AuthResponse;
    } else {
      const error = respData as ErrorResponse;
      throw new Error(error.message);
    }
  } catch (error) {
    throw error;
  }
};
