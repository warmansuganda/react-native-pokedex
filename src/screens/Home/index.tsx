import React, { useCallback, useMemo, useContext } from 'react';

import { FlatList, ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useInfiniteQuery } from 'react-query';
import { useDebouncedCallback } from 'use-debounce';
import LinearGradient from 'react-native-linear-gradient';

import { RootStackParamList } from '@navigations/types';
import Icon from '@components/Icon';
import { fetchPokemon } from '@services/pokemon';
import { Pokemon, FetchPokemon } from '@services/pokemon/types';
import { AppStore, AppTypeAction } from '@context/app';
import DefaultLayout from '@layouts/DefaultLayout';

import ItemList from './ItemList';

import {
  MenuIcon,
  BackgroundIcon,
  SearchBox,
  SearchSection,
  SearchLabel,
  SearchInput,
  SearchIcon,
} from './styles';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { t } = useTranslation();
  const { appDispatch } = useContext(AppStore);

  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<FetchPokemon, Error>(
      ['fetch-pokemon'],
      ({ pageParam }) => fetchPokemon(pageParam),
      {
        getNextPageParam: lastPage => {
          if (lastPage.next !== null) {
            return lastPage.next;
          }

          return lastPage;
        },
      },
    );

  const pokemons = useMemo(
    () => data?.pages.map(result => result.results).flat(),
    [data?.pages],
  );

  const handleChangePage = useCallback(() => {
    if (!isLoading && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, isLoading, isFetchingNextPage]);

  const handleFetchMore = useDebouncedCallback(() => {
    handleChangePage();
  }, 500);

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
    <DefaultLayout>
      <MenuIcon>
        <Icon name="menu-alt-2" size={32} color="white" />
      </MenuIcon>
      <BackgroundIcon>
        <Icon name="pokemon" size={200} color="white" />
      </BackgroundIcon>
      <LinearGradient colors={['rgba(255, 255, 255, 0)', '#131313']}>
        <SearchSection>
          <SearchLabel>{t('What Pokémon are you looking for?')}</SearchLabel>
          <SearchBox>
            <SearchIcon>
              <Icon name="search" size={24} color="white" />
            </SearchIcon>
            <SearchInput
              placeholder={t('Search pokemon, i.e. pikachu')}
              placeholderTextColor="#676666"
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
      />
    </DefaultLayout>
  );
}

export default HomeScreen;
