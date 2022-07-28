import React, { useCallback, useMemo, useContext, useState } from 'react';

import { ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useInfiniteQuery } from 'react-query';
import { useDebouncedCallback } from 'use-debounce';
import { useTheme } from '@emotion/react';
import { useAnimatedScrollHandler } from 'react-native-reanimated';

import { RootStackParamList } from '@navigations/types';
import Icon from '@components/Icon';
import Empty from '@components/Empty';
import NavigationAction from '@components/NavigationAction';
import { fetchPokemon } from '@services/pokemon';
import { Pokemon, FetchPokemon } from '@services/pokemon/types';
import { AppStore, AppTypeAction } from '@context/app';
import DefaultLayout from '@layouts/DefaultLayout';

import ItemList from './ItemList';
import { useAnimations } from './animations';

import {
  BackgroundIcon,
  SearchBox,
  SearchSection,
  SearchLabel,
  SearchInput,
  SearchIcon,
  EmptyQuery,
  AnimatedFlatlist,
  BackgroundGradient,
  ListHeader,
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
  const { offsetY, searchBoxAnimatedStyles, searchLabelAnimatedStyles } =
    useAnimations();

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

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      offsetY.value = event.contentOffset.y;
    },
  });

  return (
    <DefaultLayout
      accessoryLeft={<NavigationAction icon="menu-alt-2" />}
      accessoryRight={
        <SearchSection>
          <SearchLabel style={searchLabelAnimatedStyles}>
            {t('What Pokémon are you looking for?')}
          </SearchLabel>
          <SearchBox style={searchBoxAnimatedStyles}>
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
      }>
      <BackgroundIcon>
        <Icon name="pokemon" size={200} color="white" />
      </BackgroundIcon>
      <BackgroundGradient
        colors={['rgba(255, 255, 255, 0)', theme.colors.background]}
      />

      <AnimatedFlatlist
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.name}
        data={pokemons}
        renderItem={renderItem}
        onEndReached={handleFetchMore}
        onEndReachedThreshold={0.2}
        scrollEventThrottle={16}
        ListHeaderComponent={<ListHeader />}
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
