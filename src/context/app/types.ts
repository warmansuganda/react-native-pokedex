export type ThemeType = 'dark' | 'light';

export interface AppState {
  theme: ThemeType;
}

export type AppAction = { type: 'CHANGE_THEME'; payload: ThemeType };
