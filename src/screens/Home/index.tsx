import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import { RootStackParamList } from '@navigations/types';
import Icon from '@components/Icon';

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

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { t } = useTranslation();

  const renderItem = ({ item }) => (
    <PokemonCard>
      <PokemonDescription>
        <View>
          <PokemonID>#001</PokemonID>
          <PokemonName>{item.title}</PokemonName>
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
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png',
          }}
        />
      </PokemonAvatar>
    </PokemonCard>
  );

  return (
    <Container>
      {/* <Header>
        <AppName>{t('PokeApp')}</AppName>
        <HeaderIcon>
          <Icon name="pokemon" size={54} color="red" />
        </HeaderIcon>
      </Header> */}
      <SearchSection>
        <SearchLabel>{t('What are you looking for?')}</SearchLabel>
        <SearchBox>
          <SearchIcon>
            <Icon name="search" size={24} color="gray" />
          </SearchIcon>
          <SearchInput placeholder={t('Search pokemon, i.e. pikachu')} />
        </SearchBox>
      </SearchSection>
      <FlatList data={data} renderItem={renderItem} />
    </Container>
  );
}

export default HomeScreen;
