import styled from '@emotion/native';

export const Container = styled.View`
  background-color: white;
  flex: 1;
  display: flex;
  padding: 16px;
`;

export const SearchSection = styled.View`
  display: flex;
  margin-bottom: 20px;
`;

export const SearchLabel = styled.Text`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const SearchBox = styled.View`
  display: flex;
  border: 1px solid #ced4da;
  border-radius: 50px;
  overflow: hidden;
  flex-direction: row;
`;

export const SearchIcon = styled.View`
  padding: 10px 0 10px 10px;
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.TextInput`
  padding: 10px 12px;
  flex: 1;
`;
