import styled from '@emotion/native';

export const PokemonCard = styled.View`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
  position: relative;
  overflow: hidden;
`;

export const BackgroundAvatar = styled.View`
  position: absolute;
  right: 0;
  left: 0;
`;

export const PokemonAvatar = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
`;

export const PokemonImage = styled.Image`
  width: 100%;
  aspect-ratio: 1;
`;

export const PokemonDescription = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const PokemonID = styled.Text`
  color: white;
  font-weight: bold;
`;

export const PokemonName = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

export const PokemonTypeBox = styled.View`
  display: flex;
  flex-wrap: wrap;
`;

export const PokemonType = styled.View`
  background-color: rgba(52, 52, 52, 0.3);
  padding: 1px 8px;
  border-radius: 10px;
`;

export const PokemonTypeTitle = styled.Text`
  font-size: 12px;
  color: white;
  text-align: center;
`;
