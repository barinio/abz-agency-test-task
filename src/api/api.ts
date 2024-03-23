import axios from 'axios';
import { User } from '../type';

export const instance = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency',
});

export const setToken = (token: string) => {
  instance.defaults.headers.common['Token'] = token;
};

export const getFirstUsers = async () => {
  try {
    const { data } = await instance.get('/api/v1/users?page=1&count=6');
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getPositions = async () => {
  try {
    const { data } = await instance.get('/api/v1/positions');
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getToken = async () => {
  try {
    const { data: token } = await instance.get('/api/v1/token');
    setToken(token.token);
  } catch (e) {
    console.log(e);
  }
};

export const postUser = async (newUser: User) => {
  const formData = new FormData();
  Object.keys(newUser).forEach(key => {
    const userKey = key as keyof User;
    const value = newUser[userKey];
    if (value instanceof File || typeof value === 'string') {
      formData.append(userKey, value);
    } else if (value !== null && value !== undefined) {
      formData.append(userKey, String(value));
    }
  });
  const res = await instance.post('/api/v1/users', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};
