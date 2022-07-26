/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment, useEffect } from 'react';
import { QueryClientProvider } from 'react-query';
import { StatusBar } from 'react-native';
import LottieSplashScreen from 'react-native-lottie-splash-screen';

import Navigation from '@navigations/index';
import Theme from '@theme/index';
import { AppProvider } from '@context/app';
import { queryClient } from '@services/client';

import '@locales/i18n';

function App() {
  useEffect(() => {
    LottieSplashScreen.hide();
  }, []);

  return (
    <Fragment>
      <StatusBar translucent backgroundColor="transparent" />
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Theme>
            <Navigation />
          </Theme>
        </AppProvider>
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;
