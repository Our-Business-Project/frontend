'use client';

import { AxiosError } from 'axios';
import { UserResponse } from '@/core/models/UserResponse.model';
import { get } from '../../helpers/apiRequests';
import { usersUrl } from '../config';

export const getProfileRequest = async (token: string, id: string): Promise<UserResponse> => {
  try {
    const response = await get(`${usersUrl}/${id}`, token);

    return response.data as UserResponse;
  } catch (error) {
    const err = error as unknown as AxiosError;
    if (err.response?.status === 400) {
      throw new Error('Користувач не знайдений!');
    } else if (err.response?.status === 401) {
      throw new Error('Не авторизоавний!');
    } else {
      throw new Error('Шось пішло не по плану :(');
    }
  }
};
