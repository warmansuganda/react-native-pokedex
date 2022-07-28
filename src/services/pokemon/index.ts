import client from '@services/client';
import axios, { AxiosResponse } from 'axios';

import { Pokemon, PokemonLocation, PokemonSpecies } from './types';

// https://pokeapi.co/
export const findPokemon = (name: string) =>
  client.get(`/pokemon/${name.toLowerCase()}`);

export const findPokemonSpecies = (name: string) =>
  client.get(`/pokemon-species/${name.toLowerCase()}`);

export const findPokemonEvolutions = (id: number) =>
  client.get(`/evolution-chain/${id}`);

export const findPokemonLocation = (id: number) =>
  client.get(`/location/${id}`);

export const findPokemonDetail = async (pokemon: Pokemon) => {
  try {
    const details = await axios.all<
      AxiosResponse<PokemonSpecies | PokemonLocation | Pokemon[]>
    >([
      findPokemonSpecies(pokemon.name),
      findPokemonEvolutions(pokemon.id),
      findPokemonLocation(pokemon.id),
    ]);

    return {
      species: details[0].data as PokemonSpecies,
      evolutions: details[1].data as Pokemon[],
      location: details[2].data as PokemonLocation,
    };
  } catch (error) {
    throw new Error('Find pokemon detail failed');
  }
};

export const fetchPokemon = (page: number = 1, query?: string) => {
  if (query) {
    return findPokemon(query)
      .then(response => ({
        results: [response.data],
        next: null,
      }))
      .catch(() => ({
        results: [],
        next: null,
      }));
  }

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
