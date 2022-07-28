import { useWindowDimensions } from 'react-native';

import {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';

export function useAnimations() {
  const offsetY = useSharedValue(0);
  const { width } = useWindowDimensions();

  const searchLabelAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(offsetY.value, [0, 180], [1, 0], 'clamp'),
      transform: [
        {
          translateX: interpolate(offsetY.value, [0, 200], [0, 40], 'clamp'),
        },
        {
          translateY: interpolate(offsetY.value, [0, 200], [0, -70], 'clamp'),
        },
      ],
    };
  });

  const searchBoxAnimatedStyles = useAnimatedStyle(() => {
    return {
      width: interpolate(
        offsetY.value,
        [0, 200],
        [width - 32, width - 72],
        'clamp',
      ),
      transform: [
        {
          translateX: interpolate(offsetY.value, [0, 200], [-2, 40], 'clamp'),
        },
        {
          translateY: interpolate(offsetY.value, [0, 200], [0, -142], 'clamp'),
        },
      ],
    };
  });

  return {
    offsetY,
    searchLabelAnimatedStyles,
    searchBoxAnimatedStyles,
  };
}
