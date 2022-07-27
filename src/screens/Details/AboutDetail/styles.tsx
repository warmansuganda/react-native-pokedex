import styled from '@emotion/native';

export const Container = styled.View`
  /* padding: 16px; */
`;

export const Card = styled.View`
  background-color: #2c2a2b;
  padding: 12px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardSection = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  /* align-items: center; */
`;

export const CardSectionDivider = styled.View`
  width: 1px;
  background-color: #9e9e9e;
  margin: 0 4px;
  height: 100%;
`;

export const CardDescription = styled.View`
  padding: 0 4px;
  flex: 1;
`;

export const CardDescriptionLabel = styled.Text`
  color: white;
  text-transform: capitalize;
  text-align: center;
  font-size: 12px;
`;

export const CardDescriptionValue = styled.Text`
  color: white;
  margin-bottom: 4px;
  font-weight: 700;
  text-align: center;
  font-size: 12px;
`;

export const Description = styled.Text`
  color: white;
  margin-bottom: 14px;
  text-transform: capitalize;
`;
