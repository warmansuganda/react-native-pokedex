import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@navigations/types';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

function DetailsScreen() {
  const route = useRoute<DetailsScreenRouteProp>();

  return (
    <View style={styles.sectionContainer}>
      <Text>Detail Screen</Text>
      <Text>{`Hi, ${route.params.username}`}</Text>
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  sectionContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
