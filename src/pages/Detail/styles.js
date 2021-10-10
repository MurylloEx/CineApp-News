import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #191a30;
`;

export const Header = styled.View`
  z-index: 99;
  display: flex;
  position: absolute;
  top: 35px;
  width: 100%;
  padding: 0 14px;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color: rgba(25, 26, 48, 0.8);
  border-radius: 23px;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 45%;
  border-bottom-right-radius: 6px; 
  border-bottom-left-radius: 6px; 
`;

export const ButtonLink = styled.TouchableOpacity`
  background-color: #E72F49;
  width: 63px;
  height: 63px;
  border-radius: 35px;
  position: absolute;
  top: ${(Dimensions.get('window').height * 0.45) - 55}px;
  right: 15px;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 22px;
  font-weight: bold;
  padding: 8px 14px;
  margin-top: 8px;
`;

export const ContentArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
  justify-content: space-between;
`;

export const Rate = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;

export const ListGenres = styled.FlatList`
  padding-left: 14px;
  margin: 8px 0;
  max-height: 35px;
  min-height: 35px;
`;

export const Description = styled.Text`
  padding: 16px;
  padding-top: 14px;
  font-size: 16px;
  line-height: 18px;
  color: #FFF;
  text-align: justify;
`;

export const Center = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BorderSpacer = styled.View`
  width: 25%;
  height: 2px;
  background-color: #e72f49;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 14px;
`;
