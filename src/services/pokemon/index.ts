import client from '@services/client';
import axios, { AxiosResponse } from 'axios';

import { Pokemon } from './types';

// https://pokeapi.co/
export const findPokemon = (name: string) => client.get(`/pokemon/${name}`);

export const fetchPokemon = (page: number = 1) => {
  const pageSize = 10;

  const params = {
    ...(page ? { offset: (page - 1) * pageSize } : {}),
    limit: pageSize,
  };

  return client.get('/pokemon', { params }).then(async response => {
    try {
      const details = await axios.all<AxiosResponse<Pokemon>>(
        response.data.results.map((item: Pokemon) => findPokemon(item.name)),
      );

      return {
        results: details.map(item => item.data),
        next: response.data.results.length ? page + 1 : null,
      };
    } catch (error) {
      return {
        results: [],
        next: null,
      };
    }
  });
};
