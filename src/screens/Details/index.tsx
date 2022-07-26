import React, { useContext, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { AppStore } from '@context/app';

function DetailsScreen() {
  const { appState } = useContext(AppStore);

  const pokemon = useMemo(() => appState.pokemon, [appState.pokemon]);

  return (
    <View style={styles.sectionContainer}>
      <Text>{`Hi, ${pokemon?.name}`}</Text>
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  sectionContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 10,
  },
});
