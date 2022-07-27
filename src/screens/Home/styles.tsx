import styled from '@emotion/native';

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
`;

export const SearchLabel = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
`;

export const SearchBox = styled.View`
  display: flex;
  border: 1px solid #2d2b2c;
  border-radius: 50px;
  overflow: hidden;
  flex-direction: row;
  background-color: #2d2b2c;
`;

export const SearchIcon = styled.View`
  padding: 10px 0 10px 10px;
  display: flex;
  justify-content: center;
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
