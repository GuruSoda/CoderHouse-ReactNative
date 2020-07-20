import React, {useContext} from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import styles from './styles';

import MarqueeItem from '@components/MarqueeItem';
import ThemeContext from '@contexts/themeContext';

function MarqueeList({route}) {
  const { isLightTheme } = useContext(ThemeContext);

  const {Games} = route.params;

  const keyExtractor = ({id_game}) => `${id_game}`;

  const renderItem = ({item}) => {
    const {marquees, description} = item;

    return <MarqueeItem image={marquees} description={description} />;
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

export default MarqueeList;
