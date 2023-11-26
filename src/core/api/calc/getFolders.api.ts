'use client';

import { CalculatorData } from '@/core/models/СalculatorData.model';
import { AxiosError } from 'axios';
import { get } from '../../helpers/apiRequests';
import { calcFoldersUrl } from '../config';

export const getAllCaclFoldersRequest = async (token: string, id: string): Promise<CalculatorData> => {
  try {
    const response = await get(`${calcFoldersUrl}`, token);

    return response.data as CalculatorData;
  } catch (error) {
    const err = error as unknown as AxiosError;
    if (err.response?.status === 400) {
      throw new Error('Папок не знайдено');
    } else if (err.response?.status === 401) {
      throw new Error('Не авторизоавний!');
    } else {
      throw new Error('Щось пішло не по плану :(');
    }
  }
};
