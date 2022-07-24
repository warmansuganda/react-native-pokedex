export interface Pokemon {
  id: number;
  name: string;
}

export interface FetchPokemon {
  results: Pokemon[];
  next: number | null;
}

export interface FindPokemon {
  id: number;
  name: string;
}
