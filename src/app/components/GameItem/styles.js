import { StyleSheet } from 'react-native';
import { grey, red, blue, white, backgroudSelected, borderSelected } from '@constants/colors';

export default StyleSheet.create({
  imageArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 85,
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
//    backgroundColor: red,
    borderRadius: 5,
    margin: 5,
  },
  infoArea: {
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  name: {
    marginBottom: 2,
    color: white,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 15,
    elevation: 1,
    shadowRadius: 0.2,
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
  selectedInfoArea: {
    display: 'none',
  },
  selectedImage: {
    width: 350,
  },
  selectedGameContainer: {
    borderWidth: 4,
    borderColor: borderSelected,
    borderRadius: 6,
    backgroundColor: backgroudSelected,
  },
});
