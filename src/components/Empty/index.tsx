import React, { ReactNode } from 'react';

import Icon from '@components/Icon';

import {
  Container,
  IlustatorWrapper,
  Content,
  Divider,
  Messages,
} from './styles';

interface EmptyProps {
  title: string;
  children?: ReactNode;
}

function Empty({ title, children }: EmptyProps) {
  return (
    <Container>
      <IlustatorWrapper>
        <Icon name="pokemon" color="#292b2f" size={100} />
      </IlustatorWrapper>
      <Content>
        <Divider />
        <Messages>{title}</Messages>
        {children}
      </Content>
    </Container>
  );
}

export default Empty;
