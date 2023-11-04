'use client';

import { AuthResponse } from '@/core/models/AuthResponse.model';
import { guestPost } from '../../helpers/apiRequests';
import { signInUrl } from '../config';

export type SignInUserProps = {
  email: string;
  password: string;
};

export const signInApiRequest = async (payload: SignInUserProps): Promise<AuthResponse> => {
  try {
    const response = await guestPost(signInUrl, payload);
    const respData = response.data;

    return respData as AuthResponse;
  } catch (error) {
    throw error;
  }
};
