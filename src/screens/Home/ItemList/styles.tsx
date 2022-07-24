import styled from '@emotion/native';
import { StyleSheet } from 'react-native';

interface PokemonCardProps {
  isPlaceholder?: boolean;
}

export const PokemonCard = styled.View<PokemonCardProps>`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => (props.isPlaceholder ? '#ced4da' : '#94dbef')};
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin-bottom: 12px;
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

export const placeholder = StyleSheet.create({
  PokemonID: {
    width: 120,
    height: 16,
    borderRadius: 4,
    marginBottom: 2,
  },
  PokemonName: {
    width: 120,
    height: 20,
    borderRadius: 4,
  },
});
