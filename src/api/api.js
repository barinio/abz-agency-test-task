import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getUsers = async page => {
  try {
    const { data } = await instance.get(
      `/api/v1/users?page=${(page = 1)}&count=6`
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const postUser = async newUser => {
  try {
    const { data } = await instance.post('/api/v1/users', newUser);
    return data;
  } catch (e) {
    console.log(e);
  }
};
