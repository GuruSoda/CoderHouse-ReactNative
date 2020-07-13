import { StyleSheet } from 'react-native';
import { grey } from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: grey,
    flex: 1,
    alignItems: 'center',
  },
  imagen: {
    flex: 3,
    resizeMode: 'center',
  },
  menu: {
    flex: 6,
    justifyContent: 'space-around',
  },
  randomGame: {
    flex: 1,
  },
});
