/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from 'react-query';

import RootNavigation from '@navigations/index';
import { queryClient } from '@services/client';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
