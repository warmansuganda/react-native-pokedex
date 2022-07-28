import styled from '@emotion/native';
import { FlatList, FlatListProps } from 'react-native';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { Pokemon } from '@services/pokemon/types';

export const AnimatedFlatlist = styled(
  Animated.createAnimatedComponent<FlatListProps<Pokemon>>(FlatList),
)`
  margin-top: 4px;
`;

export const BackgroundGradient = styled(LinearGradient)`
  /* border: 1px solid red; */
  height: 240px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`;

export const BackgroundIcon = styled.View`
  padding: 10px 0 10px 10px;
  display: flex;
  justify-content: center;
  margin-top: 16px;
  position: absolute;
  opacity: 0.05;
  right: -70px;
`;

export const SearchSection = styled.View`
  display: flex;
  padding: 16px;
  position: absolute;
  top: 52px;
  left: 0;
  right: 0;
`;

export const SearchLabel = styled(Animated.Text)`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
`;

export const SearchBox = styled(Animated.View)`
  width: 100%;
  display: flex;
  border: 1px solid #2d2b2c;
  border-radius: 50px;
  overflow: hidden;
  flex-direction: row;
  background-color: #2d2b2c;
  z-index: 100;
`;

export const SearchIcon = styled.View`
  padding: 10px 0 10px 10px;
  display: flex;
  justify-content: center;
`;

export const ListHeader = styled.View`
  height: 152px;
`;

export const SearchInput = styled.TextInput`
  padding: 10px 12px;
  flex: 1;
  color: white;
`;

export const EmptyQuery = styled.Text`
  color: white;
  font-weight: bold;
`;
