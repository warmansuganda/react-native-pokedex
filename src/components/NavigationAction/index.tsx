import React from 'react';

import Icon from '@components/Icon';

import { IconButton } from './styles';

interface NavigationActionProps {
  icon: string;
  onPress?: () => void;
}

function NavigationAction({ icon, onPress }: NavigationActionProps) {
  return (
    <IconButton activeOpacity={0.5} onPress={onPress}>
      <Icon name={icon} size={32} color="white" />
    </IconButton>
  );
}

export default NavigationAction;
