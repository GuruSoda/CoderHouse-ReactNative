import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles';

function GameItem({image, name, manufacturer, year}) {

  const [selected, setSelected] = useState(false);

  const onPress = () => {
    setSelected(!selected);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.gameContainer, selected && styles.selectedGameContainer]}>
        <View style={styles.imageArea}>
          <Image
            style={[styles.image, selected && styles.selectedImage]}
            resizeMode="contain"
            source={{uri: image}}
          />
        </View>
        <View style={[styles.infoArea, selected && styles.selectedInfoArea]}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.manufacturer}>{manufacturer}</Text>
          <Text style={styles.year}>{year}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default GameItem;
