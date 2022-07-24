import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useQuery } from 'react-query';

import { RootStackParamList } from '@navigations/types';
import { findPokemon } from '@services/pokemon';
import { FindPokemon } from '@services/pokemon/types';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

function DetailsScreen() {
  const route = useRoute<DetailsScreenRouteProp>();
  const { name } = route.params;

  const { data } = useQuery<FindPokemon, Error>(
    ['find-user', name],
    () => findPokemon(name).then(res => res.data),
    {
      onError: e => {
        console.log('error', e);
      },
    },
  );

  console.log(data);

  return (
    <View style={styles.sectionContainer}>
      <Text>{`Hi, ${data?.name}`}</Text>
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
