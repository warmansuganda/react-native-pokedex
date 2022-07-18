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
import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from '@navigations/index';
import Theme from '@theme/index';

function App() {
  return (
    <Fragment>
      <Theme>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </Theme>
    </Fragment>
  );
}

export default App;
