export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  weight: number;
  height: number;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }>;
}

export interface FetchPokemon {
  results: Pokemon[];
  next: number | null;
}

export interface FindPokemon {
  id: number;
  name: string;
}
