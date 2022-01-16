import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8888/api',
});

type LoginProps = {
  client_id: string;
  client_secret: string;
  code: string;
};

export const login = async ({ client_id, client_secret, code }: LoginProps) => {
  try {
    const response = await api.post('/github/login', {
      code,
      client_id,
      client_secret,
    });

    return response.data;
  } catch (err) {
    throw err;
  }
};
