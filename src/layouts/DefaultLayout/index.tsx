import React, { ReactNode } from 'react';

import Navigation, { TopNaviggationTitle } from '@components/Navigation';

import { Container } from './styles';

interface DefaultLayoutProps {
  children: ReactNode | ReactNode[];
  title?: TopNaviggationTitle;
  accessoryLeft?: ReactNode;
  accessoryRight?: ReactNode;
}

function DefaultLayout({
  children,
  title,
  accessoryLeft,
  accessoryRight,
}: DefaultLayoutProps) {
  return (
    <Container>
      <Navigation
        title={title}
        accessoryLeft={accessoryLeft}
        accessoryRight={accessoryRight}
      />
      {children}
    </Container>
  );
}

export default DefaultLayout;
