export interface PokemonLocation {
  region: {
    name: string;
  };
  names: Array<{
    name: string;
    language: {
      name: string;
    };
  }>;
  areas: Array<{
    name: string;
  }>;
}

export interface PokemonSpecies {
  shape: {
    name: string;
  };
  habitat: {
    name: string;
  };
  color: {
    name: string;
  };
  flavor_text_entries: Array<{
    flavor_text: string;
    language: {
      name: string;
    };
  }>;
  genera: Array<{
    genus: string;
    language: {
      name: string;
    };
  }>;
  egg_groups: Array<{
    name: string;
  }>;
}

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
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  moves: Array<{
    move: {
      name: string;
    };
    version_group_details: Array<{
      move_learn_method: {
        name: string;
      };
      version_group: {
        name: string;
      };
    }>;
  }>;
  species: PokemonSpecies;
  location: PokemonLocation;
  evolutions: Pokemon[];
}

export interface FetchPokemon {
  results: Pokemon[];
  next: number | null;
}

export interface FindPokemon {
  id: number;
  name: string;
}
