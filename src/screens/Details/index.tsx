import React, { useContext, useMemo } from 'react';
import { Text } from 'react-native';

import PlainLayout from '@layouts/PlainLayout';
import { AppStore } from '@context/app';

function DetailsScreen() {
  const { appState } = useContext(AppStore);

  const pokemon = useMemo(() => appState.pokemon, [appState.pokemon]);

  return (
    <PlainLayout>
      <Text>{`Hi, ${pokemon?.name}`}</Text>
    </PlainLayout>
  );
}

export default DetailsScreen;
