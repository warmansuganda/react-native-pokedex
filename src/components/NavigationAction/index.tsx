import React from 'react';

import Icon from '@components/Icon';

import { IconButton } from './styles';

interface NavigationActionProps {
  icon: string;
  color?: string;
  onPress?: () => void;
}

function NavigationAction({ icon, color, onPress }: NavigationActionProps) {
  return (
    <IconButton activeOpacity={0.1} onPress={onPress}>
      <Icon name={icon} size={32} color={color || 'white'} />
    </IconButton>
  );
}

export default NavigationAction;
