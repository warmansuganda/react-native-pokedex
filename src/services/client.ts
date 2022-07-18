import axios from 'axios';
import { QueryClient } from 'react-query';

const config = {
  API_URL: 'https://api.github.com',
  API_TOKEN: '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',
};

const client = axios.create({
  baseURL: config.API_URL,
  headers: {
    Authorization: `token ${config.API_TOKEN}`,
  },
});

export const queryClient = new QueryClient();

export default client;
