import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppStore } from '@context/app';

import {
  Container,
  Description,
  InfoWrapper,
  Heading,
  MapImage,
  MapWrapper,
} from './styles';

function AboutLocation() {
  const { t } = useTranslation();
  const { appState } = useContext(AppStore);

  const pokemon = useMemo(() => appState.pokemon, [appState.pokemon]);

  const names = useMemo(
    () => pokemon?.location?.names.find(item => item.language.name === 'en'),
    [pokemon],
  );

  const region = useMemo(() => pokemon?.location?.region, [pokemon]);

  return (
    <Container>
      <MapWrapper>
        <MapImage source={require('@assets/images/bg-map.jpeg')} />
      </MapWrapper>
      <InfoWrapper>
        <Heading>{t('Area')}</Heading>
        <Description>
          {names?.name || '-'}, {region?.name || '-'}
        </Description>
      </InfoWrapper>
    </Container>
  );
}

export default AboutLocation;
