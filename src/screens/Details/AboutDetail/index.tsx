import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppStore } from '@context/app';
import { Pokemon } from '@services/pokemon/types';
import { removeWhiteSpace } from '@utils/string';

import {
  Container,
  Description,
  InfoWrapper,
  Info,
  InfoLabel,
  InfoValue,
  Heading,
} from './styles';

function AboutDetail() {
  const { t } = useTranslation();
  const { appState } = useContext(AppStore);

  const pokemon = useMemo<Pokemon>(
    () => appState.pokemon || ({} as Pokemon),
    [appState.pokemon],
  );

  const weight = useMemo(() => {
    const origin = pokemon?.weight;
    const kilogram = origin ? (origin / 10).toFixed(2) : 0;
    const pound = origin ? (Number(kilogram) * 2.2046).toFixed(2) : 0;

    return {
      origin,
      kilogram,
      pound,
    };
  }, [pokemon]);

  const height = useMemo(() => {
    const origin = pokemon?.height;
    const meter = origin ? (origin / 10).toFixed(2) : 0;
    const inch = origin ? (Number(meter) * 39.3701).toFixed(2) : 0;

    return {
      origin,
      meter,
      inch,
    };
  }, [pokemon]);

  const flavor = useMemo(
    () =>
      pokemon?.species?.flavor_text_entries?.find(
        item => item.language.name === 'en',
      ),
    [pokemon],
  );

  return (
    <Container>
      <Description>{removeWhiteSpace(flavor?.flavor_text || '')}</Description>
      <InfoWrapper>
        <Info>
          <InfoLabel>{t('Species')}</InfoLabel>
          <InfoValue>AAA</InfoValue>
        </Info>
        <Info>
          <InfoLabel>{t('Height')}</InfoLabel>
          <InfoValue>
            {t('{{number}} kg', { number: weight.kilogram })}
            {` (${t('{{number}} lbs', { number: weight.pound })}) `}
          </InfoValue>
        </Info>
        <Info>
          <InfoLabel>{t('Weight')}</InfoLabel>
          <InfoValue>
            {t('{{number}} m', { number: height.meter })}
            {` (${t('{{number}}"{{decimal}}\'', {
              number: height.inch.toString().split('.')[0],
              decimal: height.inch.toString().split('.')[1],
            })}) `}
          </InfoValue>
        </Info>
        <Info>
          <InfoLabel>{t('Abilities')}</InfoLabel>
          <InfoValue>AAA</InfoValue>
        </Info>
        <Info>
          <InfoLabel>{t('Weeknes')}</InfoLabel>
          <InfoValue>AAA</InfoValue>
        </Info>
      </InfoWrapper>
      <Heading>{t('Breeding')}</Heading>
      <InfoWrapper>
        <Info>
          <InfoLabel>{t('Gender')}</InfoLabel>
          <InfoValue>AAA</InfoValue>
        </Info>
        <Info>
          <InfoLabel>{t('Egg Group')}</InfoLabel>
          <InfoValue>AAA</InfoValue>
        </Info>
        <Info>
          <InfoLabel>{t('Egg Group')}</InfoLabel>
          <InfoValue>AAA</InfoValue>
        </Info>
      </InfoWrapper>
    </Container>
  );
}

export default AboutDetail;
