import React from 'react';
import { BackButton, Name } from './styles';
import { Feather } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

const ModalLink = ({ link, title, closeModal }) => {
  return (
    <>
      <BackButton onPress={closeModal} activeOpacity={0.8}>
        <Feather name="x" size={35} color="#FFF"/>
        <Name numberOfLines={1}>{title}</Name>
      </BackButton>

      <WebView 
        onError={ () => closeModal() }
        source={{ uri: link }}
      />
    </>
  )
}

export default ModalLink;