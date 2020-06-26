import { StyleSheet } from 'react-native';
import { grey, red, blue } from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: grey,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 75,
    height: 100,
    marginRight: 5,
  },
  gameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 350,
    height: 120,
    paddingLeft: 5,
    backgroundColor: blue,
//    backgroundColor: '#AA2B2B',
    borderRadius: 5,
  },
  infoArea: {
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
//    justifyContent: 'center',
  },
  name: {
    marginBottom: 2,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    elevation: 1,
    shadowRadius: 0.2,
    shadowColor: 'black',
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  manufacturer: {
    fontStyle: 'italic',
  },
  year: {
    fontStyle: 'italic',
    fontSize: 12,
  },
});
