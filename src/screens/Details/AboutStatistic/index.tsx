import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from 'react-native';
import { AppStore } from '@context/app';

import { Container } from './styles';

function AboutStatistic() {
  const { t } = useTranslation();
  const { appState } = useContext(AppStore);

  return (
    <Container>
      <Text>{t('AboutStatistic')}</Text>
    </Container>
  );
}

export default AboutStatistic;
