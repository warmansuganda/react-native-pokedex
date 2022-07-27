import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from 'react-native';
import { AppStore } from '@context/app';

import { Container } from './styles';

function AboutMove() {
  const { t } = useTranslation();
  const { appState } = useContext(AppStore);

  const pokemon = useMemo(() => appState.pokemon, [appState.pokemon]);

  return (
    <Container>
      <Text>{t('AboutMove {{name}}', { name: pokemon?.name })}</Text>
    </Container>
  );
}

export default AboutMove;
