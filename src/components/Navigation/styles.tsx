import styled from '@emotion/native';
import { Text, View } from 'react-native';

export const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled(Text)`
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

export const Children = styled(View)`
  display: flex;
  justify-content: center;
  flex: 1;
`;
