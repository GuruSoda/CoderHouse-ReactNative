import React, {useContext} from 'react';
import { SafeAreaView, Button, Image, View, Text } from 'react-native';

import logo from '@assets/logo-mame.png';
import styles from './styles';
import GameItem from '@components/GameItem';
import ThemeContext from '@contexts/themeContext';

function Home({navigation, route}) {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  const handleListGames = () => navigation.navigate('ListGames');
  const handleListMarquee = () => navigation.navigate('ListMarquee');
  const handleOpciones = () => navigation.navigate('Opciones');
  const handleSnaps = () => navigation.navigate('Snaps');

  const {Games} = route.params;
  let randomGame = Math.floor(Math.random() * Games.length);

  return (
    <SafeAreaView style={[styles.container,  !isLightTheme && styles.darkContainer]}>
      <Image source={logo} style={styles.imagen} />
      <View style={styles.menu}>
        <Button title="Listado de Juegos" onPress={handleListGames} />
        <Button title="Listado de Snapshots" onPress={handleSnaps} />
        <Button title="Listado de Marquesinas" onPress={handleListMarquee} />
        <Button title="Opciones" onPress={handleOpciones} />
      </View>
      <Text style={[styles.texto, !isLightTheme && styles.darkTexto]}>Random Game</Text>
      <GameItem style={styles.randomGame} game={Games[randomGame]} />
    </SafeAreaView>
  );
}

export default Home;
