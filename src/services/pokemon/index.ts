import client from '@services/client';
import axios, { AxiosResponse } from 'axios';

import { Pokemon, PokemonLocation, PokemonSpecies } from './types';

// https://pokeapi.co/
export const findPokemon = (name: string) =>
  client.get(`/pokemon/${name.toLowerCase()}`);

export const findPokemonSpecies = (name: string) =>
  client.get(`/pokemon-species/${name.toLowerCase()}`);

export const findPokemonEvolutions = async (id: number) => {
  try {
    const evolution = await client.get(`/evolution-chain/${id}`);

    const flatten = (chain: any[], result: any[] = []) => {
      for (let index = 0; index < chain.length; index += 1) {
        const element = chain[index];
        result.push(element.species);
        if (element.evolves_to.length) {
          flatten(element.evolves_to, result);
        }
      }
      return result;
    };

    const chains = flatten(evolution.data.chain.evolves_to, []);
    return axios.all<AxiosResponse<Pokemon>>(
      chains.map(item => findPokemon(item.name)),
    );
  } catch (error) {
    throw new Error('Feth pokemon evolution failed');
  }
};

export const findPokemonLocation = (id: number) =>
  client.get(`/location/${id}`);

export const findPokemonDetail = async (pokemon: Pokemon) => {
  try {
    const details = await axios.all<
      | AxiosResponse<PokemonSpecies>
      | Array<AxiosResponse<Pokemon>>
      | AxiosResponse<PokemonLocation>
    >([
      findPokemonSpecies(pokemon.name),
      findPokemonEvolutions(pokemon.id),
      findPokemonLocation(pokemon.id),
    ]);

    const species = details[0] as AxiosResponse<PokemonSpecies>;
    const evolutions = details[1] as Array<AxiosResponse<Pokemon>>;
    const location = details[2] as AxiosResponse<PokemonLocation>;

    return {
      species: species.data,
      evolutions: evolutions.map(item => item.data),
      location: location.data,
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
