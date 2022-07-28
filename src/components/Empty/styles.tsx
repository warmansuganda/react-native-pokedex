import styled from '@emotion/native';

export const Container = styled.View`
  height: 500px;
  justify-content: center;
  align-items: center;
`;

export const IlustatorWrapper = styled.View`
  height: 200px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Content = styled.View`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: -70px;
  align-items: center;
`;

export const Divider = styled.View`
  width: 50%;
  height: 1px;
  background-color: #292b2f;
`;

export const Messages = styled.Text`
  color: white;
  font-size: 16px;
  margin-top: 10px;
`;
