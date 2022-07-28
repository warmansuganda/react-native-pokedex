import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';

export const HeaderDetail = styled(LinearGradient)`
  display: flex;
  height: 460px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  /* border: 1px solid red; */
`;

export const PokemonImage = styled.Image`
  width: 200px;
  aspect-ratio: 1;
`;

export const BackgroundAvatar = styled.Image`
  height: 60%;
  aspect-ratio: 1;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  opacity: 0.8;
`;

export const PokemonName = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 28px;
  text-transform: capitalize;
  margin-top: 16px;
`;

export const PokemonTypeBox = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const PokemonType = styled.View`
  padding: 0 8px 2px 8px;
  border-radius: 10px;
  margin-right: 4px;
  border: 1px solid white;
`;

export const PokemonTypeTitle = styled.Text`
  font-size: 12px;
  color: white;
  text-align: center;
`;

export const ContentDetail = styled.View`
  margin-top: -140px;
  /* border: 1px solid green; */
  min-height: 100px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TabDetail = styled.ScrollView`
  margin-top: 10px;
`;
