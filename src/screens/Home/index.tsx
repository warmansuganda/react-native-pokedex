import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '@navigations/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.sectionContainer}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', { username: 'Warman Suganda' })
        }
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  sectionContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
