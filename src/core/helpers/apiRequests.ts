export const get = async (url: string, token: string) => {
  const data = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(url, data);
};

export const post = async (url: string, token: string, payload: object) => {
  const data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  };

  return fetch(url, data);
};

export const guestPost = async (url: string, payload: object) => {
  const data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  return fetch(url, data);
};

export const del = async (url: string, token: string) => {
  const data = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'text/plain',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(url, data);
};
