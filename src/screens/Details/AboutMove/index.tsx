import React, { useContext, useMemo } from 'react';

import { AppStore } from '@context/app';

import { Container, MoveInformation, MoveLabel } from './styles';

function AboutMove() {
  const { appState } = useContext(AppStore);

  const pokemon = useMemo(() => appState.pokemon, [appState.pokemon]);

  return (
    <Container>
      {pokemon?.moves?.map(item => (
        <MoveInformation key={item.move.name}>
          <MoveLabel>{item.move.name.replace('-', ' ')}</MoveLabel>
        </MoveInformation>
      ))}
    </Container>
  );
}

export default AboutMove;
