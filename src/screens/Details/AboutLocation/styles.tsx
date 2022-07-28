import styled from '@emotion/native';

export const Container = styled.View`
  /* padding: 16px; */
`;

export const MapWrapper = styled.View`
  overflow: hidden;
  position: relative;
  height: 100px;
  margin-bottom: 16px;
  border-radius: 10px;
`;

export const MapImage = styled.Image`
  height: 100px;
`;

export const InfoWrapper = styled.View`
  margin-bottom: 16px;
`;

export const Description = styled.Text`
  color: #bdbdbd;
  margin-bottom: 14px;
  text-transform: capitalize;
  font-size: 12px;
`;

export const Heading = styled.Text`
  color: white;
  margin-bottom: 10px;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 700;
`;
