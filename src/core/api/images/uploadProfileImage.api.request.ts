'use client';

import { AxiosError } from 'axios';
import { upload } from '../../helpers/apiRequests';
import { profileImagesUrl } from '../config';
import { Image as ImageResponse } from '@/core/models/Image.model';

export const uploadProfileImageRequest = async (token: string, formData: FormData): Promise<ImageResponse> => {
  try {
    const response = await upload(profileImagesUrl, token, formData);

    return response.data as ImageResponse;
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
