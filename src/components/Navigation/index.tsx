import React, { ReactNode, isValidElement, cloneElement } from 'react';

import { FunctionalElement } from '@utils/types';

import { Wrapper, Children, Title } from './styles';

export type TopNaviggationTitle = ReactNode | FunctionalElement;

interface NavigationProps {
  title?: TopNaviggationTitle;
  accessoryLeft?: ReactNode;
  accessoryRight?: ReactNode;
}

function Navigation({ title, accessoryLeft, accessoryRight }: NavigationProps) {
  const renderTitle = () => {
    if (isValidElement(title)) {
      return cloneElement(title);
    }

    if (typeof title === 'function') {
      return title();
    }

    if (typeof title === 'string') {
      return <Title>{title}</Title>;
    }

    return null;
  };

  return (
    <Wrapper>
      {accessoryLeft}
      <Children>{renderTitle()}</Children>
      {accessoryRight}
    </Wrapper>
  );
}

export default Navigation;
