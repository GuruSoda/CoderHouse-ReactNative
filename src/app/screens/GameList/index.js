import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import GameItem from '@components/GameItem';

import styles from './styles';

// si no consives la eternidad lo que haces aqui es irrelevante.

function GameList({route}) {
  const {Games} = route.params;

  const keyExtractor = ({id_game}) => `${id_game}`;

  const renderItem = ({item}) => {
    return <GameItem game={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Games}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
}

export default GameList;
