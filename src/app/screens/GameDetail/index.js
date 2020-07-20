import React, {useContext} from 'react';
import {SafeAreaView, Image, Text} from 'react-native';

import styles from './styles';
import ThemeContext from '@contexts/themeContext';

function GameDetail({route}) {
  const { isLightTheme } = useContext(ThemeContext);

  const {game} = route.params;

  const {flyer, marquees} = game;

  return (
    <SafeAreaView style={[styles.container, !isLightTheme && styles.darkContainer]}>
      <Text style={styles.title}>Flyer</Text>
      <Image source={{uri: flyer}} style={styles.image} resizeMode="contain" />
      {false && (
        <React.Fragment>
          <Text>Marquee</Text>
          <Image source={{uri: marquees}} style={styles.image} resizeMode="contain"/>
        </React.Fragment>
      )}
    </SafeAreaView>
  );
}

export default GameDetail;
