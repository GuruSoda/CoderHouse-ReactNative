import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

function ImageItem({image, description}) {

  const navigation = useNavigation();

  const viewImage = () => {
    navigation.navigate('ImageGame', {image: image, description: description});
  };

  return (
    <View style={styles.marqueeContainer}>
      <TouchableOpacity onPress={viewImage}>
        <Image style={styles.image} source={{uri: image}} />
        <Text style={styles.description}>{description}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ImageItem;
