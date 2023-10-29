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

  try {
    return await axios(config);
  } catch (error) {
    throw error;
  }
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

  try {
    return await axios(config);
  } catch (error) {
    throw error;
  }
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

  try {
    return await axios(config);
  } catch (error) {
    throw error;
  }
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

  try {
    return await axios(config);
  } catch (error) {
    throw error;
  }
};
