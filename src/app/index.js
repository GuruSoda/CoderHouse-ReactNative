import React from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native';
import cover from '@assets/gng.png';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gameContainer}>
        <View style={styles.imageArea}>
          <Image style={styles.image} resizeMode="contain" source={cover} />
        </View>
        <View style={styles.infoArea}>
          <Text style={styles.name}>Ghosts'n Goblins</Text>
          <Text style={styles.manufacturer}>Capcom</Text>
          <Text style={styles.year}>1985</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;
