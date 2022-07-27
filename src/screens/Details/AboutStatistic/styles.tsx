import styled from '@emotion/native';

export const Container = styled.View``;

export const StatisticWrapper = styled.View`
  margin-bottom: 16px;
`;

export const Statistic = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const StatisticLabel = styled.Text`
  color: white;
  width: 100px;
  text-transform: capitalize;
  font-size: 12px;
`;

export const StatisticValue = styled.Text`
  color: white;
  width: 50px;
  padding: 0 6px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
`;

export const StatisticBar = styled.View`
  background-color: #444d4c;
  height: 6px;
  border-radius: 6px;
  flex: 1;
`;

interface StatisticProgressProps {
  value: number;
}

export const StatisticProgress = styled.View<StatisticProgressProps>`
  background-color: #2cb688;
  height: 6px;
  border-radius: 6px;
  width: ${props => (props.value ? `${props.value}%` : '0%')};
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
