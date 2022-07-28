import {
  Pokemon,
  PokemonLocation,
  PokemonSpecies,
} from '@services/pokemon/types';

export type ThemeType = 'dark' | 'light';

export interface AppState {
  theme: ThemeType;
  pokemon?: Pokemon;
}

export enum AppTypeAction {
  CHANGE_THEME = 'app/changeTheme',
  SELECT_POKEMON = 'app/selectPokemon',
  UPDATE_POKEMON = 'app/updatePokemon',
}

export interface UpdatePokemon {
  species: PokemonSpecies;
  evolutions: Pokemon[];
  location: PokemonLocation;
}

export type AppAction =
  | { type: AppTypeAction.CHANGE_THEME; payload: ThemeType }
  | { type: AppTypeAction.SELECT_POKEMON; payload: Pokemon }
  | { type: AppTypeAction.UPDATE_POKEMON; payload: UpdatePokemon };
