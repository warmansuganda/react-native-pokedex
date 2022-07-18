import React, { useContext } from 'react';
import { Switch } from 'react-native';

import { AppStore } from '@context/app';

function ThemeToggle() {
  const { appState, appDispatch } = useContext(AppStore);
  const handleOnChange = () => {
    appDispatch({
      type: 'CHANGE_THEME',
      payload: appState.theme === 'light' ? 'dark' : 'light',
    });
  };

  return (
    <Switch value={appState.theme !== 'light'} onChange={handleOnChange} />
  );
}

export default ThemeToggle;
