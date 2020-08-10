import React, {useContext} from 'react';
import {SafeAreaView, Image, Text, View, FlatList} from 'react-native';

import styles from './styles';
import ThemeContext from '@contexts/themeContext';
import ImageItem from '@components/ImageItem';

function GameDetail({route}) {
  const { isLightTheme } = useContext(ThemeContext);

  const {game} = route.params;

  const {flyers, snap, cabinets, marquees, artpreview, titles, cpanel, select, bosses, logo, versus, pcb, gameover, howto, description} = game;

  let array_images = [];
  let id_game = 1;

  if (flyers) array_images.push({id: id_game++, uri: flyers, description: 'Flyer'});
  if (snap) array_images.push({id: id_game++, uri: snap, description: 'Snapshot'});
  if (versus) array_images.push({id: id_game++, uri: versus, description: 'Versus'});
  if (bosses) array_images.push({id: id_game++, uri: bosses, description: 'Boss'});
  if (marquees) array_images.push({id: id_game++, uri: marquees, description: 'Marquee'});
  if (artpreview) array_images.push({id: id_game++, uri: artpreview, description: 'Art. Preview'});
  if (titles) array_images.push({id: id_game++, uri: titles, description: 'Title'});
  if (howto) array_images.push({id: id_game++, uri: howto, description: 'How To'});
  if (gameover) array_images.push({id: id_game++, uri: gameover, description: 'Game Over'});
  if (cpanel) array_images.push({id: id_game++, uri: cpanel, description: 'Control Panel'});
  if (select) array_images.push({id: id_game++, uri: select, description: 'Select'});
  if (pcb) array_images.push({id: id_game++, uri: pcb, description: 'PCB'});
  if (cabinets) array_images.push({id: id_game++, uri: cabinets, description: 'Cabinet'});
  if (logo) array_images.push({id: id_game++, uri: logo, description: 'Logo'});

  const keyExtractor = ({id}) => `${id}`;

  const renderItem = ({item}) => {
    return <ImageItem image={item.uri} description={item.description} />;
  };

  return (
    <SafeAreaView style={[styles.container, !isLightTheme && styles.darkContainer]}>
      <Text style={styles.title}>{description}</Text>
      <FlatList
        data={array_images}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />

    </SafeAreaView>
  );
}

export default GameDetail;
