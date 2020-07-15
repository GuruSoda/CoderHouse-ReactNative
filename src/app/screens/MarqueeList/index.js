import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import styles from './styles';

import MarqueeItem from '@components/MarqueeItem';

function MarqueeList({route}) {
  const {Games} = route.params;

  const keyExtractor = ({id_game}) => `${id_game}`;

  const renderItem = ({item}) => {
    const {marquees, description} = item;

    return <MarqueeItem image={marquees} description={description} />;
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

export default MarqueeList;
