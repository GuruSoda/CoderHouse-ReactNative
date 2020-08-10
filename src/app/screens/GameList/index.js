import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import GameItem from '@components/GameItem';
import ThemeContext from '@contexts/themeContext';
import { getGameList, getData } from '@services/armameService';

import styles from './styles';

// si no consives la eternidad lo que haces aqui es irrelevante.

function GameList() {
  const {isLightTheme} = useContext(ThemeContext);
  const [result, setResult] = useState({});

  useEffect(() => {
//    const getGames = async () => setGames(await getGameList());

    getGameList().then(data => {
//      setResult({next: data.next, previous: data.previuos});
      setResult(data);
//      setGames(data.results);
    });

//    getGames();
  }, []);

  const keyExtractor = ({id_game}) => `${id_game}`;

  const renderItem = ({item}) => {
    return <GameItem game={item} />;
  };

  const onFinFlat = () => {
    getData(result.next).then(data => {
      setResult({
        next: data.next,
        previous: data.previous,
        results: result.results.concat(data.results),
      });

//      setResult(data);
//      setGames(games.concat(data.results));
    });
  };

  return (
    <SafeAreaView style={[styles.container, !isLightTheme && styles.darkContainer]}>
      <FlatList
        data={result.results}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={onFinFlat}
      />
    </SafeAreaView>
  );
}

export default GameList;
