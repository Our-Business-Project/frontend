'use client';

import { AxiosError } from 'axios';
import { UserResponse } from '@/core/models/UserResponse.model';
import { patch } from '../../helpers/apiRequests';
import { usersUrl } from '../config';

export type UpdateProfileDataProps = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  taxation: 'NaturalPerson' | 'Yurosoba';
};

export const updateProfileRequest = async (token: string, data: UpdateProfileDataProps): Promise<UserResponse> => {
  try {
    const response = await patch(usersUrl, token, data);

    return response.data as UserResponse;
  } catch (error) {
    const err = error as unknown as AxiosError;
    if (err.response?.status === 400) {
      throw new Error('Користувач не знайдений!');
    } else if (err.response?.status === 401) {
      throw new Error('Не авторизоавний!');
    } else {
      throw new Error('Щось пішло не по плану :(');
    }
  }
};
