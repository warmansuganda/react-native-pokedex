export interface Pokemon {
  id: number;
  name: string;
}

export interface FetchPokemon {
  results: Pokemon[];
}

export interface FindPokemon {
  id: number;
  name: string;
}
