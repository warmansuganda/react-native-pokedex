import client from '@services/client';

// https://pokeapi.co/
export const fetchPokemon = (query?: string, page?: number) =>
  client.get('/pokemon');

export const findPokemon = (name: string) => client.get(`/pokemon/${name}`);
