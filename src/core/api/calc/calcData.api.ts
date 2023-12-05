'use client';
import { CalculatorData } from '@/core/models/СalcData.model';

import { AxiosError } from 'axios';
import { del, get, patch, post } from '../../helpers/apiRequests';
import { calcFoldersUrl } from '../config';
import { FixedCostsData } from '@/core/models/FixedCosts.model';
import { CalcData } from '@/core/models/Calculations.model';

export const deleteDataRequest = async (token: string, folderId: string, dataID: string) => {
  try {
    const response = await del(`${calcFoldersUrl}/${folderId}/data/${dataID}`, token);

    return response.data;
  } catch (error) {
    const err = error as unknown as AxiosError;
    if (err.response?.status === 400) {
      throw new Error('Такого файлу не зайдено');
    } else if (err.response?.status === 401) {
      throw new Error('Не авторизоавний!');
    } else {
      throw new Error('Щось пішло не по плану :(');
    }
  }
};

export const createDataRequest = async (
  token: string,
  folderId: string,
  fileName: string,
  calcData: CalcData,
  fixedCostsData: FixedCostsData[]
) => {
  try {
    const response = await post(`${calcFoldersUrl}/${folderId}/data`, token, {
      name: fileName,
      data: calcData,
      fixedCosts: fixedCostsData,
    });

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

export const getOneFolderDataRequest = async (token: string, folderId: string) => {
  try {
    const response = await get(`${calcFoldersUrl}/${folderId}`, token);

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

export const patchDataRequest = async (
  token: string,
  folderId: string,
  dataId: string,
  fileName: string,
  calcData: CalcData,
  fixedCostsData: FixedCostsData[]
) => {
  try {
    const response = await patch(`${calcFoldersUrl}/${folderId}/data/${dataId}`, token, {
      name: fileName,
      data: calcData,
      fixedCosts: fixedCostsData,
    });

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
