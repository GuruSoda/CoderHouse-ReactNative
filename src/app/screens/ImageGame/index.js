import React, {useContext} from 'react';
import {SafeAreaView, Image, Text} from 'react-native';

import styles from './styles';
import ThemeContext from '@contexts/themeContext';

function ImageGame({route}) {
  const { isLightTheme } = useContext(ThemeContext);

  const {image, description} = route.params;

  return (
    <SafeAreaView style={[styles.container, !isLightTheme && styles.darkContainer]}>
      <Text style={styles.title}>{description}</Text>
      <Image source={{uri: image}} style={styles.image} resizeMode="contain" />
    </SafeAreaView>
  );
}

export default ImageGame;
