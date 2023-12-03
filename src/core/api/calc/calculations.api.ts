'use client';
import { AxiosError } from 'axios';
import { get } from '../../helpers/apiRequests';
import { calcFoldersUrl } from '../config';

export const getCalculationsRequest = async (token: string, folderId: string, fileId: string) => {
  try {
    const response = await get(`${calcFoldersUrl}/${folderId}/data/${fileId}`, token);

    return response.data;
  } catch (error) {
    const err = error as unknown as AxiosError;
    if (err.response?.status === 401) {
      throw new Error('Не авторизоавний!');
    } else {
      throw new Error('Щось пішло не по плану :(');
    }
  }
};
