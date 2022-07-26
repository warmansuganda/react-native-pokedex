import React, { useContext, useMemo } from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import NavigationAction from '@components/NavigationAction';
import DefaultLayout from '@layouts/DefaultLayout';
import { AppStore } from '@context/app';
import { zerofill } from '@utils/zerofill';
import { Pokemon } from '@services/pokemon/types';
import { RootStackParamList } from '@navigations/types';

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

function DetailsScreen() {
  const { t } = useTranslation();
  const { appState } = useContext(AppStore);
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const pokemon = useMemo<Pokemon>(
    () => appState.pokemon || ({} as Pokemon),
    [appState.pokemon],
  );

  const handleBack = () => navigation.goBack();

  return (
    <DefaultLayout
      title={`#${zerofill(pokemon.id, 4)}`}
      accessoryLeft={
        <NavigationAction icon="cheveron-left" onPress={handleBack} />
      }
      accessoryRight={<NavigationAction icon="heart" />}>
      <Text>{`Hi, ${pokemon?.name}`}</Text>
    </DefaultLayout>
  );
}

export default DetailsScreen;
