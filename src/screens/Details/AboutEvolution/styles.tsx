import styled from '@emotion/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Card = styled.View`
  width: 48%;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 8px;
`;

export const Avatar = styled.View`
  height: 100px;
  aspect-ratio: 1;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const Image = styled.Image`
  height: 100%;
`;

export const BoxName = styled.View`
  padding: 0 8px 2px 8px;
  border-radius: 10px;
  margin-right: 4px;
  border: 1px solid white;
`;

export const PokemonName = styled.Text`
  color: white;
  text-align: center;
`;
