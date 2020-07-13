import React from 'react';
import { SafeAreaView, Button, Image, View, Text } from 'react-native';

import logo from '@assets/logo-mame.png';
import styles from './styles';
import GameItem from '@components/GameItem';
import Games from './constant.json';

function Home({navigation}) {
  const handleListGames = () => navigation.navigate('ListGames');
  const handleListMarquee = () => navigation.navigate('ListMarquee');

  let randomGame = Math.floor(Math.random() * Games.length);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.imagen} />
      <View style={styles.menu}>
        <Button title="Listado de Marquesinas" onPress={handleListMarquee} />
        <Button title="Listado de Juegos" onPress={handleListGames} />
      </View>
      <Text>Random Game</Text>
      <GameItem
        style={styles.randomGame}
        image={Games[randomGame].flyer}
        name={Games[randomGame].description}
        manufacturer={Games[randomGame].manufacturer}
        year={Games[randomGame].year}
      />
    </SafeAreaView>
  );
}

export default Home;
