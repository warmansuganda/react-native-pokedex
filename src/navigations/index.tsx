import React, { useContext } from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import { AppStore } from '@context/app';

import RootNavigation from './RootNavigation';

function Navigation() {
  const { appState } = useContext(AppStore);

  return (
    <NavigationContainer
      theme={appState.theme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default Navigation;
