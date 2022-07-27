import styled from '@emotion/native';

export const TabContainer = styled.TouchableOpacity`
  padding: 0 16px;
  display: flex;
  flex-direction: row;
`;

export const TitleWrapper = styled.TouchableOpacity`
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

export const Title = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 14px;
  text-transform: capitalize;
`;

export const ActiveIndicator = styled.View`
  background-color: white;
  width: 20px;
  height: 2px;
  border-radius: 2px;
  margin-top: 4px;
`;

export const Content = styled.View`
  padding: 16px 30px;
`;
