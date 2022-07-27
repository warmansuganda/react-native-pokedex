import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Icon from '@components/Icon';
import { AppStore } from '@context/app';
import { lorem } from '@utils/lorem-ipsum';

import {
  Container,
  Description,
  Card,
  CardSection,
  CardDescription,
  CardDescriptionLabel,
  CardDescriptionValue,
  CardSectionDivider,
} from './styles';

function AboutDetail() {
  const { t } = useTranslation();
  const { appState } = useContext(AppStore);

  const weight = useMemo(() => {
    const origin = appState.pokemon?.weight;
    const kilogram = origin ? (origin / 10).toFixed(2) : 0;
    const pound = origin ? (Number(kilogram) * 2.2046).toFixed(2) : 0;

    return {
      origin,
      kilogram,
      pound,
    };
  }, [appState.pokemon]);

  const height = useMemo(() => {
    const origin = appState.pokemon?.height;
    const meter = origin ? (origin / 10).toFixed(2) : 0;
    const inch = origin ? (Number(meter) * 39.3701).toFixed(2) : 0;

    return {
      origin,
      meter,
      inch,
    };
  }, [appState.pokemon]);

  return (
    <Container>
      <Description>{lorem.generateWords(20)}</Description>
      <Card>
        <CardSection>
          <Icon name="weight-scale" color="white" size={20} />
          <CardDescription>
            <CardDescriptionValue>
              {t('{{number}} kg', { number: weight.kilogram })}
              {` (${t('{{number}} lbs', { number: weight.pound })}) `}
            </CardDescriptionValue>
            <CardDescriptionLabel>{t('Weight')}</CardDescriptionLabel>
          </CardDescription>
        </CardSection>
        <CardSectionDivider />
        <CardSection>
          <Icon name="ruler" color="white" size={20} />
          <CardDescription>
            <CardDescriptionValue>
              {t('{{number}} m', { number: height.meter })}
              {` (${t('{{number}}"{{decimal}}\'', {
                number: height.inch.toString().split('.')[0],
                decimal: height.inch.toString().split('.')[1],
              })}) `}
            </CardDescriptionValue>
            <CardDescriptionLabel>{t('Weight')}</CardDescriptionLabel>
          </CardDescription>
        </CardSection>
      </Card>
    </Container>
  );
}

export default AboutDetail;
