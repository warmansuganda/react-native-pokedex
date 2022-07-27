import React, { useCallback, useMemo, useContext, useState } from 'react';

import { FlatList, ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useInfiniteQuery } from 'react-query';
import { useDebouncedCallback } from 'use-debounce';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@emotion/react';

import { RootStackParamList } from '@navigations/types';
import Icon from '@components/Icon';
import Empty from '@components/Empty';
import NavigationAction from '@components/NavigationAction';
import { fetchPokemon } from '@services/pokemon';
import { Pokemon, FetchPokemon } from '@services/pokemon/types';
import { AppStore, AppTypeAction } from '@context/app';
import DefaultLayout from '@layouts/DefaultLayout';

import ItemList from './ItemList';

import {
  BackgroundIcon,
  SearchBox,
  SearchSection,
  SearchLabel,
  SearchInput,
  SearchIcon,
  EmptyQuery,
} from './styles';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { t } = useTranslation();
  const { appDispatch } = useContext(AppStore);
  const theme = useTheme();
  const [query, setQuery] = useState('');

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery<FetchPokemon, Error>(
      ['fetch-pokemon', query],
      ({ pageParam }) => fetchPokemon(pageParam, query),
      {
        getNextPageParam: lastPage => {
          return lastPage.next;
        },
      },
    );

  const pokemons = useMemo(
    () => data?.pages.map(result => result.results).flat(),
    [data?.pages],
  );

  const handleChangePage = useCallback(() => {
    if (!isLoading && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, isLoading, isFetchingNextPage, hasNextPage]);

  const handleFetchMore = useDebouncedCallback(() => {
    handleChangePage();
  }, 500);

  const handleOnChange = useDebouncedCallback((value: string) => {
    setQuery(value);
  }, 1000);

  const handleOpenDetail = (item: Pokemon) => {
    appDispatch({ type: AppTypeAction.SELECT_POKEMON, payload: item });
    navigation.push('Details');
  };

  const renderItem: ListRenderItem<Pokemon> = ({ item }) => (
    <ItemList item={item} openDetail={handleOpenDetail} />
  );

  const renderPlaceholder = () => (
    <>
      {Array(2)
        .fill(null)
        .map((_, index) => (
          <ItemList.Placeholder key={index} />
        ))}
    </>
  );

  return (
    <DefaultLayout accessoryLeft={<NavigationAction icon="menu-alt-2" />}>
      <BackgroundIcon>
        <Icon name="pokemon" size={200} color="white" />
      </BackgroundIcon>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', theme.colors.background]}>
        <SearchSection>
          <SearchLabel>{t('What Pokémon are you looking for?')}</SearchLabel>
          <SearchBox>
            <SearchIcon>
              <Icon name="search" size={24} color="white" />
            </SearchIcon>
            <SearchInput
              placeholder={t('Search pokemon, i.e. pikachu')}
              placeholderTextColor="#676666"
              onChangeText={handleOnChange}
            />
          </SearchBox>
        </SearchSection>
      </LinearGradient>

      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.name}
        data={pokemons}
        renderItem={renderItem}
        onEndReached={handleFetchMore}
        onEndReachedThreshold={0.2}
        ListFooterComponent={
          isLoading || isFetchingNextPage ? renderPlaceholder : null
        }
        ListEmptyComponent={
          !isLoading && !isFetchingNextPage ? (
            <Empty title={t('No search result found for')}>
              <EmptyQuery>{`" ${query} "`}</EmptyQuery>
            </Empty>
          ) : null
        }
      />
    </DefaultLayout>
  );
}

export default HomeScreen;
