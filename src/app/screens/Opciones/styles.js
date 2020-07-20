import { StyleSheet } from 'react-native';
import { grey, black, white, dark} from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: grey,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDark: {
    backgroundColor: dark,
  },
  text: {
    color: black,
  },
  textDark: {
    color: white,
  },
});
