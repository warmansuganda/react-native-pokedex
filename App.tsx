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

import Navigation from '@navigations/index';
import { AppProvider } from '@context/app';

function App() {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}

export default App;
