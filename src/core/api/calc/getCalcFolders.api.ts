'use client';

import { CalcFolders } from '@/core/models/CalcFolders.model';
import { AxiosError } from 'axios';
import { get } from '../../helpers/apiRequests';
import { calcFoldersUrl } from '../config';

export const getAllCaclFoldersRequest = async (token: string): Promise<CalcFolders> => {
  try {
    const response = await get(`${calcFoldersUrl}`, token);

    return response.data as CalcFolders;
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
