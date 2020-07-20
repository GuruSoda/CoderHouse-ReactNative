import React, {useContext} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import GameItem from '@components/GameItem';
import ThemeContext from '@contexts/themeContext';

import styles from './styles';

// si no consives la eternidad lo que haces aqui es irrelevante.

function GameList({route}) {
  const { isLightTheme } = useContext(ThemeContext);

  const {Games} = route.params;

  const keyExtractor = ({id_game}) => `${id_game}`;

  const renderItem = ({item}) => {
    return <GameItem game={item} />;
  };

  return (
    <SafeAreaView style={[styles.container, !isLightTheme && styles.darkContainer]}>
      <FlatList
        data={Games}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
}

export default GameList;
