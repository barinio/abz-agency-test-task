import axios from 'axios';

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

export const postUser = async (newUser: any) => {
  const formData = new FormData();
  Object.keys(newUser).forEach(key => {
    formData.append(key, newUser[key]);
  });
  const res = await instance.post('/api/v1/users', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
};
