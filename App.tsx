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
import { QueryClientProvider } from 'react-query';

import Navigation from '@navigations/index';
import Theme from '@theme/index';
import { queryClient } from '@services/client';

function App() {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <Navigation />
        </Theme>
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;
