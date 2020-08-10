import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import noFlyer from '@assets/no-flyers-black-thumb.png';

function GameItem({game}) {
  const {flyers, snap, titles, description, manufacturer, year} = game;
  const navigation = useNavigation();

  const [selected, setSelected] = useState(false);

  const onPressImage = () => {
    if (selected) {
      setSelected(!selected);
    } else {
      navigation.navigate('GameDetail', {game});
    }
  };

  const onPressInfo = () => {
    setSelected(!selected);
  };

  let imagen = '';

  if (flyers) imagen = flyers;
  else if (titles) imagen = titles;
  else if (snap) imagen = snap;

  return (
    <View
      style={[styles.gameContainer, selected && styles.selectedGameContainer]}>
      <TouchableOpacity onPress={onPressImage}>
        <View style={styles.imageArea}>
          <Image
            style={[styles.image, selected && styles.selectedImage]}
            resizeMode="center"
            source={imagen ? {uri: imagen} : noFlyer}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressInfo}>
        <View style={[styles.infoArea, selected && styles.selectedInfoArea]}>
          <Text style={styles.name}>{description}</Text>
          <Text style={styles.manufacturer}>{manufacturer}</Text>
          <Text style={styles.year}>{year}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default GameItem;
