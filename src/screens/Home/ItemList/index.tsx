import React, { useMemo } from 'react';
import { Pokemon } from '@services/pokemon/types';
import { View, TouchableOpacity } from 'react-native';

import {
  PokemonCard,
  PokemonAvatar,
  PokemonImage,
  PokemonDescription,
  PokemonID,
  PokemonName,
  PokemonType,
  PokemonTypeTitle,
  PokemonTypeBox,
  BackgroundAvatar,
} from './styles';

import Placeholder from './placeholder';

interface ItemListProps {
  item: Pokemon;
  openDetail: (item: Pokemon) => void;
}

function ItemList({ item, openDetail }: ItemListProps) {
  const image = useMemo(
    () =>
      item.name === 'bulbasaur'
        ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png'
        : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
    [item.name],
  );
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => openDetail(item)}>
      <PokemonCard>
        <BackgroundAvatar>
          <PokemonImage
            source={{
              uri: image,
            }}
            blurRadius={100}
          />
        </BackgroundAvatar>
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
              uri: image,
            }}
          />
        </PokemonAvatar>
      </PokemonCard>
    </TouchableOpacity>
  );
}

export default Object.assign(ItemList, { Placeholder });
