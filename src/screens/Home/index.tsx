import React, { useCallback } from 'react';

import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useInfiniteQuery } from 'react-query';
import { useDebouncedCallback } from 'use-debounce';

import { RootStackParamList } from '@navigations/types';
import Icon from '@components/Icon';
import { fetchPokemon } from '@services/pokemon';
import { Pokemon, FetchPokemon } from '@services/pokemon/types';

import ItemList from './ItemList';

import {
  Container,
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

  const handleChangePage = useCallback(() => {
    if (!isLoading && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, isLoading, isFetchingNextPage]);

  const handleFetchMore = useDebouncedCallback(() => {
    handleChangePage();
  }, 500);

  const handleOpenDetail = (item: Pokemon) => {
    navigation.push('Details', { name: item.name });
  };

  const renderItem = ({ item }: { item: Pokemon }) => (
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
        keyExtractor={item => item.name}
        data={data?.pages.map(result => result.results).flat()}
        renderItem={renderItem}
        onEndReached={handleFetchMore}
        onEndReachedThreshold={0.2}
        ListFooterComponent={
          isLoading || isFetchingNextPage ? renderPlaceholder : null
        }
      />
    </Container>
  );
}

export default HomeScreen;
