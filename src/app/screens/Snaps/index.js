import React, {useContext, useState, useEffect} from 'react';
import {SafeAreaView, FlatList, ActivityIndicator, Text} from 'react-native';

import styles from './styles';
import ThemeContext from '@contexts/themeContext';
import { getGameList, getData } from '@services/armameService';
import ImageItem from '@components/ImageItem';

function Snaps() {
  const {isLightTheme} = useContext(ThemeContext);
  const [result, setResult] = useState({});
  const [games, setGames] = useState([]);

  useEffect(() => {
//    const getGames = async () => setGames(await getGameList());

    getGameList().then(data => {
//      setResult({next: data.next, previous: data.previuos});
      setResult(data);
//      setGames(data.results);
    });

//    getGames();
  }, []);

  const renderItem = ({item}) => {
    return <ImageItem image={item.snap} description={item.description} />;
  };

  const keyExtractor = ({id_game}) => `${id_game}`;

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

  const onInicioFlat = () => {
    getData(result.previous).then(data => {
      setResult(data);
//      setResult(data);
//      setGames(games.concat(data.results));
    });
  };

//  console.log('Total games:', result.results.length);

//  if (!result.results) console.log('Sin resultado.');

  return (
    <SafeAreaView
      style={[styles.container, !isLightTheme && styles.containerDark]}>
      {!result.results ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
//          contentContainerStyle={{flex: 1, flexDirection: 'column', height: '100%', width: '100%'}}
          data={result.results}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onEndReached={onFinFlat}
//          onRefresh={onInicioFlat}
//          refreshing={true}
        />
      )}
    </SafeAreaView>
  );
}

export default Snaps;
