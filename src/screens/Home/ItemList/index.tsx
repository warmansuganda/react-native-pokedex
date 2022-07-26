import React, { useMemo } from 'react';
import { Pokemon } from '@services/pokemon/types';
import { View, TouchableOpacity } from 'react-native';

import { zerofill } from '@utils/zerofill';

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
  const image = useMemo(() => {
    return item.sprites.other.home.front_default;
  }, [item]);

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => openDetail(item)}>
      <PokemonCard>
        <BackgroundAvatar>
          <PokemonImage
            source={{
              uri: image,
            }}
            blurRadius={80}
          />
        </BackgroundAvatar>
        <PokemonDescription>
          <View>
            <PokemonID>{`#${zerofill(item.id, 4)}`}</PokemonID>
            <PokemonName>{item.name}</PokemonName>
          </View>
          <PokemonTypeBox>
            {item.types.map(({ type }) => (
              <PokemonType key={type.name}>
                <PokemonTypeTitle>{type.name}</PokemonTypeTitle>
              </PokemonType>
            ))}
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
