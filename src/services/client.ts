import axios from 'axios';
import { QueryClient } from 'react-query';
import config from '@configs/app';

const client = axios.create({
  baseURL: config.API_URL,
  headers: {
    Authorization: `token ${config.API_TOKEN}`,
  },
});

export const queryClient = new QueryClient();

export default client;
