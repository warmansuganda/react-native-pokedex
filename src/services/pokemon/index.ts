import client from '@services/client';

// https://pokeapi.co/
export const fetchPokemon = (page: number = 1) => {
  const pageSize = 20;

  const params = {
    ...(page ? { offset: (page - 1) * pageSize } : {}),
  };

  return client.get('/pokemon', { params }).then(result => ({
    results: result.data.results,
    next: result.data.results.length ? page + 1 : null,
  }));
};

export const findPokemon = (name: string) => client.get(`/pokemon/${name}`);
