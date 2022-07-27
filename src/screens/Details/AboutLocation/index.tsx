import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from 'react-native';
import { AppStore } from '@context/app';

import { Container } from './styles';

function AboutLocation() {
  const { t } = useTranslation();
  const { appState } = useContext(AppStore);

  return (
    <Container>
      <Text>{t('AboutLocation')}</Text>
    </Container>
  );
}

export default AboutLocation;
