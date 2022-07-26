import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '@emotion/react';
import { ScrollView } from 'react-native';

import NavigationAction from '@components/NavigationAction';
import Tab from '@components/Tab';
import DefaultLayout from '@layouts/DefaultLayout';
import { AppStore } from '@context/app';
import { zerofill } from '@utils/zerofill';
import { Pokemon } from '@services/pokemon/types';
import { RootStackParamList } from '@navigations/types';

import {
  HeaderDetail,
  PokemonImage,
  BackgroundAvatar,
  PokemonName,
  PokemonType,
  PokemonTypeTitle,
  PokemonTypeBox,
  ContentDetail,
} from './styles';

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

function DetailsScreen() {
  const { t } = useTranslation();
  const { appState } = useContext(AppStore);
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const theme = useTheme();

  const pokemon = useMemo<Pokemon>(
    () => appState.pokemon || ({} as Pokemon),
    [appState.pokemon],
  );

  const image = useMemo(() => {
    return pokemon.sprites.other.home.front_default;
  }, [pokemon]);

  const handleBack = () => navigation.goBack();

  return (
    <DefaultLayout
      title={`#${zerofill(pokemon.id, 4)}`}
      accessoryLeft={
        <NavigationAction icon="cheveron-left" onPress={handleBack} />
      }
      accessoryRight={<NavigationAction icon="heart" />}>
      <BackgroundAvatar
        source={{
          uri: image,
        }}
        blurRadius={50}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <HeaderDetail
          colors={[
            'rgba(255, 255, 255, 0)',
            'rgba(255, 255, 255, 0)',
            theme.colors.background,
            theme.colors.background,
          ]}>
          <PokemonImage
            source={{
              uri: image,
            }}
          />
          <PokemonName>{pokemon.name}</PokemonName>
          <PokemonTypeBox>
            {pokemon.types.map(({ type }) => (
              <PokemonType key={type.name}>
                <PokemonTypeTitle>{type.name}</PokemonTypeTitle>
              </PokemonType>
            ))}
          </PokemonTypeBox>
        </HeaderDetail>
        <ContentDetail>
          <Tab>
            <Tab.Item id="about" title={t('About')}>
              <PokemonTypeTitle>Tab Ini Adalah 1</PokemonTypeTitle>
            </Tab.Item>
            <Tab.Item id="stats" title={t('Stats')}>
              <PokemonTypeTitle>Stats</PokemonTypeTitle>
            </Tab.Item>
            <Tab.Item id="moves" title={t('Moves')}>
              <PokemonTypeTitle>Moves</PokemonTypeTitle>
            </Tab.Item>
            <Tab.Item id="evolutions" title={t('Evolutions')}>
              <PokemonTypeTitle>Evolutions</PokemonTypeTitle>
            </Tab.Item>
            <Tab.Item id="locations" title={t('Locations')}>
              <PokemonTypeTitle>Locations</PokemonTypeTitle>
            </Tab.Item>
          </Tab>
        </ContentDetail>
      </ScrollView>
    </DefaultLayout>
  );
}

export default DetailsScreen;
