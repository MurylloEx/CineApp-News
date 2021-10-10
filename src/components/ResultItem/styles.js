import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 14px;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 140px;
  border-radius: 8px;
`;

export const BannerNotFound = styled.Text`
  height: 140px;
  width: 100%;
  border-radius: 8px;
  background-color: #000;
  text-align: center;
  line-height: 140px;
  font-weight: bold;
  font-size: 32px;
  color: #FFF;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
  padding-top: 8px;
`;

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 4px;
`;

export const Rate = styled.Text`
  padding-left: 4px;
  color: #FFF;
  font-size: 12px;
`;