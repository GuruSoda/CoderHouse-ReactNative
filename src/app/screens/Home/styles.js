import { StyleSheet } from 'react-native';
import { grey, dark } from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: grey,
    flex: 1,
    alignItems: 'center',
  },
  darkContainer: {
    backgroundColor: dark,
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
  texto: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginBottom: 0,
    paddingBottom: 0,
  },
  darkTexto: {
    color: grey,
  },
});
