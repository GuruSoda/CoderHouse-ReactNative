import React from 'react';
import { SafeAreaView, Button, Image, View, Text } from 'react-native';

import logo from '@assets/logo-mame.png';
import styles from './styles';
import GameItem from '@components/GameItem';

function Home({navigation, route}) {
  const handleListGames = () => navigation.navigate('ListGames');
  const handleListMarquee = () => navigation.navigate('ListMarquee');

  const {Games} = route.params;
  let randomGame = Math.floor(Math.random() * Games.length);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.imagen} />
      <View style={styles.menu}>
        <Button title="Listado de Marquesinas" onPress={handleListMarquee} />
        <Button title="Listado de Juegos" onPress={handleListGames} />
      </View>
      <Text>Random Game</Text>
      <GameItem style={styles.randomGame} game={Games[randomGame]} />
    </SafeAreaView>
  );
}

export default Home;
