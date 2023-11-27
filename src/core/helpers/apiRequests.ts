import axios from 'axios';

export const get = async (url: string, token: string) => {
  const config = {
    method: 'get',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios(config);
};

export const post = async (url: string, token: string, payload: object) => {
  const config = {
    method: 'post',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: payload,
  };

  return await axios(config);
};

export const upload = async (url: string, token: string, formData: FormData) => {
  const config = {
    method: 'post',
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: formData,
  };

  return await axios(config);
};

export const patch = async (url: string, token: string, payload: object) => {
  const config = {
    method: 'patch',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: payload,
  };

  return await axios(config);
};

export const guestPost = async (url: string, payload: object) => {
  const config = {
    method: 'post',
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    data: payload,
  };

  return await axios(config);
};

export const del = async (url: string, token: string) => {
  const config = {
    method: 'delete',
    url,
    headers: {
      'Content-Type': 'text/plain',
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios(config);
};
