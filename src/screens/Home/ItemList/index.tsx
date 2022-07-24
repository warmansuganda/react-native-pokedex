import { Pokemon } from '@services/pokemon/types';
import React from 'react';
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
} from './styles';

import Placeholder from './placeholder';

interface ItemListProps {
  item: Pokemon;
  openDetail: (item: Pokemon) => void;
}

function ItemList({ item, openDetail }: ItemListProps) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => openDetail(item)}>
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
}

export default Object.assign(ItemList, { Placeholder });
