import React, { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { AppState, AppAction } from './types';

const initialState: AppState = {
  theme: 'light',
};

export const AppStore = createContext<{
  appState: AppState;
  appDispatch: Dispatch<AppAction>;
}>({
  appState: initialState,
  appDispatch: () => null,
});

const { Provider } = AppStore;

interface AppProviderProps {
  children: ReactNode | ReactNode[];
}

export function AppProvider({ children }: AppProviderProps) {
  const [appState, appDispatch] = useReducer(
    (state: AppState, action: AppAction) => {
      switch (action.type) {
        case 'CHANGE_THEME':
          return { ...state, theme: action.payload };
        default:
          throw new Error();
      }
    },
    initialState,
  );

  return <Provider value={{ appState, appDispatch }}>{children}</Provider>;
}
