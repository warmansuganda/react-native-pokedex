import React, { ReactNode } from 'react';

import { Container } from './styles';

interface PlaintLayoutProps {
  children: ReactNode | ReactNode[];
}

function PlaintLayout({ children }: PlaintLayoutProps) {
  return <Container>{children}</Container>;
}

export default PlaintLayout;
