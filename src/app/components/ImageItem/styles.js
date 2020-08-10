import { StyleSheet } from 'react-native';
import { blue, white } from '@constants/colors';

export default StyleSheet.create({
  marqueeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: blue,
    borderRadius: 5,
    margin: 5,
    width: 350,
  },
  image: {
    height: 100,
    margin: 5,
    resizeMode: 'center',
  },
  description: {
    textAlign: 'center',
    color: white,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 15,
    margin: 2,
  },
});
