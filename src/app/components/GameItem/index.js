import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function GameItem({game}) {
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

  return (
    <View style={[styles.gameContainer, selected && styles.selectedGameContainer]}>
      <TouchableOpacity onPress={onPressImage}>
        <View style={styles.imageArea}>
          <Image
            style={[styles.image, selected && styles.selectedImage]}
            resizeMode="center"
            source={{uri: game.flyer}}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressInfo}>
        <View style={[styles.infoArea, selected && styles.selectedInfoArea]}>
          <Text style={styles.name}>{game.description}</Text>
          <Text style={styles.manufacturer}>{game.manufacturer}</Text>
          <Text style={styles.year}>{game.year}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default GameItem;
