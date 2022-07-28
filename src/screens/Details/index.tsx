import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '@emotion/react';
import { ScrollView } from 'react-native';
import { useQuery } from 'react-query';

import NavigationAction from '@components/NavigationAction';
import Tab from '@components/Tab';
import DefaultLayout from '@layouts/DefaultLayout';
import { AppStore, AppTypeAction } from '@context/app';
import { zerofill } from '@utils/zerofill';
import { Pokemon } from '@services/pokemon/types';
import { RootStackParamList } from '@navigations/types';
import { findPokemonDetail } from '@services/pokemon';

import AboutDetail from './AboutDetail';
import AboutStatistic from './AboutStatistic';
import AboutMove from './AboutMove';
import AboutEvolution from './AboutEvolution';
import AboutLocation from './AboutLocation';

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
  const { appState, appDispatch } = useContext(AppStore);
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

  useQuery(
    ['pokemon-species', pokemon.name],
    () => findPokemonDetail(pokemon),
    {
      enabled: !!pokemon.name,
      onSuccess: response => {
        appDispatch({
          type: AppTypeAction.UPDATE_POKEMON,
          payload: response,
        });
      },
    },
  );

  return (
    <DefaultLayout
      title={`#${zerofill(pokemon.id, 4)}`}
      accessoryLeft={
        <NavigationAction icon="cheveron-left" onPress={handleBack} />
      }
      accessoryRight={<NavigationAction icon="heart" color="#424242" />}>
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
              <AboutDetail />
            </Tab.Item>
            <Tab.Item id="stats" title={t('Stats')}>
              <AboutStatistic />
            </Tab.Item>
            <Tab.Item id="evolutions" title={t('Evolutions')}>
              <AboutEvolution />
            </Tab.Item>
            <Tab.Item id="moves" title={t('Moves')}>
              <AboutMove />
            </Tab.Item>
            <Tab.Item id="locations" title={t('Locations')}>
              <AboutLocation />
            </Tab.Item>
          </Tab>
        </ContentDetail>
      </ScrollView>
    </DefaultLayout>
  );
}

export default DetailsScreen;
