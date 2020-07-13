import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

function MargueeItem({image, description}) {
  return (
    <View style={styles.marqueeContainer}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

export default MargueeItem;
