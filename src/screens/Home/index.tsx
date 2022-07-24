import React, { useState } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useDebouncedCallback } from 'use-debounce';

import { RootStackParamList } from '@navigations/types';
import Icon from '@components/Icon';
import { fetchPokemon } from '@services/pokemon';
import { Pokemon, FetchPokemon } from '@services/pokemon/types';

import {
  Container,
  SearchBox,
  SearchSection,
  SearchLabel,
  SearchInput,
  SearchIcon,
  PokemonCard,
  PokemonAvatar,
  PokemonImage,
  PokemonDescription,
  PokemonID,
  PokemonName,
  PokemonType,
  PokemonTypeTitle,
  PokemonTypeBox,
} from './styles';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { t } = useTranslation();
  const [page, setPage] = useState(1);

  const { data } = useQuery<FetchPokemon, Error>(
    ['fetch-pokemon', page],
    () => fetchPokemon().then(res => res.data),
    {
      onError: e => {
        console.log('error', e);
      },
    },
  );

  const handleFetchMore = useDebouncedCallback(() => {
    console.log('load more');
  }, 500);

  const handleOpenDetail = (item: Pokemon) => {
    console.log(item);
    navigation.push('Details', { name: item.name });
  };

  const renderItem = ({ item }: { item: Pokemon }) => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => handleOpenDetail(item)}>
      <PokemonCard>
        <PokemonDescription>
          <View>
            <PokemonID>#001</PokemonID>
            <PokemonName>{item.name}</PokemonName>
          </View>
          <PokemonTypeBox>
            <PokemonType>
              <PokemonTypeTitle>Water</PokemonTypeTitle>
            </PokemonType>
          </PokemonTypeBox>
        </PokemonDescription>
        <PokemonAvatar>
          <PokemonImage
            source={{
              uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
            }}
          />
        </PokemonAvatar>
      </PokemonCard>
    </TouchableOpacity>
  );

  return (
    <Container>
      <SearchSection>
        <SearchLabel>{t('What are you looking for?')}</SearchLabel>
        <SearchBox>
          <SearchIcon>
            <Icon name="search" size={24} color="gray" />
          </SearchIcon>
          <SearchInput placeholder={t('Search pokemon, i.e. pikachu')} />
        </SearchBox>
      </SearchSection>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data?.results || []}
        renderItem={renderItem}
        onEndReached={handleFetchMore}
        onEndReachedThreshold={0.2}
      />
    </Container>
  );
}

export default HomeScreen;
