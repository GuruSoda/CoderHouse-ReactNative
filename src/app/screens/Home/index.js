import React from 'react';
import { SafeAreaView } from 'react-native';

import GameItem from '@components/GameItem';

import styles from './styles';

import covergng from '@assets/gng.png';
import coverrygar from '@assets/rygar.png';

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <GameItem image={covergng} name={'Ghosts n Goblins'} manufacturer={'Capcom'} year={1985}/>
      <GameItem image={coverrygar} name={'Rygar (US set 1)'} manufacturer={'Tecmo'} year={1986}/>
     </SafeAreaView>
  );
}

export default Home;
