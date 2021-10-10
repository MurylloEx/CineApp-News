import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #141a29;
  flex: 1;
  padding: 4px 0;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 14px;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  background-color: #1449734a;
  width: 85%;
  height: 44px;
  border-radius: 6px;
  border-width: 1px;
  border-color: #144973;
  padding: 8px 15px; 
  font-size: 18px;
  color: #FFF;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 15%;
  height: 48px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  padding-top: 20px;
  padding-bottom: 8px;
  font-size: 24px;
  font-weight: bold;
  color: #FFF;
  padding-left: 14px;
  padding-right: 14px;
`;

export const BannerButton = styled.TouchableOpacity`
  margin-top: 6px;
`;

export const Banner = styled.Image`
  height: 150px;
  border-radius: 6px;
  margin: 0 14px;
`;

export const SliderMovie = styled.FlatList`
  height: 250px;
  padding: 0 14px;
`;

export const Center = styled.View`
  flex: 1;
  flex-direction: column;
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