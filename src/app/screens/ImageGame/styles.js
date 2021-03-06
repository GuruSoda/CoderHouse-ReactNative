import { StyleSheet } from 'react-native';
import { grey, blue, black, dark } from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: grey,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
  },
  darkContainer: {
    backgroundColor: dark,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    textAlign: 'center',
    backgroundColor: 'white',
    width: '80%',
    color: blue,
    margin: 5,
    borderWidth: 1,
    borderColor: black,
    borderRadius: 5,
  },
});
