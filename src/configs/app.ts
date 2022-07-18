import { API_URL, API_TOKEN } from '@env';

export const getConfig = (value: string): string => {
  if (value) {
    return value;
  }
  return (
    typeof process.env[value] !== 'undefined' ? process.env[value] : ''
  ) as string;
};

export default {
  API_URL: getConfig(API_URL),
  API_TOKEN: getConfig(API_TOKEN),
};
