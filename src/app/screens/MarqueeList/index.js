import React, {useContext, useState, useEffect} from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import styles from './styles';

import MarqueeItem from '@components/MarqueeItem';
import ThemeContext from '@contexts/themeContext';
import { getGameList, getData } from '@services/armameService';

function MarqueeList() {
  const {isLightTheme} = useContext(ThemeContext);
  const [result, setResult] = useState({});

  useEffect(() => {
    getGameList().then(data => {
      const filtrado = data.results.filter(item => item.marquees);
      setResult({
        next: data.next,
        previous: data.previous,
        results: filtrado,
      });
    });
  }, []);

  const keyExtractor = ({id_game}) => `${id_game}`;

  const renderItem = ({item}) => {
    const {marquees, description} = item;

    return <MarqueeItem image={marquees} description={description} />;
  };

  const onFinFlat = () => {
    getData(result.next).then(data => {
      const filtrado = data.results.filter(item => item.marquees);
      setResult({
        next: data.next,
        previous: data.previous,
        results: result.results.concat(filtrado),
      });
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

export default MarqueeList;
