'use client';

import { AxiosError } from 'axios';
import { MessageResponse } from '@/core/models/MessageResponse.model';
import { post } from '../../helpers/apiRequests';
import { mailVerifyUrl } from '../config';
import { ErrorResponse } from '@/core/models/ErrorResponse.model';

export const mailVerifyRequest = async (token: string): Promise<MessageResponse> => {
  try {
    const response = await post(mailVerifyUrl, token, {});

    return response.data as MessageResponse;
  } catch (error) {
    const err = error as unknown as AxiosError;
    const data = err.response?.data as ErrorResponse;
    if (err.response?.status === 401) {
      throw new Error('Не авторизоавний!');
    } else if (data.error === 'Invalid verification token') {
      throw new Error('Не вірний ключ підтвердження');
    } else if (data.error === 'Email already verified') {
      throw new Error('Пошта вже підтверджена');
    } else {
      throw new Error('Шось пішло не по плану :(');
    }
  }
};
