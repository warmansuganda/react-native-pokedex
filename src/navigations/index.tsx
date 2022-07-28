import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import RootNavigation from './RootNavigation';

function Navigation() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default Navigation;
