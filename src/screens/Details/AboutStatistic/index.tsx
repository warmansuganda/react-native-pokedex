import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppStore } from '@context/app';
import { lorem } from '@utils/lorem-ipsum';

import {
  Container,
  StatisticWrapper,
  Statistic,
  StatisticLabel,
  StatisticValue,
  StatisticBar,
  StatisticProgress,
  Description,
  Heading,
} from './styles';

function AboutStatistic() {
  const { t } = useTranslation();
  const { appState } = useContext(AppStore);

  const stats = useMemo(() => appState.pokemon?.stats, [appState.pokemon]);

  return (
    <Container>
      <StatisticWrapper>
        {stats?.map(item => (
          <Statistic key={item.stat.name}>
            <StatisticLabel>
              {t(item.stat.name.replace('-', ' '))}
            </StatisticLabel>
            <StatisticValue>{item.base_stat}</StatisticValue>
            <StatisticBar>
              <StatisticProgress
                value={Math.min(Math.ceil((item.base_stat / 255) * 100), 100)}
              />
            </StatisticBar>
          </Statistic>
        ))}
      </StatisticWrapper>
      <Description>{lorem.generateWords(20)}</Description>
      <Heading>{t('Type Defenses')}</Heading>
      <Description>{lorem.generateWords(20)}</Description>
    </Container>
  );
}

export default AboutStatistic;
