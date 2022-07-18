/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from 'react';

import Navigation from '@navigations/index';
import Theme from '@theme/index';
import { AppProvider } from '@context/app';

function App() {
  return (
    <Fragment>
      <AppProvider>
        <Theme>
          <Navigation />
        </Theme>
      </AppProvider>
    </Fragment>
  );
}

export default App;
