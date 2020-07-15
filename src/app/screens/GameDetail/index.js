import React from 'react';
import {SafeAreaView, Image, Text} from 'react-native';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

function GameDetail({route}) {
  const {game} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Flyer</Text>
      <Image source={{uri: game.flyer}} style={styles.image} resizeMode="contain"/>
      {false && (
        <React.Fragment>
          <Text>Marquee</Text>
          <Image source={{uri: game.marquees}} style={styles.image} resizeMode="contain"/>
        </React.Fragment>
      )}
    </SafeAreaView>
  );
}

export default GameDetail;
