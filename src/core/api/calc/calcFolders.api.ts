'use client';

import { CalcFolders } from '@/core/models/CalcFolders.model';
import { AxiosError } from 'axios';
import { del, get, post } from '../../helpers/apiRequests';
import { calcFoldersUrl } from '../config';

export const getAllCaclFoldersRequest = async (token: string) => {
  try {
    const response = await get(calcFoldersUrl, token);

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

export const createFolderRequest = async (token: string, folderName: string) => {
  try {
    const response = await post(calcFoldersUrl, token, { name: folderName });

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

export const deleteFolderRequest = async (token: string, folderId: string) => {
  try {
    const response = await del(`${calcFoldersUrl}/${folderId}`, token);

    return response.data;
  } catch (error) {
    const err = error as unknown as AxiosError;
    if (err.response?.status === 400) {
      throw new Error('Такої папки не зайдено');
    } else if (err.response?.status === 401) {
      throw new Error('Не авторизоавний!');
    } else {
      throw new Error('Щось пішло не по плану :(');
    }
  }
};

export const getOneFolderRequest = async (token: string, folderId: string) => {
  try {
    const response = await get(`${calcFoldersUrl}/${folderId}`, token);

    if (response.data && response.data.data) {
      return response.data.data;
    } else {
      return response.data;
    }
  } catch (error) {
    const err = error as unknown as AxiosError;
    if (err.response?.status === 401) {
      throw new Error('Не авторизоавний!');
    } else {
      throw new Error('Щось пішло не по плану :(');
    }
  }
};
