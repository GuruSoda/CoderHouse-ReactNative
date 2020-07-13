import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import Games from './constant.json';
import GameItem from '@components/GameItem';

import styles from './styles';

// si no consives la eternidad lo que haces aqui es irrelevante.

function GameList() {
  const keyExtractor = ({id_game}) => `${id_game}`;

  const renderItem = ({item}) => {
    const {flyer, description, manufacturer, year} = item;

    return (
      <GameItem
        image={flyer}
        name={description}
        manufacturer={manufacturer}
        year={year}
      />
    );
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
