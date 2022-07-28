import React, { useContext, useMemo } from 'react';

import { AppStore } from '@context/app';

import { Container, Card, Avatar, Image, PokemonName, BoxName } from './styles';

function AboutEvolution() {
  const { appState } = useContext(AppStore);

  const pokemon = useMemo(() => appState.pokemon, [appState.pokemon]);

  return (
    <Container>
      {pokemon?.evolutions?.map(item => (
        <Card key={item.id}>
          <Avatar>
            <Image source={{ uri: item.sprites.other.home.front_default }} />
          </Avatar>
          <BoxName>
            <PokemonName>{item.name}</PokemonName>
          </BoxName>
        </Card>
      ))}
    </Container>
  );
}

export default AboutEvolution;
